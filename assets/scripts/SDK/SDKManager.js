cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function () {
        if(cc.sys.isMobile){
            this.userPlugin = anysdk.agentManager.getUserPlugin();
            this.iapPlugin = anysdk.agentManager.getIAPPlugin();
            this.sharePlugin = anysdk.agentManager.getSharePlugin();
            if(this.userPlugin){
                this.userPlugin.setListener(this.onUserResult, this);
            }
            if(this.iapPlugin){
                this.iapPlugin.setListener(this.onIAPResult, this);
            }
            if(this.sharePlugin){
                this.sharePlugin.setListener(this.onShareResult, this);
            }
        }
    },
    
    login (btnGroup) {
        this.btnGroup = btnGroup;
        if(this.userPlugin){
            this.userPlugin.login();
        }
    },
    
    pay (game) {
        this.game = game;
        if(this.iapPlugin){
            var info = {
                'Product_Id': '816',
                'Product_Name': 'three hearts',
                'Product_Price': '1',
                'Product_Count': '1',
                'Product_Desc': 'three hearts',
                'Coin_Name': 'heart',
                'Coin_Rate': '1',
                'Role_Id': this.userPlugin.getUserID(),
                'Role_Name': 'daisy',
                'Role_Grade': '1',
                'Role_Balance': 'null',
                'Vip_Level': '0',
                'Party_Name': 'null',
                'Server_Id': '1',
                'Server_Name': '1',
                'EXT': 'Cocos Creator'
            };
            this.iapPlugin.payForProduct(info);
        }
    },
    
    share () {
        if(this.sharePlugin){
            var info = {
                'title' : 'Dark Slash',
                'titleUrl' : 'http://www.cocos.com',
                'site' : 'Dark Slash',
                'siteUrl' : 'http://www.cocos.com',
                'text' : '暗黑斩游戏制作演示 - Cocos Creator制造',
                'comment' : '无',
                'info': '无',
                'description': '无',
                'imageTitle': '无',
                'imageUrl': '无',
                'url': '无',
            };
            this.sharePlugin.share(info);
        }
    },
    
    onUserResult (code, msg){
        cc.log('########## USER RESULT ########## code: ' + code + ',msg: ' + msg);
        switch(code)
        {
        case anysdk.UserActionResultCode.kInitSuccess:
            //do
            break;
        case anysdk.UserActionResultCode.kInitFail:
            //do
            break;
        case anysdk.UserActionResultCode.kLoginSuccess:
            console.log('########## LOGIN SUCCESS ##########');
            var self = this;
            Network.send('Login', { userId: this.userPlugin.getUserID()}, function (data) {
                PlayerInfo.set(data.playerInfo);
                console.log("人物信息：");
                console.log(data.playerInfo);
                cc.eventManager.pauseTarget(self.btnGroup, true);
                cc.director.loadScene('PlayGame');
            });
            break;
        case anysdk.UserActionResultCode.kLoginNetworkError:
            //do
            break;
        case anysdk.UserActionResultCode.kLoginNoNeed:
            //do
            break;
        case anysdk.UserActionResultCode.kLoginFail:
            //do
            break;
        case anysdk.UserActionResultCode.kLoginCancel:
            //do
            break;
        default:
            break;
        }
    },

    onPayResult (code, msg) {
        cc.log('########## PAY RESULT ########## code: ' + code + ',msg: ' + msg);
        switch(code){
            case anysdk.PayResultCode.kPaySuccess:
                console.log('########## PAY SUCCESS ##########');
                Network.receive('PayNotice', function (data) {
                    PlayerInfo.set(data.playerInfo);
                    console.log("复活完毕，玩家信息：");
                    console.log(data.playerInfo);
                    this.game.inGameUI.initHeart();
                    this.game.revive();
                }); 
                break;
            case anysdk.PayResultCode.kPayFail:
                //do
                break;
            case anysdk.PayResultCode.kPayCancel:
                //do
                break;
            case anysdk.PayResultCode.kPayNetworkError:
                //do
                break;
            case anysdk.PayResultCode.kPayProductionInforIncomplete:
                //do
                break;
            case anysdk.PayResultCode.kPayInitSuccess:
                //do
                break;
            case anysdk.PayResultCode.kPayInitFail:
                //do
                 break;
            case anysdk.PayResultCode.kPayNowPaying:
                //do
                break;
            default:
                break;
            }
    },
    
    onShareResult:function(code, msg){
        cc.log('########## Share RESULT ########## code: ' + code + ',msg: ' + msg);
        switch(code){
            case anysdk.ShareResultCode.kShareSuccess:
                //do
                break;
            case anysdk.ShareResultCode.kShareFail:
                //do
                break;
            case anysdk.ShareResultCode.kShareCancel:
                //do
                break;
            case anysdk.ShareResultCode.kShareNetworkError:
                //do
                break;         
            default:
                break;
        }
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
