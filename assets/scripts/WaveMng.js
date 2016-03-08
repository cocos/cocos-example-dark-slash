const Foe = require('Foe');
const FoeType = require('PoolMng').FoeType;
const BossType = require('BossMng').BossType;

const Spawn = cc.Class({
    name: 'Spawn',
    properties: {
        foeType: {
            default: FoeType.Foe0,
            type: FoeType
        },
        total: 0,
        spawnInterval: 0
    },
    ctor () {
        this.spawned = 0;
        this.finished = false;
    },
    spawn (poolMng) {
        if (this.spawned >= this.total) {
            return;
        }
        let newFoe = poolMng.requestFoe(this.foeType);
        if (newFoe) {
            this.spawned++;
            if (this.spawned === this.total) {
                this.finished = true;
            }
            return newFoe;
        } else {
            cc.log('max foe count reached, will delay spawn');
            return null;
        }
    }
});

const Wave = cc.Class({
    name: 'Wave',
    properties: {
        spawns: {
            default: [],
            type: Spawn
        },
        bossType: 0
    },
    init () {
        this.totalFoes = 0;
        this.spawnIdx = 0;
        for (let i = 0; i < this.spawns.length; ++i) {
            this.totalFoes += this.spawns[i].total;
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
                if (!this.currentWave || this.currentWave.totalFoes === 0) {
                    return;
                }
                if (this.killedFoe >= this.currentWave.totalFoes) {
                    this.endWave();
                }
                if (this.waveProgress) {
                    let ratio = Math.min(this.killedFoe/this.currentWave.totalFoes, 1);
                    cc.log('killedFoe: ' + this.killedFoe);
                    cc.log('ratio: ' + ratio);
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
        // this.curFoeCount = 0;
        this.killedFoe = 0;
    },


    startSpawn () {
        this.schedule(this.spawnFoe, this.currentSpawn.spawnInterval);
    },

    endSpawn () {
        this.unschedule(this.spawnFoe);
        let nextSpawn = this.currentWave.getNextSpawn();
        if (nextSpawn) {
            this.currentSpawn = nextSpawn;
            this.startSpawn();
        }
    },

    startWave () {
        // this.curFoeCount = 0;
        this.currentWave.init();
        this.killedFoe = 0;
        this.currentSpawn = this.currentWave.spawns[this.currentWave.spawnIdx];
        this.startSpawn();
        // this.waveProgress = this.game.inGameUI.waveProgress;
        this.game.inGameUI.showWave(this.waveIdx + 1);
    },

    endWave () {
        // update wave index
        // if (this.waveIdx < this.waves.length - 1) {
        //     this.waveIdx++;
        //     this.currentWave = this.waves[this.waveIdx];
        //     this.startWave();
        // } else {
        //     cc.log('all waves spawned!');
        // }
        this.bossProgress.show();
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
        // this.curFoeCount--;
        this.killedFoe++;
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
        var randX = cc.randomMinus1To1() * (this.foeGroup.width - this.spawnMargin)/2;
        var randY = cc.randomMinus1To1() * (this.foeGroup.height - this.spawnMargin)/2;
        return cc.p(randX, randY);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
