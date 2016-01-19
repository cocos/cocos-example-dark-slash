cc.Class({
    extends: cc.Component,

    properties: {
        fxTrail: {
            default: null,
            type: cc.ParticleSystem
        },
        spArrow: {
            default: null,
            type: cc.Node
        },
        sfAtkDirs: {
            default: [],
            type: cc.SpriteFrame
        },
        sfPostAtkUp: {
            default: null,
            type: cc.SpriteFrame
        },
        sfPostAtkDown: {
            default: null,
            type: cc.SpriteFrame
        },
        sfPostAtkRight: {
            default: null,
            type: cc.SpriteFrame
        },
    },

    // use this for initialization
    init: function () {
        this.registerInput();
        this.spArrow.active = false;
    },

    registerInput: function () {
        var self = this;
        // touch input
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: function(touch, event) {
                var touchLoc = touch.getLocation();
                self.isMoving = true;
                self.moveToPos = self.node.parent.convertToNodeSpaceAR(touchLoc);
                return true; // don't capture event
            },
            onTouchMoved: function(touch, event) {
                var touchLoc = touch.getLocation();
                self.spArrow.active = true;
                self.moveToPos = self.node.parent.convertToNodeSpaceAR(touchLoc);
            },
            onTouchEnded: function(touch, event) {
                self.isMoving = false; // when touch ended, stop moving
                self.spArrow.active = false;
                self.moveToPos = null;
                self.node.emit('update-dir', {
                    dir: null
                });
            }
        }, self.node);
    },

    ready: function () {
        this.fxTrail.resetSystem();
        this.node.emit('stand');
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        if (this.moveToPos) {
            let dir = cc.pSub(this.moveToPos, this.node.position);
            let rad = cc.pToAngle(dir);
            let deg = cc.radiansToDegrees(rad);
            this.spArrow.rotation = 90-deg;
            this.node.emit('update-dir', {
                dir: cc.pNormalize(dir)
            });
        }
    },
});
