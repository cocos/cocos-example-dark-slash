cc.Class({
    extends: cc.Component,

    properties: {
        hurtRadius: 0,
        fxBlood: cc.Animation
    },

    // use this for initialization
    init (player) {
        this.player = player;
        this.isMoving = true;
        this.move = this.getComponent('Move');
        this.anim = this.move.anim;
        this.bloodDuration = this.fxBlood.getAnimationState('blood').clip.duration;
        this.fxBlood.node.active = false;
        // console.log(this.bloodDuration);
        // this.scheduleOnce(this.dead, 1);
    },

    // called every frame, uncomment this function to activate update callback
    update (dt) {
        if (this.isMoving === false) {
            return;
        }

        if (this.player.isAttacking) {
            let dist = cc.pDistance(this.player.node.position, this.node.position);
            if (dist < this.hurtRadius) {
                this.dead();
                return;
            }
        }
        if (this.player) {
            let dir = cc.pSub(this.player.node.position, this.node.position);
            let rad = cc.pToAngle(dir);
            let deg = cc.radiansToDegrees(rad);
            this.node.emit('update-dir', {
                dir: cc.pNormalize(dir)
            });
        }
    },

    dead () {
        this.move.stop();
        this.isMoving = false;
        this.anim.play('dead');
        this.fxBlood.node.active = true;
        this.fxBlood.node.scaleX = this.anim.node.scaleX;
        this.fxBlood.play('blood');
        // setTimeout(this.corpse.bind(this), this.bloodDuration * 1000);
        this.scheduleOnce(this.corpse, this.bloodDuration);
    },

    corpse () {
        this.anim.play('corpse');
        this.fxBlood.node.active = false;
    }
});
