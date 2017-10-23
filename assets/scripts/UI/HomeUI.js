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
        //ANALYTICS: login
        cocosAnalytics.CAAccount.loginStart();
        cocosAnalytics.CAAccount.loginSuccess({'userID':'101'});
        // 设置帐号类型
        cocosAnalytics.CAAccount.setAccountType('VIP1');
        // 年龄
        cocosAnalytics.CAAccount.setAge(18);
        // 性别：1为男，2为女，其它表示未知
        cocosAnalytics.CAAccount.setGender(2);
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
        cc.eventManager.pauseTarget(this.btnGroup, true);
        //ANALYTICS: createRole
        cocosAnalytics.CAAccount.createRole({
            roleID:'01',
            userName:'斩哥',
            race:'人族',
            class:'刺客',
            gameServer : 'platform' + cc.sys.platform
        });
        cocosAnalytics.CAAccount.setLevel(1);
        cc.director.loadScene('PlayGame');
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
