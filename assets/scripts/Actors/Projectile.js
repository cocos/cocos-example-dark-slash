const ProjectileType = require('Types').ProjectileType;

cc.Class({
    extends: cc.Component,

    properties: {
        projectileType: {
            default: ProjectileType.Arrow,
            type: ProjectileType
        },
        sprite: cc.Sprite,
        fxBroken: cc.Animation,
        moveSpeed: 0,
        canBreak: true
    },

    // use this for initialization
    init (waveMng, dir) {
        this.waveMng = waveMng;
        this.player = waveMng.player;
        let rad = Math.atan2(dir.y, dir.x);
        let deg = cc.misc.radiansToDegrees(rad);
        let rotation = 90-deg;
        this.sprite.node.rotation = rotation;
        this.sprite.enabled = true;
        this.direction = dir.normalize();
        this.isMoving = true;
    },

    broke () {
        this.isMoving = false;
        this.sprite.enabled = false;
        this.fxBroken.node.active = true;
        this.fxBroken.play('arrow-break');
    },

    hit () {
        this.isMoving = false;
        this.onBrokenFXFinished();
    },

    onBrokenFXFinished () {
        this.fxBroken.node.active = false;
        this.waveMng.despawnProjectile(this);
    },

    update (dt) {
        if (this.isMoving === false) {
            return;
        }

        let dist = this.player.node.position.sub(this.node.position).mag();
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
            this.node.x += this.moveSpeed * this.direction.x * dt;
            this.node.y += this.moveSpeed * this.direction.y * dt;
            if (Math.abs(this.node.x) > this.waveMng.foeGroup.width/2  ||
                Math.abs(this.node.y) > this.waveMng.foeGroup.height/2) {
                this.onBrokenFXFinished();
            }
        }
    }
});
