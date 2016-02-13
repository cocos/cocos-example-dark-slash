const Foe = require('Foe');

cc.Class({
    extends: cc.Component,

    properties: {
        killToBoss: 0,
        maxFoe: 0,
        spawnInterval: 0,
        foePrefabs: [cc.Prefab],
        spawnMargin: 0,
        killedFoe: {
            visible: false,
            default: 0,
            notify: function () {
                if (this.killedFoe >= this.killToBoss) {
                    this.endWave();
                }
                if (this.waveProgress) {
                    let ratio = Math.min(this.killedFoe/this.killToBoss, 1);
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
        this.canvas = game.canvas;
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
        this.schedule(this.spawnFoe, this.spawnInterval);
    },

    endWave () {
        this.unschedule(this.spawnFoe);
        // boss
        console.log('spawn boss');
        this.bossProgress.show();
    },

    spawnFoe () {
        if (this.curFoeCount >= this.maxFoe) {
            return;
        }

        let newFoe = null;
        // 使用给定的模板在场景中生成一个新节点
        if (cc.pool.hasObject(Foe)) {
            newFoe = cc.pool.getFromPool(Foe).node;
        } else {
            newFoe = cc.instantiate(this.foePrefabs[0]);
        }
        this.canvas.addChild(newFoe);
        newFoe.setPosition(this.getNewFoePosition());
        newFoe.getComponent('Foe').init(this);
        this.curFoeCount++;
    },

    killFoe () {
        this.curFoeCount--;
        this.killedFoe++;
    },

    despawnFoe (foe) {
        foe.node.removeFromParent();
        cc.pool.putInPool(foe);
    },

    getNewFoePosition () {
        var randX = cc.randomMinus1To1() * (this.canvas.width - this.spawnMargin)/2;
        var randY = cc.randomMinus1To1() * (this.canvas.height - this.spawnMargin)/2;
        return cc.p(randX, randY);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
