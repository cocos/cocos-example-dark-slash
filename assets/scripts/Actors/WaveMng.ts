import { _decorator, Component, Node, log, v3, UITransform, CCLoader, Vec3 } from 'cc';
import { Foe } from './Foe';
import { FoeType, ProjectileType } from '../Types';
import { BossType } from '../Types';
import { Spawn } from './Spawn';
import { Player } from './Player';
import { WaveProgress } from '../UI/WaveProgress';
import { BossProgress } from '../UI/BossProgress';
import { Projectile } from './Projectile';
import { Game } from '../Game';
import { InGameUI } from '../UI/InGameUI';
import { BossMng } from './BossMng';
import { PoolMng } from '../PoolMng';

const { ccclass, property } = _decorator;

@ccclass('Wave')
export class Wave {
    @property([Spawn])
    public spawns: Spawn[] = [];
    @property({ type: BossType })
    public bossType: BossType = BossType.Demon;

    public totalFoes: number = 0;
    public spawnIdx: number = 0;

    init() {
        this.totalFoes = 0;
        this.spawnIdx = 0;
        for (let i = 0; i < this.spawns.length; ++i) {
            if (this.spawns[i].isCompany === false) {
                this.totalFoes += this.spawns[i].total;
            }
        }
    }

    getNextSpawn() {
        this.spawnIdx++;
        if (this.spawnIdx < this.spawns.length) {
            return this.spawns[this.spawnIdx];
        } else {
            return null;
        }
    }
}

@ccclass('WaveMng')
export class WaveMng extends Component {
    @property([Wave])
    public waves: Wave[] = [];
    @property
    public startWaveIdx = 0;
    @property
    public spawnMargin = 0;
    @property
    public _killedFoe = 0;
    @property(Node)
    public waveProgress: Node = null!;
    @property(Node)
    public bossProgress: Node = null!;

    private game: Game = null!;
    public player: Node = null!;
    public foeGroup: Node = null!;
    private waveIdx: number = 0;
    private spawnIdx: number = 0;
    private currentWave: Wave = null!;
    private currentSpawn: Spawn = null!;
    private bossSpawn: Spawn = null!;
    private waveTotalFoes: number = 0;

    get killedFoe(): number {
        return this._killedFoe;
    }

    set killedFoe(val: number) {
        this._killedFoe = val;
        if (!this.currentWave || !this.waveTotalFoes) {
            return;
        }
        if (this.waveTotalFoes && this.killedFoe >= this.waveTotalFoes) {
            this.endWave();
        }
        if (this.waveProgress && this.waveTotalFoes) {
            let ratio = Math.min(this.killedFoe / this.waveTotalFoes, 1);
            let waveProgress = this.waveProgress.getComponent(WaveProgress)!
            waveProgress.updateProgress(ratio);
        }
    }

    init(game: any) {
        this.game = game;
        this.player = game.player;
        this.foeGroup = game.foeGroup;
        this.waveIdx = this.startWaveIdx;
        this.spawnIdx = 0;
        this.currentWave = this.waves[this.waveIdx];
        let waveProgress = this.waveProgress.getComponent(WaveProgress)!;
        waveProgress.init(this);
        let bossProgress = this.bossProgress.getComponent(BossProgress)!;
        bossProgress.init(this);
    }

    startSpawn() {
        this.schedule(this.spawnFoe, this.currentSpawn.spawnInterval);
    }

    startBossSpawn(bossSpawn: Spawn) {
        this.bossSpawn = bossSpawn;
        this.waveTotalFoes = bossSpawn.total;
        this.killedFoe = 0;
        this.schedule(this.spawnBossFoe, bossSpawn.spawnInterval);
    }

    endSpawn() {
        this.unschedule(this.spawnFoe);
        let nextSpawn = this.currentWave.getNextSpawn();
        if (nextSpawn) {
            this.currentSpawn = nextSpawn;
            this.startSpawn();
            if (nextSpawn.isCompany) {
                this.startBoss();
            }
        }
    }

    startWave() {
        this.unschedule(this.spawnFoe);
        this.currentWave.init();
        this.waveTotalFoes = this.currentWave.totalFoes;
        this.killedFoe = 0;
        this.currentSpawn = this.currentWave.spawns[this.currentWave.spawnIdx];
        this.startSpawn();
        let inGameUI = this.game.inGameUI.getComponent(InGameUI)!
        inGameUI.showWave(this.waveIdx + 1);
    }

    startBoss() {
        let bossProgress = this.bossProgress.getComponent(BossProgress)!;
        bossProgress.show();
        let bossMng = this.game.bossMng.getComponent(BossMng)!
        bossMng.startBoss();
    }

    endWave() {
        let bossProgress = this.bossProgress.getComponent(BossProgress)!;
        bossProgress.hide();
        let bossMng = this.game.bossMng.getComponent(BossMng)!
        bossMng.endBoss();
        if (this.waveIdx < this.waves.length - 1) {
            this.waveIdx++;
            this.currentWave = this.waves[this.waveIdx];
            this.startWave();
        } else {
            log('all waves spawned!');
        }
    }

    spawnFoe() {
        if (this.currentSpawn.finished) {
            this.endSpawn();
            return;
        }

        let poolMng = this.game.poolMng.getComponent(PoolMng)!
        let newFoe = this.currentSpawn.spawn(poolMng);
        if (newFoe) {
            this.foeGroup.addChild(newFoe);
            newFoe.setPosition(this.getNewFoePosition());
            newFoe.getComponent(Foe)!.init(this);
        }
    }

    spawnBossFoe() {
        if (this.bossSpawn.finished) {
            this.unschedule(this.spawnBossFoe);
        }
        let poolMng = this.game.poolMng.getComponent(PoolMng)!
        let newFoe = this.bossSpawn.spawn(poolMng);
        if (newFoe) {
            this.foeGroup.addChild(newFoe);
            newFoe.setPosition(this.getNewFoePosition());
            newFoe.getComponent(Foe)!.init(this);
        }
    }

    spawnProjectile(projectileType: ProjectileType, pos: Vec3, dir: Vec3, rot?: Vec3) {
        let poolMng = this.game.poolMng.getComponent(PoolMng)!
        let newProjectile = poolMng.requestProjectile(projectileType);
        if (newProjectile) {
            this.foeGroup.addChild(newProjectile);
            newProjectile.setPosition(pos);
            newProjectile.getComponent(Projectile)!.init(this, dir);
        } else {
            log('requesting too many projectiles! please increase size');
        }
    }

    killFoe() {
        this.killedFoe++;
    }

    hitFoe() {
        this.game.cameraShake();
    }

    despawnFoe(foe: any) {
        let foeType = foe.foeType;
        let poolMng = this.game.poolMng.getComponent(PoolMng)!
        poolMng.returnFoe(foeType, foe.node);
    }

    despawnProjectile(projectile: Projectile) {
        let type = projectile.projectileType;
        let poolMng = this.game.poolMng.getComponent(PoolMng)!
        poolMng.returnProjectile(type, projectile.node);
    }

    getNewFoePosition() {
        var utf = this.foeGroup.getComponent(UITransform)!;
        var randX = (Math.random() - 0.5) * 2 * (utf.width - this.spawnMargin) / 2;
        var randY = (Math.random() - 0.5) * 2 * (utf.height - this.spawnMargin) / 2;
        return v3(randX, randY, 0);
    }

}
