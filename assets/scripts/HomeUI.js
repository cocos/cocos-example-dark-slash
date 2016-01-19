cc.Class({
    extends: cc.Component,

    properties: {
        menuAnim: {
            default: null,
            type: cc.Animation
        },
        menuParticle: {
            default: null,
            type: cc.ParticleSystem
        },
        btnGroup: {
            default: null,
            type: cc.Node
        }

        // ...
    },

    // use this for initialization
    onLoad: function () {

    },

    start: function () {
        cc.eventManager.pauseTarget(this.btnGroup, true);
        this.scheduleOnce(function() {
            this.menuAnim.play();
            this.menuParticle.enabled = false;
        }.bind(this), 2);
    },

    showParticle: function () {
        this.menuParticle.enabled = true;
    },

    enableButtons: function () {
        cc.eventManager.resumeTarget(this.btnGroup, true);
    },

    playGame: function () {
        cc.eventManager.pauseTarget(this.btnGroup, true);
        cc.director.loadScene('PlayGame');
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
