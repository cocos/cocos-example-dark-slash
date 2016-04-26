cc.Class({
    extends: cc.Component,

    properties: {
        labelCombo: cc.Label,
        spFlare: cc.Sprite,
        anim: cc.Animation,
        comboColors: [cc.Color],
        showDuration: 0
    },
    
    init () {
        this.comboCount = 0;
        this.node.active = false;
        this.showTimer = 0;
    },

    // use this for initialization
    playCombo () {
        this.comboCount++;
        this.node.active = true;
        // this.unschedule(this.hide);
        let colorIdx = Math.min(Math.floor(this.comboCount / 10), this.comboColors.length - 1);
        this.spFlare.node.color = this.comboColors[colorIdx];
        this.labelCombo.node.color = this.comboColors[colorIdx];
        this.labelCombo.string = this.comboCount;
        this.anim.play('combo-pop');
        this.showTimer = 0;
        // this.scheduleOnce(this.hide.bind(this), this.showDuration );
    },

    // called every frame, uncomment this function to activate update callback
    hide () {
        this.comboCount = 0;
        this.node.active = false;
    },

    update (dt) {
        if (!this.node.active) {
            return;
        }

        this.showTimer += dt;
        if (this.showTimer >= this.showDuration) {
            this.hide();
        }
    }
});
