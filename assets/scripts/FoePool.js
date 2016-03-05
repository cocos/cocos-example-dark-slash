const NodePool = cc.Class({
    name: 'NodePool',
    properties: {
        prefab: cc.Prefab,
        size: 0
    },
    ctor () {
        this.idx = 0;
        this.initList = [];
        this.list = [];
    },
    init () {
        for ( let i = 0; i < this.size; ++i ) {
            let obj = cc.instantiate(this.prefab);
            this.initList[i] = obj;
            this.list[i] = obj;
        }
        this.idx = this.size - 1;
    },
    reset () {
        for ( let i = 0; i < this.size; ++i ) {
            let obj = this.initList[i];
            this.list[i] = obj;
            if (obj.active) {
                obj.active = false;
            }
            if (obj.parent) {
                obj.removeFromParent();
            }
        }
        this.idx = this.size - 1;
    },

    request ()  {
        if ( this.idx < 0 ) {
            cc.log ("Error: the pool do not have enough free item.");
            return null;
        }
        let obj = this.list[this.idx];
        if ( obj ) {
            obj.active = true;
        }
        --this.idx;
        return result;
    },
    return ( obj ) {
        ++this.idx;
        obj.active = false;
        if (obj.parent) {
            obj.removeFromParent();
        }
        this.list[this.idx] = obj;
    }
});

const FoeType = cc.Enum({
    Foe0: -1,
    Foe5: -1
});

cc.Class({
    extends: cc.Component,

    properties: {
        pools: {
            default: [],
            type: NodePool
        }
    },

    statics: {
        FoeType: FoeType
    },

    // use this for initialization
    onLoad () {
        for (let i = 0; i < this.pools.length; ++i) {
            this.pools[i].init();
        }
    },

    requestFoe (foeType) {
        let thePool = this.pools[foeType];
        if (thePool.idx >= 0) {
            return thePool.request();
        } else {
            return null;
        }
    },

    returnFoe (foeType, obj) {
        let thePool = this.pools[foeType];
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
