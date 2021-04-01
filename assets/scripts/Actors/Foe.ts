import { _decorator, Component, SpriteFrame, ParticleSystem2D, Animation, Sprite, ccenum, misc, v2, error, tween, TweenSystem, Tween, Vec3 } from 'cc';
import { Move } from './Move';
import { FoeType } from '../Types';
import { ProjectileType } from '../Types';
import { WaveMng } from './WaveMng';
import { Player } from './Player';
const { ccclass, property } = _decorator;

enum AttackType {
    Melee = 0,
    Range
};
ccenum(AttackType);

@ccclass('Foe')
export class Foe extends Component {
    @property({ type: FoeType })
    public foeType: FoeType = FoeType.Foe0;
    @property({ type: AttackType })
    public atkType: AttackType = AttackType.Melee;
    @property({ type: ProjectileType })
    public projectileType: ProjectileType = ProjectileType.Arrow;
    @property
    public hitPoint = 0;
    @property
    public hurtRadius = 0;
    @property
    public atkRange = 0;
    @property
    public atkDist = 0;
    @property
    public atkDuration = 0;
    @property
    public atkStun = 0;
    @property
    public atkPrepTime = 0;
    @property
    public corpseDuration = 0;
    @property([SpriteFrame])
    public sfAtkDirs: SpriteFrame[] = [];
    @property(ParticleSystem2D)
    public fxSmoke: ParticleSystem2D = null!;
    @property(Animation)
    public fxBlood: Animation = null!;
    @property(Animation)
    public fxBlade: Animation = null!;

    private waveMng: WaveMng = null!
    private player: Player = null!
    private isAttacking: boolean = false;
    private isAlive: boolean = false;
    private isInvincible: boolean = false;
    private isMoving: boolean = false;
    private hp: number = 0;
    private move: Move = null!;
    private anim: Animation = null!;
    private spFoe: Sprite = null!;
    private bloodDuration: number = 0;

    init(waveMng: WaveMng) {
        this.waveMng = waveMng;
        this.player = waveMng.player.getComponent(Player)!;
        this.isAttacking = false;
        this.isAlive = false;
        this.isInvincible = false;
        this.isMoving = false;
        this.hp = this.hitPoint;
        this.move = this.getComponent(Move)!;
        this.anim = this.move.anim;
        this.spFoe = this.anim.getComponent(Sprite)!;
        this.bloodDuration = this.fxBlood.clips[0]!.duration;
        this.fxBlood.node.active = false;
        this.fxBlade.node.active = false;
        if (this.anim.getState('born')) {
            this.anim.play('born');
        } else {
            this.readyToMove();
        }
    }

    update(dt: any) {
        if (this.isAlive === false) {
            return;
        }
        let dirOut = new Vec3();
        let dist = Vec3.subtract(dirOut, this.player.node.position, this.node.position).length();
        if (this.player.isAttacking && this.isInvincible === false) {
            if (dist < this.hurtRadius) {
                this.dead();
                return;
            }
        }
        if (this.isAttacking && this.player.isAlive) {
            if (dist < this.player.hurtRadius) {
                this.player.dead();
                return;
            }
        }
        if (this.player && this.isMoving) {
            let dirOut = new Vec3();
            Vec3.subtract(dirOut, this.player.node.position, this.node.position);

            let rad = Math.atan2(dirOut.y, dirOut.x);
            let deg = misc.radiansToDegrees(rad);
            if (dist < this.atkRange) {
                this.prepAttack(dirOut);
                return;
            }
            this.node.emit('update-dir', {
                dir: dirOut.normalize()
            });
        }
    }

    readyToMove() {
        this.isAlive = true;
        this.isMoving = true;
        this.fxSmoke.resetSystem();
    }

    prepAttack(dir: any) {
        let animName = '';
        if (Math.abs(dir.x) >= Math.abs(dir.y)) {
            animName = 'pre_atk_right';
        } else {
            if (dir.y > 0) {
                animName = 'pre_atk_up';
            } else {
                animName = 'pre_atk_down';
            }
        }
        this.node.emit('freeze');
        this.anim.play(animName);
        this.isMoving = false;
        this.scheduleOnce(this.attack, this.atkPrepTime);
    }

