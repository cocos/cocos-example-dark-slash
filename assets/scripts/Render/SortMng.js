cc.Class({
    extends: cc.Component,

    properties: {
    },

    // use this for initialization
    init: function () {
        this.frameCount = 0;
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        if (++this.frameCount % 6 === 0) {
            this.sortChildrenByY();
        }
    },
    
    sortChildrenByY () {
        let listToSort = this.node.children.slice();
        listToSort.sort(function (a, b){
            return b.y - a.y;
        });
        for (let i = 0; i < listToSort.length; ++i) {
            let node = listToSort[i];
            if (node.active) {
                node.setSiblingIndex(i);
            }
        }
    }
});
