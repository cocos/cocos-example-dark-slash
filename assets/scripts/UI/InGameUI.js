cc.Class({
    extends: cc.Component,

    properties: {
        waveUI: cc.Node,
        killDisplay: cc.Node,
        comboDisplay: cc.Node,
        heartRoot: cc.Node,
        heartPrefab: cc.Prefab
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
        this.initHeart();
    },

    initHeart () {
        this.heartRoot.removeAllChildren();
        for (var i = 0; i < PlayerInfo.hp; ++i ) {
            var heart = cc.instantiate(this.heartPrefab);
            heart.x = 12 + i * 28;
            heart.y = -46;
            heart.parent = this.heartRoot;
        }
    },

    refreshHeart () {
        var hp = PlayerInfo.hp;
        var heartList = this.heartRoot.children;
        if (hp !== heartList.length) {
            for (var i = 0, len = heartList.length; i < len; ++i) {
                if (i > hp - 1) {
                    this.heartRoot.removeChild(heartList[i]);
                }
            }
        }
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
