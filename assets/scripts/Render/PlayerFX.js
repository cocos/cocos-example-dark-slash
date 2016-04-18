cc.Class({
    extends: cc.Component,

    properties: {
        introAnim: cc.Animation,
        reviveAnim: cc.Animation
    },

    // use this for initialization
    init (game) {
        this.game = game;
        this.introAnim.node.active = false;
        this.reviveAnim.node.active = false;
    },

    playIntro () {
        this.introAnim.node.active = true;
        this.introAnim.play('start');
    },

    playRevive () {
        this.reviveAnim.node.active = true;
        this.reviveAnim.node.setPosition(this.game.player.node.position);
        this.reviveAnim.play('revive');
    },

    introFinish () {
        this.game.playerReady();
        this.introAnim.node.active = false;
    },

    reviveFinish () {
        this.game.playerReady();
        this.reviveAnim.node.active = false;
    },
    
    reviveKill () { // kill all enemies
        this.game.clearAllFoes();
    }
});
