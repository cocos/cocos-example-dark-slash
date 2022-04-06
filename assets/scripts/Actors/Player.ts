import { _decorator, Component, ParticleSystem2D, Node, SpriteFrame, rect, v2, Vec3, v3, misc, Sprite, Animation, Rect, UITransform, systemEvent, SystemEventType, Touch, EventTouch, tween, TweenSystem, Vec2, find, CameraComponent, Input, input } from 'cc';
import { Game } from '../Game';
import { InGameUI } from '../UI/InGameUI';
import { Move } from './Move';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {
    @property(ParticleSystem2D)
    public fxTrail: ParticleSystem2D = null!;
    @property(Node)
    public spArrow: Node = null!;
    @property([SpriteFrame])
    public sfAtkDirs: SpriteFrame[] = [];
    @property([Vec2])
    public attachPoints: Vec2[] = [];
    @property([SpriteFrame])
    public sfPostAtks: SpriteFrame[] = [];
    @property(Sprite)
    public spPlayer: Sprite = null!;
    @property(Sprite)
    public spSlash: Sprite = null!;
    @property
    public hurtRadius = 0;
    @property
    public touchThreshold = 0;
    @property
    public touchMoveThreshold = 0;
    @property
    public atkDist = 0;
    @property
    public atkDuration = 0;
    @property
    public atkStun = 0;
    @property
    public invincible = false;

    private game: Game = null!;
    private anim: Animation = null!;
    private inputEnabled: boolean = false;
    public isAttacking: boolean = false;
    public isAlive: boolean = false;

    private nextPoseSF: any = null;
    private atkTargetPos: Vec3 = null!;
    private isAtkGoingOut: boolean = false;
    private validAtkRect: Rect = null!;
    private oneSlashKills: number = 0;
    private touchBeganLoc: Vec3 = null!;
    private moveToPos: Vec3 = null!;
    private touchStartTime: number = 0;
    private hasMoved: boolean = false;
    private ownCamera: CameraComponent = null!;

    init(game: any) {
        this.game = game;
        this.anim = this.getComponent(Move)!.anim;
        this.inputEnabled = false;
        this.isAttacking = false;
        this.isAlive = true;
        this.nextPoseSF = null;
        this.registerInput();
        this.spArrow.active = false;
        this.atkTargetPos = v3(0, 0, 0);
        this.isAtkGoingOut = false;
        this.oneSlashKills = 0;

        this.ownCamera = find("Canvas/Main Camera")!.getComponent(CameraComponent)!;
    }

    start() {
        var utf = this.node.parent!.getComponent(UITransform)!;
        this.validAtkRect = rect(25, 25, (utf.width - 50), (utf.height - 50));
    }

    onDestroy() {        
        this.unRegisterInput();
    }

    onTouchStart(touch: EventTouch) {
        if (this.inputEnabled === false) {
            return true;
        }

        var touchLoc = touch.getLocation();
        this.touchBeganLoc = this.ownCamera.screenToWorld(new Vec3(touchLoc.x, touchLoc.y, 0));
        this.moveToPos = this.ownCamera.convertToUINode(this.touchBeganLoc, this.node.parent!);

        this.touchStartTime = Date.now();
        return true; // don't capture event      
    }

    onTouchMove(touch: EventTouch) {
        if (this.inputEnabled === false) {
            return;
        }
        var touchLoc = touch.getLocation();
        var touchLocV3 = this.ownCamera.screenToWorld(new Vec3(touchLoc.x, touchLoc.y, 0));
        this.moveToPos = this.ownCamera.convertToUINode(touchLocV3, this.node.parent!);

        this.spArrow.active = true;

        let moveDir = new Vec3();
        let dist = Vec3.subtract(moveDir, this.touchBeganLoc, touchLocV3).length()
        if (dist > this.touchMoveThreshold) {
            this.hasMoved = true;
        }
    }

    onTouchEnd(touch: EventTouch) {
        this.spArrow.active = false;
        this.moveToPos = null!;
        this.node.emit('update-dir', {
            dir: null
        });

        if (this.inputEnabled === false) {
            return;
        }

        let isHold = this.isTouchHold();
        if (!this.hasMoved && !isHold) {
            var touchLoc = touch.getLocation();
            var touchLocV3 = this.ownCamera.screenToWorld(new Vec3(touchLoc.x, touchLoc.y, 0));
            let atkPos = this.ownCamera.convertToUINode(touchLocV3, this.node.parent!);

            let atkDir = atkPos.subtract(this.node.position);
            Vec3.add(this.atkTargetPos, this.node.position, atkDir.normalize().multiplyScalar(this.atkDist));

            var utf = this.node.parent!.getComponent(UITransform)!;
            let atkPosWorld = utf.convertToWorldSpaceAR(this.atkTargetPos);

            if (!this.validAtkRect.contains(<any>atkPosWorld)) {
                this.isAtkGoingOut = true;
            } else {
                this.isAtkGoingOut = false;
            }
            this.node.emit('freeze');
            this.oneSlashKills = 0;
            this.attackOnTarget(atkDir, this.atkTargetPos);
        }
        this.hasMoved = false;
    }

    unRegisterInput() {
        input.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
        input.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
        input.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
    }

    registerInput() {
        input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
        input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
        input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
    }

    ready() {
        this.fxTrail.resetSystem();
        this.node.emit('stand');
        this.inputEnabled = true;
        this.isAlive = true;
    }

    isTouchHold() {
        let timeDiff = Date.now() - this.touchStartTime;
        return (timeDiff >= this.touchThreshold);
    }

    attackOnTarget(atkDir: any, targetPos: any) {
        var self = this;
        let deg = misc.radiansToDegrees(v2(0, 1).signAngle(atkDir));
        let angleDivider = [0, 12, 35, 56, 79, 101, 124, 146, 168, 180];
        let slashPos: Vec3 = null!;

        let getAtkSF = function (mag: number, sfAtkDirs: SpriteFrame[]) {
            let atkSF = null;
            for (let i = 1; i < angleDivider.length; ++i) {
                let min = angleDivider[i - 1];
                let max = angleDivider[i];
                if (mag <= max && mag > min) {
                    atkSF = sfAtkDirs[i - 1];
                    self.nextPoseSF = self.sfPostAtks[Math.floor((i - 1) / 3)];

                    let v2 = self.attachPoints[i - 1];
                    slashPos = new Vec3(v2.x, v2.y, 0);
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
            this.spPlayer.node.scale = new Vec3(1, this.spPlayer.node.scale.y, 1);
            this.spPlayer.spriteFrame = getAtkSF(mag, this.sfAtkDirs)!;
        } else {
            this.spPlayer.node.scale = new Vec3(-1, this.spPlayer.node.scale.y, 1);
            this.spPlayer.spriteFrame = getAtkSF(mag, this.sfAtkDirs)!;
        }

        tween(this.node).to(this.atkDuration, { position: targetPos }, { easing: 'quintOut' })
            .delay(this.atkStun)
            .call(this.onAtkFinished.bind(this))
            .start()

        this.spSlash.node.position = slashPos;
        this.spSlash.node.angle = -mag;
        this.spSlash.enabled = true;
        this.spSlash.getComponent(Animation)!.play('slash');
        this.inputEnabled = false;
        this.isAttacking = true;
    }

    onAtkFinished() {
        if (this.nextPoseSF) {
            this.spPlayer.spriteFrame = this.nextPoseSF;
        }
        // this.spSlash.enabled = false;
        this.inputEnabled = true;
        this.isAttacking = false;
        this.isAtkGoingOut = false;
        if (this.oneSlashKills >= 3) {
            let inGameUI = this.game.inGameUI.getComponent(InGameUI)!;
            inGameUI.showKills(this.oneSlashKills);
        }
    }

    addKills() {
        this.oneSlashKills++;
        let inGameUI = this.game.inGameUI.getComponent(InGameUI)!;
        inGameUI.addCombo();
    }

    revive() {
        let action = tween().delay(0.6).call(() => {
            this.node.active = false;
        });
    }

    dead() {
        if (this.invincible) return;
        this.node.emit('freeze');
        this.isAlive = false;
        this.isAttacking = false;
        this.inputEnabled = false;
        this.anim.play('dead');
    }

    corpse() {
        this.anim.play('corpse');
        this.scheduleOnce(this.death, 0.7);
    }

    death() {
        this.game.death();
    }

    shouldStopAttacking() {
        var utf = this.node.parent!.getComponent(UITransform)!;
        let curWorldPos = utf.convertToWorldSpaceAR(this.node.position);
        let targetWorldPos = utf.convertToWorldSpaceAR(this.atkTargetPos);
        if ((curWorldPos.x < this.validAtkRect.xMin && targetWorldPos.x < this.validAtkRect.xMin) ||
            (curWorldPos.x > this.validAtkRect.xMax && targetWorldPos.x > this.validAtkRect.xMax) ||
            (curWorldPos.y < this.validAtkRect.yMin && targetWorldPos.y < this.validAtkRect.yMin) ||
            (curWorldPos.y > this.validAtkRect.yMax && targetWorldPos.y > this.validAtkRect.yMax)) {
            return true;
        } else {
            return false;
        }
    }

    update(dt: number) {
        if (this.isAlive === false) {
            return;
        }
        if (this.isAttacking) {
            if (this.isAtkGoingOut && this.shouldStopAttacking()) {
                TweenSystem.instance.ActionManager.removeAllActionsFromTarget(this.node);
                this.onAtkFinished();
            }
        }
        if (this.inputEnabled && this.moveToPos && this.isTouchHold()) {
            let dirOut = new Vec3();
            Vec3.subtract(dirOut, this.moveToPos, this.node.position);

            let rad = Math.atan2(dirOut.y, dirOut.x);
            let deg = misc.radiansToDegrees(rad);
            this.spArrow.angle = -(90 - deg);
            this.node.emit('update-dir', {
                dir: dirOut.normalize()
            });
        }
    }

}
