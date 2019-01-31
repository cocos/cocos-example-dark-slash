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
        cocosAnalytics.CAAccount.loginSuccess({
            'userID': '101',
            'age': '24',    // 年龄
            'sex': '1',     // 性别：1为男，2为女，其它表示未知
        });
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
        cocosAnalytics.CACustomEvent.onStarted("角色", {
            action: 'create',
            roleID: '01',
            userName: '斩哥',
            race: '人族',
            class: '刺客',
            gameServer: 'platform' + cc.sys.platform,
            level: 1
        });
        cocosAnalytics.CACustomEvent.onStarted("角色", {
            action: 'update',
            level: 100
        });

        cc.director.loadScene('PlayGame');
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
