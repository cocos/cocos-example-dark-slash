import { _decorator, Component, ParticleSystem2D, Animation } from 'cc';
import { WaveMng } from '../Actors/WaveMng';
const { ccclass, property } = _decorator;

@ccclass('BossProgress')
export class BossProgress extends Component {
    @property(ParticleSystem2D)
    public fxParticle: ParticleSystem2D = null!;
    @property(Animation)
    public anim: Animation = null!;

    private waveMng: WaveMng = null!;

    init(waveMng: WaveMng) {
        this.waveMng = waveMng;
    }

    show() {
        this.node.active = true;
        this.anim.play('turn-red');
    }

    hide() {
        this.node.active = false;
    }

    showParticle() {
        this.fxParticle.resetSystem();
    }

}
