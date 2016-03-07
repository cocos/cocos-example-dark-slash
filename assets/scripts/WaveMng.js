const Foe = require('Foe');
const FoeType = require('PoolMng').FoeType;

const Wave = cc.Class({
    name: 'Wave',
    properties: {
        isBossWave: false,
        foeType: {
            default: FoeType.Foe0,
            type: FoeType
        },
        killToBoss: 0,
        maxFoe: 0,
        spawnInterval: 0,
        foePrefab: cc.Prefab,
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
                if (!this.currentWave) return;
                if (this.killedFoe >= this.currentWave.killToBoss) {
                    this.endWave();
                }
                if (this.waveProgress) {
                    let ratio = Math.min(this.killedFoe/this.currentWave.killToBoss, 1);
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
        this.currentWave = this.waves[this.waveIdx];
        this.waveProgress = this.waveProgress.getComponent('WaveProgress');
        this.waveProgress.init(this);
        this.bossProgress = this.bossProgress.getComponent('BossProgress');
        this.bossProgress.init(this);
        // this.waveProgress = null;
        this.curFoeCount = 0;
        this.killedFoe = 0;
    },

    startWave () {
        this.curFoeCount = 0;
        this.killedFoe = 0;
        // this.waveProgress = this.game.inGameUI.waveProgress;
        this.game.inGameUI.showWave(this.waveIdx + 1);
        this.schedule(this.spawnFoe, this.currentWave.spawnInterval);
    },

    endWave () {
        this.unschedule(this.spawnFoe);
        // boss
        if (this.currentWave.isBossWave) {
            cc.log('hiding boss progress if present');
            this.bossProgress.hide();
        }
        // update wave index
        if (this.waveIdx < this.waves.length - 1) {
            this.waveIdx++;
            this.currentWave = this.waves[this.waveIdx];
            this.startWave();
        } else {
            cc.log('all waves spawned!');
        }
        if (this.currentWave.isBossWave) {
            this.bossProgress.show();
        }
    },

    spawnFoe () {
        if (this.curFoeCount >= this.currentWave.maxFoe) {
            return;
        }

        let foeType = this.currentWave.foeType;
        let newFoe = this.game.poolMng.requestFoe(foeType);
        if (newFoe) {
            this.foeGroup.addChild(newFoe);
            newFoe.setPosition(this.getNewFoePosition());
            newFoe.getComponent('Foe').init(this);
            this.curFoeCount++;
        } else {
            cc.log('requesting too many foes! please increase size');
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
        this.curFoeCount--;
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
