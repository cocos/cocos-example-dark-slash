cc.Class({
    extends: cc.Component,

    properties: {
        waveUI: cc.Node,
        killDisplay: cc.Node,
        comboDisplay: cc.Node
        // waveProgress: cc.Node
    },

    // use this for initialization
    init (game) {
        this.waveUI = this.waveUI.getComponent('WaveUI');
        this.waveUI.node.active = false;
        this.killDisplay = this.killDisplay.getComponent('KillDisplay');
        this.killDisplay.node.active = false;
        this.comboDisplay = this.comboDisplay.getComponent('ComboDisplay');
        this.comboDisplay.init();
        // this.waveProgress = this.waveProgress.getComponent('WaveProgress');
        // this.waveProgress.init(game.waveMng);
    },

    showWave (num) {
        this.waveUI.node.active = true;
        this.waveUI.show(num);
    },
    
    showKills (num) {
        this.killDisplay.playKill(num);
    },
    
    addCombo () {
        this.comboDisplay.playCombo();
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
