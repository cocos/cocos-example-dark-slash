cc.Class({
    extends: cc.Component,

    properties: {
        player: cc.Node,
        inGameUI: cc.Node,
        playerFX: cc.Node,
        waveMng: cc.Node,
        bossMng: cc.Node,
        poolMng: cc.Node,
        foeGroup: cc.Node,
        deathUI: cc.Node,
        gameOverUI: cc.Node
    },

    // use this for initialization
    onLoad () {
        this.playerFX = this.playerFX.getComponent('PlayerFX');
        this.playerFX.init(this);
        this.player = this.player.getComponent('Player');
        this.player.init(this);
        this.player.node.active = false;
        this.poolMng = this.poolMng.getComponent('PoolMng');
        this.poolMng.init();
        this.waveMng = this.waveMng.getComponent('WaveMng');
        this.waveMng.init(this);
        this.bossMng = this.bossMng.getComponent('BossMng');
        this.bossMng.init(this);
    },

    start () {
        this.playerFX.playIntro();
        // UI initialization
        this.inGameUI = this.inGameUI.getComponent('InGameUI');
        this.inGameUI.init(this);
        this.deathUI = this.deathUI.getComponent('DeathUI');
        this.deathUI.init(this);
        this.gameOverUI = this.gameOverUI.getComponent('GameOverUI');
        this.gameOverUI.init(this);
    },

    pause () {
        let scheduler = cc.director.getScheduler();
        scheduler.pauseTarget(this.waveMng);
    },

    resume () {
        let scheduler = cc.director.getScheduler();
        scheduler.resumeTarget(this.waveMng);
    },

    death () {
        this.deathUI.show();
        this.pause();
    },

    revive () {
        this.deathUI.hide();
        this.playerFX.playRevive();
        this.player.revive();
    },

    playerReady: function () {
        this.resume();
        this.waveMng.startWave();
        this.player.node.active = true;
        this.player.ready();
    },

    gameOver: function () {
        this.deathUI.hide();
        this.gameOverUI.show();
    },

    restart: function () {
        cc.director.loadScene('PlayGame');
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
