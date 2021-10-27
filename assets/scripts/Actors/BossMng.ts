import { _decorator, Component } from 'cc';
import { Game } from '../Game';
import { BossType } from '../Types';
import { Spawn } from './Spawn';

const { ccclass, property } = _decorator;

@ccclass('BossMng')
export class BossMng extends Component {
    @property(Spawn)
    public demonSpawn: Spawn = null!;

    private game: Game = null!;
    private bossIdx: number = 0;
    private waveMng: any = null!;

    init(game: Game) {
        this.game = game;
        this.waveMng = game.waveMng.getComponent("WaveMng")!;
        this.bossIdx = 0;
    }

    startBoss() {
        if (this.bossIdx === BossType.Demon) {
            this.waveMng.startBossSpawn(this.demonSpawn);
        }
    }

    endBoss() {
        this.bossIdx++;
    }

}
