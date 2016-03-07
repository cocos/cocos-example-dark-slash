const NodePool = require('NodePool');
const FoeType = cc.Enum({
    Foe0: -1,
    Foe1: -1,
    Foe2: -1,
    Foe3: -1,
    Foe5: -1,
    Foe6: -1,
    Boss1: -1,
    Boss2: -1
});
const ProjectileType = cc.Enum({
    Arrow: -1,
    Fireball: -1
});

cc.Class({
    extends: cc.Component,

    properties: {
        foePools: {
            default: [],
            type: NodePool
        },
        projectilePools: {
            default: [],
            type: NodePool
        }
    },

    statics: {
        FoeType: FoeType,
        ProjectileType: ProjectileType
    },

    // use this for initialization
    init () {
        for (let i = 0; i < this.foePools.length; ++i) {
            this.foePools[i].init();
        }

        for (let i = 0; i < this.projectilePools.length; ++i) {
            this.projectilePools[i].init();
        }
    },

    requestFoe (foeType) {
        let thePool = this.foePools[foeType];
        if (thePool.idx >= 0) {
            return thePool.request();
        } else {
            return null;
        }
    },

    returnFoe (foeType, obj) {
        let thePool = this.foePools[foeType];
        if (thePool.idx < thePool.size) {
            thePool.return(obj);
        } else {
            cc.log('Return obj to a full pool, something has gone wrong');
            return;
        }
    },

    requestProjectile (type) {
        let thePool = this.projectilePools[type];
        if (thePool.idx >= 0) {
            return thePool.request();
        } else {
            return null;
        }
    },

    returnProjectile (type, obj) {
        let thePool = this.projectilePools[type];
        if (thePool.idx < thePool.size) {
            thePool.return(obj);
        } else {
            cc.log('Return obj to a full pool, something has gone wrong');
            return;
        }
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
