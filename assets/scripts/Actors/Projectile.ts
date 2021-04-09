import { _decorator, Component, Sprite, Animation, UITransform, Vec3, misc } from 'cc';
import { ProjectileType } from '../Types';
import { Player } from './Player';
import { WaveMng } from './WaveMng';
const { ccclass, property } = _decorator;

@ccclass('Projectile')
export class Projectile extends Component {
    @property({ type: ProjectileType })
    public projectileType: ProjectileType = ProjectileType.Arrow;
    @property(Sprite)
    public sprite: Sprite = null!;
    @property(Animation)
    public fxBroken: Animation = null!;
    @property
    public moveSpeed = 0;
    @property
    public canBreak = true;

    private waveMng: WaveMng = null!;
    private player: Player = null!;
    private direction: Vec3 = null!;
    private isMoving: boolean = false;

    init(waveMng: WaveMng, dir: Vec3) {
        this.waveMng = waveMng;
        this.player = waveMng.player.getComponent(Player)!;
        let rad = Math.atan2(dir.y, dir.x);
        let deg = misc.radiansToDegrees(rad);
        let rotation = 90 - deg;
        this.sprite.node.angle = -rotation;
        this.sprite.enabled = true;
        this.direction = dir.normalize();
        this.isMoving = true;
    }

    broke() {
        this.isMoving = false;
        this.sprite.enabled = false;
        this.fxBroken.node.active = true;
        this.fxBroken.play('arrow-break');
    }

    hit() {
        this.isMoving = false;
        this.onBrokenFXFinished();
    }

    onBrokenFXFinished() {
        this.fxBroken.node.active = false;
        this.waveMng.despawnProjectile(this);
    }

    update(dt: number) {
        if (this.isMoving === false) {
            return;
        }

        let distOut = new Vec3();
        let dist = Vec3.subtract(distOut, this.player.node.position, this.node.position).length();
        if (dist < this.player.hurtRadius && this.player.isAlive) {
            if (this.canBreak && this.player.isAttacking) {
                this.broke();
                return;
            } else {
                this.player.dead();
                this.hit();
                return;
            }
        }
        if (this.isMoving) {
            this.node.position = new Vec3(
                this.node.position.x + this.moveSpeed * this.direction.x * dt,
                this.node.position.y + this.moveSpeed * this.direction.y * dt,
                0
            );

            var utf = this.waveMng.foeGroup.getComponent(UITransform)!;
            if (Math.abs(this.node.position.x) > utf.width / 2 ||
                Math.abs(this.node.position.y) > utf.height / 2) {
                this.onBrokenFXFinished();
            }
        }
    }

}
