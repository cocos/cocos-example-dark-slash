cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
    },

    init (game) {
        this.game = game;
        this.hide();
    },

    // use this for initialization
    show () {
        this.node.setPosition(0, 0);
    },

    hide () {
        this.node.x = 3000;
    },

    revive () {
        if(cc.sys.isMobile){
            this.game.sdkManager.pay();
        }else{
            // 接收支付后服务器反馈复活的请求
            console.log("支付等待复活");
            var game = this.game;
            Network.receive('PayNotice', function (data) {
                PlayerInfo.set(data.playerInfo);
                console.log("复活完毕，玩家信息：");
                console.log(data.playerInfo);
                game.inGameUI.initHeart();
                game.revive();
            });   
        }
        
    },

    gameover () {
        this.game.gameOver();
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
