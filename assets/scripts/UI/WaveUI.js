cc.Class({
    extends: cc.Component,

    properties: {
        labelWave: cc.Label,
        anim: cc.Animation
    },

    // use this for initialization
    onLoad: function () {

    },

    show (num) {
        this.labelWave.string = num;
        this.anim.play('wave-pop');
    },

    hide () {
        this.node.active = false;
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
