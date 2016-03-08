const BossType = cc.Enum({
    Demon: -1,
    SkeletonKing: -1
});

cc.Class({
    extends: cc.Component,
    properties: {

    },

    statics: {
        BossType: BossType
    }

});