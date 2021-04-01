import { _decorator, log } from 'cc';
import { PoolMng } from '../PoolMng';
import { FoeType } from '../Types';
const { ccclass, property } = _decorator;

@ccclass('Spawn')
export class Spawn {
    @property({ type: FoeType })
    public foeType: FoeType = FoeType.Foe0;
    @property
    public total = 0;
    @property
    public spawnInterval = 0;
    @property
    public isCompany = false;

    public spawned: number = 0;
    public finished: boolean = false;

    spawn(poolMng: PoolMng) {
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
            log('max foe count reached, will delay spawn');
            return null;
        }
    }

}
