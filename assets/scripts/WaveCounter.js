cc.Class({
    extends: cc.Component,

    properties: {
        counter: cc.Label,
        num: 0,
        isCounting: false
    },

    // use this for initialization
    onLoad: function () {

    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        if (this.isCounting) {
            this.counter.string = Math.floor(this.num);
        }
    },
});
