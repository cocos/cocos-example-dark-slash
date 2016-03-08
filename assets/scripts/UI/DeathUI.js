cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
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

    revive () {
        this.game.revive();
    },

    gameover () {
        this.game.gameOver();
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
