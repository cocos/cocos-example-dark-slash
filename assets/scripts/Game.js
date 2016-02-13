cc.Class({
    extends: cc.Component,

    properties: {
        player: cc.Node,
        inGameUI: cc.Node,
        playerIntro: cc.Node,
        foe: cc.Node
    },

    // use this for initialization
    onLoad: function () {
        this.playerIntro = this.playerIntro.getComponent('PlayerIntro');
        this.playerIntro.init(this);
        this.player = this.player.getComponent('Player');
        this.player.init();
        this.player.active = false;
        this.foe = this.foe.getComponent('Foe');
        this.foe.init(this.player);

        // UI
        this.inGameUI = this.inGameUI.getComponent('InGameUI');
        this.inGameUI.init();
    },

    start: function () {
        this.playerIntro.playIntro();
    },

    playerReady: function () {
        this.inGameUI.showWave(1);
        this.player.active = true;
        this.player.ready();
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
