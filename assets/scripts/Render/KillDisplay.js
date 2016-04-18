cc.Class({
    extends: cc.Component,

    properties: {
        labelKills: cc.Label,
        anim: cc.Animation
    },
    
    playKill (kills) {
        this.node.active = true;
        this.labelKills.string = kills;
        this.anim.play('kill-pop');
    },
    
    hide () {
        this.node.active = false;
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
