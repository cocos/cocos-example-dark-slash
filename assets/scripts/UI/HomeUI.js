cc.Class({
    extends: cc.Component,

    properties: {
        menuAnim: {
            default: null,
            type: cc.Animation
        },
        menuParticle: {
            default: null,
            type: cc.ParticleSystem
        },
        btnGroup: {
            default: null,
            type: cc.Node
        }

        // ...
    },

    // use this for initialization
    onLoad: function () {
        // 连接服务器
        Network.connect();
    },

    start: function () {
        cc.eventManager.pauseTarget(this.btnGroup, true);
        this.scheduleOnce(function() {
            this.menuAnim.play();
            this.menuParticle.enabled = false;
        }.bind(this), 2);
    },

    showParticle: function () {
        this.menuParticle.enabled = true;
    },

    enableButtons: function () {
        cc.eventManager.resumeTarget(this.btnGroup, true);
    },

    playGame: function () {
        var self = this;
        console.log("登录游戏");
        Network.send('Login', { userId: "00000001" }, function (data) {
            PlayerInfo.set(data.playerInfo);
            console.log("人物信息：");
            console.log(data.playerInfo);
            cc.eventManager.pauseTarget(self.btnGroup, true);
            cc.director.loadScene('PlayGame');
        });
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
