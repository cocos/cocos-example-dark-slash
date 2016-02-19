cc.Class({
    extends: cc.Component,

    properties: {
        target: {
            default: null,
            type: cc.Sprite
        },
        lifeTime: 0.5,
        spawnDuration: 0.1,
        ghostColor: {
            default: cc.color(195, 98, 230, 1),
            type: cc.Color
        }
    },

    // use this for initialization
    onLoad: function () {
        this._time = 0;
        
        if (!this.target) {
            console.log('Please config target');
        }
    },

    update: function (dt) {
        if (!this.target) {
            return;
        }
        
        this._time += dt;
        if (this._time < this.spawnDuration) {
            return;
        }
        this._time = 0;
        
        setTimeout(() => {
            var node = new cc.Node();
            var sprite = node.addComponent(cc.Sprite);
            sprite.spriteFrame = this.target.spriteFrame;
            
            var targetNode = this.target.node;
            var selfNode = this.node;
            node.parent = selfNode.parent;
            node.setSiblingIndex(selfNode.getSiblingIndex() - 1);
            
            var worldPosition = targetNode.convertToWorldSpaceAR(cc.v2(0, 0));
            var position = selfNode.parent.convertToNodeSpaceAR(worldPosition);
            node.position = position;
            node.setAnchorPoint(targetNode.getAnchorPoint());
            node.setScale(targetNode.scaleX, targetNode.scaleY);
            node.color = this.ghostColor;
            
            var action = cc.sequence(cc.fadeTo(this.lifeTime, 0), cc.removeSelf(true));
            node.runAction(action);
        }, 100);
    },
});
