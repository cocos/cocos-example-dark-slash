const MoveState = require('Move').MoveState;
const FoeType = require('Types').FoeType;
const ProjectileType = require('Types').ProjectileType;
const AttackType = cc.Enum({
    Melee: -1,
    Range: -1
});

cc.Class({
    extends: cc.Component,

    properties: {
        foeType: {
            default: FoeType.Foe0,
            type: FoeType
        },
        atkType: {
            default: AttackType.Melee,
            type: AttackType
        },
        projectileType: {
            default: ProjectileType.Arrow,
            type: ProjectileType
        },
        hitPoint: 0,
        hurtRadius: 0,
        atkRange: 0,
        atkDist: 0,
        atkDuration: 0,
        atkStun: 0,
        atkPrepTime: 0,
        corpseDuration: 0,
        sfAtkDirs: [cc.SpriteFrame],
        fxSmoke: cc.ParticleSystem,
        fxBlood: cc.Animation,
        fxBlade: cc.Animation
    },

    // use this for initialization
    init (waveMng) {
        this.waveMng = waveMng;
        this.player = waveMng.player;
        this.isAttacking = false;
        this.isAlive = false;
        this.isInvincible = false;
        this.isMoving = false;
        this.hp = this.hitPoint;
        this.move = this.getComponent('Move');
        this.anim = this.move.anim;
        this.spFoe = this.anim.getComponent(cc.Sprite);
        this.bloodDuration = this.fxBlood.getAnimationState('blood').clip.duration;
        this.fxBlood.node.active = false;
        this.fxBlade.node.active = false;

        if (this.anim.getAnimationState('born')) {
            this.anim.play('born');
        } else {
            this.readyToMove();
        }
    },


    // called every frame, uncomment this function to activate update callback
    update (dt) {
        if (this.isAlive === false) {
            return;
        }

        let dist = this.player.node.position.sub(this.node.position).mag();

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
            let dir = this.player.node.position.sub(this.node.position);
            let rad = Math.atan2(dir.y, dir.x);
            let deg = cc.misc.radiansToDegrees(rad);
            if (dist < this.atkRange) {
                this.prepAttack(dir);
                return;
            }
            this.node.emit('update-dir', {
                dir: dir.normalize()
            });
        }
    },

    readyToMove () {
        this.isAlive = true;
        this.isMoving = true;
        this.fxSmoke.resetSystem();
    },

    prepAttack (dir) {
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
    },

    attack () {
        if (this.isAlive === false) {
            return;
        }
        this.anim.stop();
        let atkDir = this.player.node.position.sub(this.node.position);
        let targetPos = null;
        if (this.atkType === AttackType.Melee) {
            targetPos = this.node.position.add( atkDir.normalize().mul(this.atkDist) );
        }
        this.attackOnTarget(atkDir, targetPos);
    },

    attackOnTarget: function (atkDir, targetPos) {
        let deg = cc.misc.radiansToDegrees( cc.v2(0, 1).signAngle(atkDir) );
        let angleDivider = [0, 45, 135, 180];
        let slashPos = null;
        function getAtkSF(mag, sfAtkDirs) {
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
                cc.error('cannot find correct attack pose sprite frame! mag: ' + mag);
                return null;
            }
        }

        let mag = Math.abs(deg);
        if (deg <= 0) {
            this.anim.node.scaleX = 1;
            this.spFoe.spriteFrame = getAtkSF(mag, this.sfAtkDirs);
        } else {
            this.anim.node.scaleX = -1;
            this.spFoe.spriteFrame = getAtkSF(mag, this.sfAtkDirs);
        }
        let delay = cc.delayTime(this.atkStun);
        let callback = cc.callFunc(this.onAtkFinished, this);

        if (this.atkType === AttackType.Melee) {
            let moveAction = cc.moveTo(this.atkDuration, targetPos).easing(cc.easeQuinticActionOut());
            this.node.runAction(cc.sequence(moveAction, delay, callback));
            this.isAttacking = true;
        } else {
            if (this.projectileType === ProjectileType.None) {
                return;
            }
            this.waveMng.spawnProjectile(this.projectileType, this.node.position, atkDir);
            this.node.runAction(cc.sequence(delay, callback));
        }
    },

    onAtkFinished () {
        this.isAttacking = false;
        if (this.isAlive) {
            this.isMoving = true;
        }
    },

    dead () {
        this.move.stop();
        this.isMoving = false;
        this.isAttacking = false;
        this.anim.play('dead');
        this.fxBlood.node.active = true;
        this.fxBlood.node.scaleX = this.anim.node.scaleX;
        this.fxBlood.play('blood');
        this.fxBlade.node.active = true;
        this.fxBlade.node.rotation = (Math.random() - 0.5) * 2 * 40; 
        this.fxBlade.play('blade');
        this.unscheduleAllCallbacks();
        this.node.stopAllActions();
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
    },

    invincible () {
        this.fxBlood.node.active = false;
        this.isMoving = true;
        let blink = cc.blink(1, 6);
        let callback = cc.callFunc(this.onInvincibleEnd, this);
        this.anim.node.runAction(cc.sequence(blink, callback));
    },

    onInvincibleEnd () {
        this.isInvincible = false;
    },

    corpse () {
        this.anim.play('corpse');
        this.fxBlood.node.active = false;
        this.scheduleOnce(this.recycle, this.corpseDuration);
    },

    recycle () {
        this.waveMng.despawnFoe(this);
    }
});
