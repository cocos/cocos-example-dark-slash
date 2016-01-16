const PlayerMove = cc.Enum({
    MoveUp: -1,
    MoveRight: -1,
    MoveDown: -1,
    MoveLeft: -1
});

cc.Class({
    extends: cc.Component,

    properties: {
        fxTrail: {
            default: null,
            type: cc.ParticleSystem
        },
        sfAtkDirs: {
            default: [],
            type: cc.SpriteFrame
        },
        sfPostAtkUp: {
            default: null,
            type: cc.SpriteFrame
        },
        sfPostAtkDown: {
            default: null,
            type: cc.SpriteFrame
        },
        sfPostAtkRight: {
            default: null,
            type: cc.SpriteFrame
        },
    },

    // use this for initialization
    onLoad: function () {
        this.anim = this.getComponent(cc.Animation);
    },

    start: function () {
        this.ready();
    },

    ready: function () {
        this.fxTrail.resetSystem();
        this.anim.play('stand');
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
