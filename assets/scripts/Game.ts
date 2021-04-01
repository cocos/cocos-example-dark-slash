import { _decorator, director, Component, Node, Animation } from 'cc';
import { PlayerFX } from './Render/PlayerFX'
import { Player } from './Actors/Player'
import { WaveMng } from './Actors/WaveMng';
import { BossMng } from './Actors/BossMng';
import { PoolMng } from './PoolMng';
import { SortMng } from './Render/SortMng';
import { InGameUI } from './UI/InGameUI';
import { DeathUI } from './UI/DeathUI';
import { GameOverUI } from './UI/GameOverUI';
import { Foe } from './Actors/Foe';
import { Projectile } from './Actors/Projectile';

const { ccclass, property } = _decorator;

@ccclass('Game')
export class Game extends Component {
    @property(Node)
    public player: Node = null!;
    @property(Node)
    public inGameUI: Node = null!;
    @property(Node)
    public playerFX: Node = null!;
    @property(Node)
    public waveMng: Node = null!;
    @property(Node)
    public bossMng: Node = null!;
    @property(Node)
    public poolMng: Node = null!;
    @property(Node)
    public foeGroup: Node = null!;
    @property(Node)
    public deathUI: Node = null!;
    @property(Node)
    public gameOverUI: Node = null!;
    @property(Animation)
    public cameraRoot: Animation = null!;

    onLoad() {
        let playerFX = this.playerFX.getComponent(PlayerFX)!;
        playerFX.init(this);
        let player = this.player.getComponent(Player)!;
        player.init(this);
        player.node.active = false;
        let poolMng = this.poolMng.getComponent(PoolMng)!;
        poolMng.init();
        let waveMng = this.waveMng.getComponent(WaveMng)!;
        waveMng.init(this);
        let bossMng = this.bossMng.getComponent(BossMng)!;
        bossMng.init(this);
        let sortMng = this.foeGroup.getComponent(SortMng)!;
        sortMng.init();
    }

    start() {
        let playerFX = this.playerFX.getComponent(PlayerFX)!;
        playerFX.playIntro();
        let inGameUI = this.inGameUI.getComponent(InGameUI)!;
        inGameUI.init(this);
        let deathUI = this.deathUI.getComponent(DeathUI)!;
        deathUI.init(this);
        let gameOverUI = this.gameOverUI.getComponent(GameOverUI)!;
        gameOverUI.init(this);
    }

    pause() {
        let scheduler = director.getScheduler();
        scheduler.pauseTarget(this.waveMng);
        let sortMng = this.foeGroup.getComponent(SortMng)!;
        sortMng.enabled = false;
    }

    resume() {
        let scheduler = director.getScheduler();
        scheduler.resumeTarget(this.waveMng);
        let sortMng = this.foeGroup.getComponent(SortMng)!;
        sortMng.enabled = true;
    }

    cameraShake() {
        this.cameraRoot.play('camera-shake');
    }

    death() {
        let deathUI = this.deathUI.getComponent(DeathUI)!;
        deathUI.show();
        this.pause();
    }

    revive() {
        let deathUI = this.deathUI.getComponent(DeathUI)!;
        deathUI.hide();
        let playerFX = this.playerFX.getComponent(PlayerFX)!;
        playerFX.playRevive();
        let player = this.player.getComponent(Player)!;
        player.revive();
    }

    clearAllFoes() {
        let nodeList = this.foeGroup.children;
        for (let i = 0; i < nodeList.length; ++i) {
            let foe = nodeList[i].getComponent(Foe);
            if (foe) {
                foe.dead();
            } else {
                let projectile = nodeList[i].getComponent(Projectile);
                if (projectile) {
                    projectile.broke();
                }
            }
        }
    }

    playerReady() {
        this.resume();
        let waveMng = this.waveMng.getComponent(WaveMng)!;
        waveMng.startWave();
        let player = this.player.getComponent(Player)!;
        player.node.active = true;
        player.ready();
    }

    gameOver() {
        let deathUI = this.deathUI.getComponent(DeathUI)!;
        deathUI.hide();
        let gameOverUI = this.gameOverUI.getComponent(GameOverUI)!;
        gameOverUI.show();
    }

    restart() {
        director.loadScene('PlayGame');
    }

}
