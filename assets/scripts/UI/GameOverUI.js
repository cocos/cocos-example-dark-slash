cc.Class({
    extends: cc.Component,

    properties: {
    },

    init (game) {
        this.game = game;
        this.hide();
    },

    // use this for initialization
    show () {
        this.node.setPosition(0, 0);
    },

    hide () {
        this.node.x = 3000;
    },

    restart () {
        this.game.restart();
    }
});
