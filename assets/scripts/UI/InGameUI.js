cc.Class({
    extends: cc.Component,

    properties: {
        waveUI: cc.Node
    },

    // use this for initialization
    init () {
        this.waveUI = this.waveUI.getComponent('WaveUI');
        this.waveUI.node.active = false;
    },

    showWave (num) {
        this.waveUI.node.active = true;
        this.waveUI.show(num);
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
