import { _decorator, Component, Animation, ccenum, Vec3, misc } from 'cc';
const { ccclass, property } = _decorator;

enum MoveState {
    None = 0,
    Stand,
    Up,
    Right,
    Down,
    Left
};
ccenum(MoveState);

@ccclass('Move')
export class Move extends Component {
    @property
    public moveSpeed = 0;
    @property(Animation)
    public anim: Animation = null!;

    private moveState: MoveState = MoveState.Stand;
    private moveDir: Vec3 = null!;

    onLoad() {
        this.moveState = MoveState.Stand;
        this.node.on('stand', this.stand, this);
        this.node.on('freeze', this.stop, this);
        this.node.on('update-dir', this.updateDir, this);
    }

    stand() {
        if (this.moveState !== MoveState.Stand) {
            this.anim.play('stand');
            this.moveState = MoveState.Stand;
        }
    }

    stop() {
        this.anim.stop();
        this.moveState = MoveState.None;
        this.moveDir = null!;
    }

    moveUp() {
        if (this.moveState !== MoveState.Up) {
            this.anim.play('run_up');
            this.anim.node.scale = new Vec3(1, 1, 1);
            this.moveState = MoveState.Up;
        }
    }

    moveDown() {
        if (this.moveState !== MoveState.Down) {
            this.anim.play('run_down');
            this.anim.node.scale = new Vec3(1, 1, 1);
            this.moveState = MoveState.Down;
        }
    }

    moveRight() {
        if (this.moveState !== MoveState.Right) {
            this.anim.play('run_right');
            this.anim.node.scale = new Vec3(1, 1, 1);
            this.moveState = MoveState.Right;
        }
    }

    moveLeft() {
        if (this.moveState !== MoveState.Left) {
            this.anim.play('run_right');
            this.anim.node.scale = new Vec3(-1, 1, 1);
            this.moveState = MoveState.Left;
        }
    }

    updateDir(event: any) {
        this.moveDir = event.dir;
    }

    update(dt: number) {
        if (this.moveDir) {
            this.node.position = new Vec3(
                this.node.position.x + this.moveSpeed * this.moveDir.x * dt,
                this.node.position.y + this.moveSpeed * this.moveDir.y * dt,
                0
            );
            let deg = misc.radiansToDegrees(Math.atan2(this.moveDir.y, this.moveDir.x));
            if (deg >= 45 && deg < 135) {
                this.moveUp();
            } else if (deg >= 135 || deg < -135) {
                this.moveLeft();
            } else if (deg >= -45 && deg < 45) {
                this.moveRight();
            } else {
                this.moveDown();
            }
        } else if (this.moveState !== MoveState.None) {
            this.stand();
        }
    }

}
