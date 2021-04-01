import { _decorator, Component, log, Node } from 'cc';
import { NodePool } from './NodePool';
import { FoeType, ProjectileType } from './Types';
const { ccclass, property } = _decorator;

@ccclass('PoolMng')
export class PoolMng extends Component {
    @property([NodePool])
    public foePools: NodePool[] = [];
    @property([NodePool])
    public projectilePools: NodePool[] = [];

    init() {
        for (let i = 0; i < this.foePools.length; ++i) {
            this.foePools[i].init();
        }
        for (let i = 0; i < this.projectilePools.length; ++i) {
            this.projectilePools[i].init();
        }
    }

    requestFoe(foeType: FoeType) {
        let thePool = this.foePools[foeType];
        if (thePool.idx >= 0) {
            return thePool.request();
        } else {
            return null;
        }
    }

    returnFoe(foeType: FoeType, obj: Node) {
        let thePool = this.foePools[foeType];
        if (thePool.idx < thePool.size) {
            thePool.return(obj);
        } else {
            log('Return obj to a full pool, something has gone wrong');
            return;
        }
    }

    requestProjectile(type: ProjectileType) {
        let thePool = this.projectilePools[type];
        if (thePool.idx >= 0) {
            return thePool.request();
        } else {
            return null;
        }
    }

    returnProjectile(type: ProjectileType, obj: Node) {
        let thePool = this.projectilePools[type];
        if (thePool.idx < thePool.size) {
            thePool.return(obj);
        } else {
            log('Return obj to a full pool, something has gone wrong');
            return;
        }
    }

}
