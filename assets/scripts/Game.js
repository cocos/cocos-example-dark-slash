cc.Class({
    extends: cc.Component,

    properties: {
        player: cc.Node,
        inGameUI: cc.Node,
        playerIntro: cc.Node,
        waveMng: cc.Node,
        foePool: cc.Node,
        foeGroup: cc.Node
    },

    // use this for initialization
    onLoad: function () {
        this.playerIntro = this.playerIntro.getComponent('PlayerIntro');
        this.playerIntro.init(this);
        this.player = this.player.getComponent('Player');
        this.player.init(this);
        this.player.active = false;
        this.foePool = this.foePool.getComponent('FoePool');
        this.foePool.init();
        this.waveMng = this.waveMng.getComponent('WaveMng');
        this.waveMng.init(this);
    },

    start: function () {
        this.playerIntro.playIntro();
        // UI initialization
        this.inGameUI = this.inGameUI.getComponent('InGameUI');
        this.inGameUI.init(this);
    },

    playerReady: function () {
        this.waveMng.startWave();
        this.player.active = true;
        this.player.ready();
    },

    gameOver: function () {
        cc.log('game over');
        cc.director.loadScene('PlayGame');
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
