const Foe = require('Foe');
const FoeType = require('Types').FoeType;
const BossType = require('Types').BossType;
const Spawn = require('Spawn');

const Wave = cc.Class({
    name: 'Wave',
    properties: {
        spawns: {
            default: [],
            type: Spawn
        },
        bossType: {
            default: BossType.Demon,
            type: BossType
        }
    },
    init () {
        this.totalFoes = 0;
        this.spawnIdx = 0;
        for (let i = 0; i < this.spawns.length; ++i) {
            if (this.spawns[i].isCompany === false) {
                this.totalFoes += this.spawns[i].total;
            }
        }
    },
    getNextSpawn () {// return next spawn
        this.spawnIdx++;
        if (this.spawnIdx < this.spawns.length) {
            return this.spawns[this.spawnIdx];
        } else {
            return null;
        }
    }
});

cc.Class({
    extends: cc.Component,

    properties: {
        waves: {
            default: [],
            type: Wave
        },
        startWaveIdx: 0,
        spawnMargin: 0,
        killedFoe: {
            visible: false,
            default: 0,
            notify: function () {
                if (!this.currentWave || !this.waveTotalFoes ) {
                    return;
                }
                if (this.waveTotalFoes && this.killedFoe >= this.waveTotalFoes) {
                    this.endWave();
                }
                if (this.waveProgress && this.waveTotalFoes) {
                    let ratio = Math.min(this.killedFoe/this.waveTotalFoes, 1);
                    this.waveProgress.updateProgress(ratio);
                }
            }
        },
        waveProgress: cc.Node,
        bossProgress: cc.Node
    },

    // use this for initialization
    init (game) {
        this.game = game;
        this.player = game.player;
        this.foeGroup = game.foeGroup;
        this.waveIdx = this.startWaveIdx;
        this.spawnIdx = 0;
        this.currentWave = this.waves[this.waveIdx];

        this.waveProgress = this.waveProgress.getComponent('WaveProgress');
        this.waveProgress.init(this);
        this.bossProgress = this.bossProgress.getComponent('BossProgress');
        this.bossProgress.init(this);
    },


    startSpawn () {
        this.schedule(this.spawnFoe, this.currentSpawn.spawnInterval);
    },

    startBossSpawn (bossSpawn) {
        this.bossSpawn = bossSpawn;
        this.waveTotalFoes = bossSpawn.total;
        this.killedFoe = 0;
        this.schedule(this.spawnBossFoe, bossSpawn.spawnInterval);
    },

    endSpawn () {
        this.unschedule(this.spawnFoe);
        let nextSpawn = this.currentWave.getNextSpawn();
        if (nextSpawn) {
            this.currentSpawn = nextSpawn;
            this.startSpawn();
            if (nextSpawn.isCompany) {
                this.startBoss();
            }
        }
    },

    startWave () {
        this.unschedule(this.spawnFoe);
        this.currentWave.init();
        this.waveTotalFoes = this.currentWave.totalFoes;
        this.killedFoe = 0;
        this.currentSpawn = this.currentWave.spawns[this.currentWave.spawnIdx];
        this.startSpawn();
        this.game.inGameUI.showWave(this.waveIdx + 1);
    },

    startBoss () {
        this.bossProgress.show();
        this.game.bossMng.startBoss();
    },

    endWave () {
        this.bossProgress.hide();
        this.game.bossMng.endBoss();
        // update wave index
        if (this.waveIdx < this.waves.length - 1) {
            this.waveIdx++;
            this.currentWave = this.waves[this.waveIdx];
            this.startWave();
        } else {
            cc.log('all waves spawned!');
        }
    },

    spawnFoe () {
        if (this.currentSpawn.finished) {
            this.endSpawn();
            return;
        }

        let newFoe = this.currentSpawn.spawn(this.game.poolMng);
        if (newFoe) {
            this.foeGroup.addChild(newFoe);
            newFoe.setPosition(this.getNewFoePosition());
            newFoe.getComponent('Foe').init(this);
            // this.curFoeCount++;
        }
    },

    spawnBossFoe () {
        if (this.bossSpawn.finished) {
            this.unschedule(this.spawnBossFoe);
        }
        let newFoe = this.bossSpawn.spawn(this.game.poolMng);
        if (newFoe) {
            this.foeGroup.addChild(newFoe);
            newFoe.setPosition(this.getNewFoePosition());
            newFoe.getComponent('Foe').init(this);
        }
    },

    spawnProjectile (projectileType, pos, dir, rot) {
        let newProjectile = this.game.poolMng.requestProjectile(projectileType);
        if (newProjectile) {
            this.foeGroup.addChild(newProjectile);
            newProjectile.setPosition(pos);
            newProjectile.getComponent('Projectile').init(this, dir);
        } else {
            cc.log('requesting too many projectiles! please increase size');
        }
    },

    killFoe () {
        this.killedFoe++;
    },
    
    hitFoe () {
        this.game.cameraShake();
    },

    despawnFoe (foe) {
        let foeType = foe.foeType;
        this.game.poolMng.returnFoe(foeType, foe.node);
    },

    despawnProjectile (projectile) {
        let type = projectile.projectileType;
        this.game.poolMng.returnProjectile(type, projectile.node);
    },

    getNewFoePosition () {
        var randX = (Math.random() - 0.5) * 2 * (this.foeGroup.width - this.spawnMargin)/2;
        var randY = (Math.random() - 0.5) * 2 * (this.foeGroup.height - this.spawnMargin)/2;
        return cc.v2(randX, randY);
    },
});