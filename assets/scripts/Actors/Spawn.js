const FoeType = require('Types').FoeType;

const Spawn = cc.Class({
    name: 'Spawn',
    properties: {
        foeType: {
            default: FoeType.Foe0,
            type: FoeType
        },
        total: 0,
        spawnInterval: 0,
        isCompany: false
    },
    ctor () {
        this.spawned = 0;
        this.finished = false;
    },
    spawn (poolMng) {
        if (this.spawned >= this.total) {
            return;
        }
        let newFoe = poolMng.requestFoe(this.foeType);
        if (newFoe) {
            this.spawned++;
            if (this.spawned === this.total) {
                this.finished = true;
            }
            return newFoe;
        } else {
            cc.log('max foe count reached, will delay spawn');
            return null;
        }
    }
});

module.exports = Spawn;