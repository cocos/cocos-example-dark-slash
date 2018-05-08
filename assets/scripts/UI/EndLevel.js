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
        cc.director.pause(true);
        this.node.setPosition(0, 0);
    },

    hide () {
        this.node.y = 1000;
    },

    restart () {
        cc.director.resume(true);
        this.game.restart();
    },

    install () {
        if (cc.sys.platform === cc.sys.OS_ANDROID) {
            let className = "org/cocos2dx/javascript/AppActivity";
            let methodName = "showInstallPrompt";
            let methodSignature = "()V";
            jsb.reflection.callStaticMethod(className, methodName, methodSignature);
        }
        else {
            console.log('Current device not supported.');
        }
    },
    
    next () {
        cc.director.resume(true);
        this.hide();
    }

});
