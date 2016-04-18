cc.Class({
    extends: cc.Component,

    properties: {
        particleToPlay: cc.ParticleSystem,
        finishHandler: cc.Component.EventHandler,
        fireHandler: cc.Component.EventHandler
    },

    // use this for initialization
    playParticle () {
        if (this.particleToPlay) {
            this.particleToPlay.resetSystem();
        }
    },
    
    fire () {
        cc.Component.EventHandler.emitEvents([this.fireHandler]);        
    },

    finish () {
        cc.Component.EventHandler.emitEvents([this.finishHandler]);
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
