cc.Class({
    extends: cc.Component,

    properties: {
        player: cc.Node,
        inGameUI: cc.Node,
        playerFX: cc.Node,
        waveMng: cc.Node,
        bossMng: cc.Node,
        poolMng: cc.Node,
        foeGroup: cc.Node,
        deathUI: cc.Node,
        gameOverUI: cc.Node,
        cameraRoot: cc.Animation
    },

    // use this for initialization
    onLoad () {
        this.playerFX = this.playerFX.getComponent('PlayerFX');
        this.playerFX.init(this);
        this.player = this.player.getComponent('Player');
        this.player.init(this);
        this.player.node.active = false;
        this.poolMng = this.poolMng.getComponent('PoolMng');
        this.poolMng.init();
        this.waveMng = this.waveMng.getComponent('WaveMng');
        this.waveMng.init(this);
        this.bossMng = this.bossMng.getComponent('BossMng');
        this.bossMng.init(this);
        this.sortMng = this.foeGroup.getComponent('SortMng');
        this.sortMng.init();
    },

    start () {
        this.playerFX.playIntro();
        // UI initialization
        this.inGameUI = this.inGameUI.getComponent('InGameUI');
        this.inGameUI.init(this);
        this.deathUI = this.deathUI.getComponent('DeathUI');
        this.deathUI.init(this);
        this.gameOverUI = this.gameOverUI.getComponent('GameOverUI');
        this.gameOverUI.init(this);
    },

    pause () {
        let scheduler = cc.director.getScheduler();
        scheduler.pauseTarget(this.waveMng);
        this.sortMng.enabled = false;
    },

    resume () {
        let scheduler = cc.director.getScheduler();
        scheduler.resumeTarget(this.waveMng);
        this.sortMng.enabled = true;
    },
    
    cameraShake () {
        this.cameraRoot.play('camera-shake');  
    },

    death () {
        this.deathUI.show();
        this.pause();
    },

    revive () {
        this.deathUI.hide();
        this.playerFX.playRevive();
        this.player.revive();
    },
    
    clearAllFoes () {
        let nodeList = this.foeGroup.children;
        for (let i = 0; i < nodeList.length; ++i) {
            let foe = nodeList[i].getComponent('Foe');
            if (foe) {
                foe.dead();                
            } else {
                let projectile = nodeList[i].getComponent('Projectile');
                if (projectile) {
                    projectile.broke();                    
                }
            }
        }
    },

    playerReady: function () {
        this.resume();
        this.waveMng.startWave();
        this.player.node.active = true;
        this.player.ready();
    },

    gameOver: function () {
        this.deathUI.hide();
        this.gameOverUI.show();
    },

    restart: function () {
        cc.director.loadScene('PlayGame');
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
