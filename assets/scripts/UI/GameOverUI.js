cc.Class({
    extends: cc.Component,

    properties: {
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

    restart () {
        console.log("重新开始");
        var game = this.game;
        Network.send('Restart', { userId: PlayerInfo.userId }, function (data) {
            PlayerInfo.set(data.playerInfo);
            console.log("人物信息：");
            console.log(data.playerInfo);
            game.restart();
        });
    },
    
    share (){
        if(cc.sys.isMobile){
            this.game.sdkManager.share();
        }
    },
});
