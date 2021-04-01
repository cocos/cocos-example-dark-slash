import { _decorator, Component, Node } from 'cc';
const { ccclass } = _decorator;

@ccclass('SortMng')
export class SortMng extends Component {

    private frameCount: number = 0;

    init() {
        this.frameCount = 0;
    }

    update(dt: any) {
        if (++this.frameCount % 6 === 0) {
            this.sortChildrenByY();
        }
    }

    sortChildrenByY() {
        let listToSort = this.node.children.slice();
        listToSort.sort(function (a: Node, b: Node) {
            return b.position.y - a.position.y;
        });
        for (let i = 0; i < listToSort.length; ++i) {
            let node = listToSort[i];
            if (node.active) {
                node.setSiblingIndex(i);
            }
        }
    }

}
