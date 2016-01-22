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
        // ...
    },

    // use this for initialization
    init: function (player) {
        this.player = player;
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        if (this.player) {
            let dir = cc.pSub(this.player.node.position, this.node.position);
            let rad = cc.pToAngle(dir);
            let deg = cc.radiansToDegrees(rad);
            this.node.emit('update-dir', {
                dir: cc.pNormalize(dir)
            });
        }
    },
});