    attack() {
        if (this.isAlive === false) {
            return;
        }
        this.anim.stop();

        let atkDir = new Vec3();
        Vec3.subtract(atkDir, this.player.node.position, this.node.position);

        let targetPos = null;
        if (this.atkType === AttackType.Melee) {
            targetPos = new Vec3();
            Vec3.add(targetPos, this.node.position, atkDir.normalize().multiplyScalar(this.atkDist));
        }
        this.attackOnTarget(atkDir, targetPos);
    }

    attackOnTarget(atkDir: any, targetPos: any) {
        let deg = misc.radiansToDegrees(v2(0, 1).signAngle(atkDir));
        let angleDivider = [0, 45, 135, 180];
        let slashPos = null;
        let getAtkSF = function (mag: number, sfAtkDirs: SpriteFrame[]) {
            let atkSF = null;
            for (let i = 1; i < angleDivider.length; ++i) {
                let min = angleDivider[i - 1];
                let max = angleDivider[i];
                if (mag <= max && mag > min) {
                    atkSF = sfAtkDirs[i - 1];
                    return atkSF;
                }
            }
            if (atkSF === null) {
                error('cannot find correct attack pose sprite frame! mag: ' + mag);
                return null;
            }
        }
        let mag = Math.abs(deg);
        if (deg <= 0) {
            this.anim.node.scale = new Vec3(1, 1, 1);
            this.spFoe.spriteFrame = getAtkSF(mag, this.sfAtkDirs)!;
        } else {
            this.anim.node.scale = new Vec3(-1, 1, 1);
            this.spFoe.spriteFrame = getAtkSF(mag, this.sfAtkDirs)!;
        }

        if (this.atkType === AttackType.Melee) {
            tween(this.node).to(this.atkDuration, { position: targetPos }, { easing: 'quintOut' })
                .delay(this.atkStun)
                .call(this.onAtkFinished.bind(this))
                .start()
            this.isAttacking = true;
        } else {
            if (this.projectileType === ProjectileType.None) {
                return;
            }
            this.waveMng.spawnProjectile(this.projectileType, this.node.position, atkDir);
            tween(this.node).delay(this.atkStun)
                .call(this.onAtkFinished.bind(this))
                .start()
        }
    }

    onAtkFinished() {
        this.isAttacking = false;
        if (this.isAlive) {
            this.isMoving = true;
        }
    }

    dead() {
        this.move.stop();
        this.isMoving = false;
        this.isAttacking = false;
        this.anim.play('dead');
        this.fxBlood.node.active = true;
        this.fxBlood.node.scale = new Vec3(this.anim.node.scale.x, 1, 1);
        this.fxBlood.play('blood');
        this.fxBlade.node.active = true;
        this.fxBlade.node.angle = -((Math.random() - 0.5) * 2 * 40);
        this.fxBlade.play('blade');
        this.unscheduleAllCallbacks();

        TweenSystem.instance.ActionManager.removeAllActionsFromTarget(this.node);

        this.waveMng.hitFoe();
        this.player.addKills();
        if (--this.hp > 0) {
            this.isInvincible = true;
            this.scheduleOnce(this.invincible, this.bloodDuration);
        } else {
            this.isAlive = false;
            this.scheduleOnce(this.corpse, this.bloodDuration);
            this.waveMng.killFoe();
        }
    }

    invincible() {
        this.fxBlood.node.active = false;
        this.isMoving = true;

        var times = 6;
        var slice = 1.0 / times;

        var opts = {
            progress: function (start: number, end: number, current: number, t: number) {
                if (t >= 1) {
                    return start;
                }
                else {
                    var m = t % slice;
                    return (m > (slice / 2)) ? 255 : 0;
                }
            }
        }

        var spr = this.anim.node.getComponent(Sprite)!;
        tween(spr.color).to(1, { a: 255 }, opts)
            .call(this.onInvincibleEnd.bind(this))
            .start();
    }

    onInvincibleEnd() {
        this.isInvincible = false;
    }

    corpse() {
        this.anim.play('corpse');
        this.fxBlood.node.active = false;
        this.scheduleOnce(this.recycle, this.corpseDuration);
    }

    recycle() {
        this.waveMng.despawnFoe(this);
    }

}
