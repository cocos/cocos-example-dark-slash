import { _decorator, Prefab, instantiate, Node, log } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('NodePool')
export class NodePool {
    @property(Prefab)
    public prefab: Prefab = null!;
    @property
    public size = 0;

    public idx: number = 0;
    private initList: Node[] = [];
    private list: Node[] = [];

    init() {
        for (let i = 0; i < this.size; ++i) {
            let obj = instantiate(this.prefab);
            this.initList[i] = obj;
            this.list[i] = obj;
        }
        this.idx = this.size - 1;
    }

    reset() {
        for (let i = 0; i < this.size; ++i) {
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
    }

    request() {
        if (this.idx < 0) {
            log("Error: the pool do not have enough free item.");
            return null;
        }
        let obj = this.list[this.idx];
        if (obj) {
            obj.active = true;
        }
        --this.idx;
        return obj;
    }

    return(obj: Node) {
        ++this.idx;
        obj.active = false;
        if (obj.parent) {
            obj.removeFromParent();
        }
        this.list[this.idx] = obj;
    }

}
