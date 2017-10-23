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
        //ANALYTICS
        let orderID = Date.now().toString();
        cocosAnalytics.CAPayment.payBegin({
            // amount 付费金额，单位为分，必填
            amount: 1,
            // currencyType 货币类型，可选。默认CNY
            currencyType: 'CNY',
            // payType 支付方式，可选。默认为空
            payType: '信用卡',
            // iapID 付费点，可选。默认为空
            iapID: '原地满血复活',
            // orderID 订单编号，可选。默认为空
            orderID: orderID
        });        
        cocosAnalytics.CAPayment.paySuccess({
            // amount 付费金额，单位为分，必填
            amount: 1,
            // currencyType 货币类型，可选。默认CNY
            currencyType: 'CNY',
            // payType 支付方式，可选。默认为空
            payType: '信用卡',
            // iapID 付费点，可选。默认为空
            iapID: '原地满血复活',
            // orderID 订单编号，可选。默认为空
            orderID: orderID
        });        
        this.game.revive();
    },

    gameover () {
        this.game.gameOver();
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
