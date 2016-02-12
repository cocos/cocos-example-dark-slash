cc.Class({
    extends: cc.Component,

    properties: {
        fxParticle: cc.ParticleSystem
    },

    // use this for initialization
    onLoad: function () {

    },

    showParticle () {
        this.fxParticle.resetSystem();
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
