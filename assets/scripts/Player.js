cc.Class({
    extends: cc.Component,

    properties: {
        fxTrail: cc.ParticleSystem,
        spArrow: cc.Node,
        sfAtkDirs: [cc.SpriteFrame],
        attachPoints: [cc.Vec2],
        sfPostAtks: [cc.SpriteFrame],
        spPlayer: cc.Sprite,
        spSlash: cc.Sprite,
        touchThreshold: 0,
        atkDist: 0,
        atkDuration: 0,
    },

    // use this for initialization
    init: function () {
        this.inputEnabled = false;
        this.isAttacking = false;
        this.nextPoseSF = null;
        this.registerInput();
        this.spArrow.active = false;
    },

    registerInput: function () {
        var self = this;
        // touch input
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: function(touch, event) {
                if (self.inputEnabled === false) {
                    return true;
                }
                var touchLoc = touch.getLocation();
                self.moveToPos = self.node.parent.convertToNodeSpaceAR(touchLoc);
                self.touchStartTime = Date.now();
                return true; // don't capture event
            },
            onTouchMoved: function(touch, event) {
                if (self.inputEnabled === false) {
                    return;
                }
                var touchLoc = touch.getLocation();
                self.spArrow.active = true;
                self.moveToPos = self.node.parent.convertToNodeSpaceAR(touchLoc);
                self.hasMoved = true;
            },
            onTouchEnded: function(touch, event) {
                if (self.inputEnabled === false) {
                    return;
                }
                self.spArrow.active = false;
                self.moveToPos = null;
                self.node.emit('update-dir', {
                    dir: null
                });
                let isHold = self.isTouchHold();
                if (!self.hasMoved && !isHold) {
                    var touchLoc = touch.getLocation();
                    self.atkPos = self.node.parent.convertToNodeSpaceAR(touchLoc);
                    let atkDir = cc.pSub(self.atkPos, self.node.position);
                    let targetPos = cc.pAdd( self.node.position, cc.pMult(cc.pNormalize(atkDir), self.atkDist) );
                    self.node.emit('freeze');
                    self.attackOnTarget(atkDir, targetPos);
                }
                self.hasMoved = false;
            }
        }, self.node);
    },

    ready: function () {
        this.fxTrail.resetSystem();
        this.node.emit('stand');
        this.inputEnabled = true;
    },

    isTouchHold: function () {
        let timeDiff = Date.now() - this.touchStartTime;
        return ( timeDiff >= this.touchThreshold);
    },

    attackOnTarget: function (atkDir, targetPos) {
        var self = this;
        let deg = cc.radiansToDegrees(cc.pAngleSigned(cc.p(0, 1), atkDir));
        let angleDivider = [0, 12, 35, 56, 79, 101, 124, 146, 168, 180];
        let slashPos = null;
        function getAtkSF(mag, sfAtkDirs) {
            let atkSF = null;
            for (let i = 1; i < angleDivider.length; ++i) {
                let min = angleDivider[i - 1];
                let max = angleDivider[i];
                if (mag <= max && mag > min) {
                    atkSF = sfAtkDirs[i - 1];
                    self.nextPoseSF = self.sfPostAtks[Math.floor(( i - 1 )/3)];
                    slashPos = self.attachPoints[i - 1];
                    return atkSF;
                }
            }
            if (atkSF === null) {
                console.error('cannot find correct attack pose sprite frame! mag: ' + mag);
                return null;
            }
        }

        let mag = Math.abs(deg);
        if (deg <= 0) {
            this.spPlayer.node.scaleX = 1;
            this.spPlayer.spriteFrame = getAtkSF(mag, this.sfAtkDirs);
        } else {
            this.spPlayer.node.scaleX = -1;
            this.spPlayer.spriteFrame = getAtkSF(mag, this.sfAtkDirs);
        }

        let moveAction = cc.moveTo(this.atkDuration, targetPos).easing(cc.easeQuinticActionOut());
        let callback = cc.callFunc(this.onAtkFinished, this);
        this.node.runAction(cc.sequence(moveAction, callback));
        this.spSlash.node.position = slashPos;
        this.spSlash.node.rotation = mag;
        this.spSlash.enabled = true;
        this.spSlash.getComponent(cc.Animation).play('slash');
        this.inputEnabled = false;
        this.isAttacking = true;
    },

    onAtkFinished: function () {
        if (this.nextPoseSF) {
            this.spPlayer.spriteFrame = this.nextPoseSF;
        }
        this.spSlash.enabled = false;
        this.inputEnabled = true;
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        let shouldStopAction = false;
        if (this.isAttacking) {
            if (this.node.x > this.node.parent.width/2 * 0.9) {
                this.node.x = this.node.parent.width/2 * 0.9;
                shouldStopAction = true;
            }
            if (this.node.x < -this.node.parent.width/2 * 0.9 ) {
                this.node.x = -this.node.parent.width/2 * 0.9;
                shouldStopAction = true;
            }
            if (this.node.y > this.node.parent.height/2 * 0.9) {
                this.node.y = this.node.parent.height/2 * 0.9;
                shouldStopAction = true;
            }
            if (this.node.y < -this.node.parent.height/2 * 0.9) {
                this.node.y = -this.node.parent.height/2 * 0.9;
                shouldStopAction = true;
            }
            if (shouldStopAction) {
                this.node.stopAllActions();
                this.onAtkFinished();
            }
        }

        if (this.inputEnabled && this.moveToPos && this.isTouchHold()) {
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
