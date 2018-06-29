const MoveState = cc.Enum({
    None: -1,
    Stand: -1,
    Up: -1,
    Right: -1,
    Down: -1,
    Left: -1
});

cc.Class({
    extends: cc.Component,

    properties: {
        moveSpeed: 0,
        anim: {
            default: null,
            type: cc.Animation
        },

    },

    statics: {
        MoveState: MoveState
    },

    // use this for initialization
    onLoad: function () {
        this.moveState = MoveState.Stand;
        this.node.on('stand', this.stand, this);
        this.node.on('freeze', this.stop, this);
        this.node.on('update-dir', this.updateDir, this);
    },

    stand: function () {
        if (this.moveState !== MoveState.Stand) {
            this.anim.play('stand');
            this.moveState = MoveState.Stand;
        }
    },

    stop: function () {
        this.anim.stop();
        this.moveState = MoveState.None;
        this.moveDir = null;
    },

    moveUp: function () {
        if (this.moveState !== MoveState.Up) {
            this.anim.play('run_up');
            this.anim.node.scaleX = 1;
            this.moveState = MoveState.Up;
        }
    },

    moveDown: function () {
        if (this.moveState !== MoveState.Down) {
            this.anim.play('run_down');
            this.anim.node.scaleX = 1;
            this.moveState = MoveState.Down;
        }
    },

    moveRight: function () {
        if (this.moveState !== MoveState.Right) {
            this.anim.play('run_right');
            this.anim.node.scaleX = 1;
            this.moveState = MoveState.Right;
        }
    },

    moveLeft: function () {
        if (this.moveState !== MoveState.Left) {
            this.anim.play('run_right');
            this.anim.node.scaleX = -1;
            this.moveState = MoveState.Left;
        }
    },

    updateDir: function (event) {
        this.moveDir = event.dir;
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        if (this.moveDir) {
            this.node.x += this.moveSpeed * this.moveDir.x * dt;
            this.node.y += this.moveSpeed * this.moveDir.y * dt;
            let deg = cc.misc.radiansToDegrees(Math.atan2(this.moveDir.y, this.moveDir.x));
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
    },
});