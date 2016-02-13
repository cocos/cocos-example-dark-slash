cc.Class({
    extends: cc.Component,

    properties: {
        fxParticle: cc.ParticleSystem,
        anim: cc.Animation
    },

    // use this for initialization
    init (waveMng) {
        this.waveMng = waveMng;
    },

    show () {
        this.node.active = true;
        this.anim.play('turn-red');
    },

    hide () {
        this.node.active = false;
    },

    showParticle () {
        this.fxParticle.resetSystem();
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
