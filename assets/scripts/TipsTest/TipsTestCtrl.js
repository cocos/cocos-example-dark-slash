var TipsManager = require('TipsManager');

cc.Class({
    extends: cc.Component,
    onShowTips: function () {
        TipsManager.init.showTips("我是测试范例");
    }
});
