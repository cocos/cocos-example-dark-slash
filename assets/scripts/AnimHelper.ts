import { _decorator, Component, ParticleSystem2D, EventHandler } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AnimHelper')
export class AnimHelper extends Component {
    @property(ParticleSystem2D)
    public particleToPlay: ParticleSystem2D = null!;
    @property(EventHandler)
    public finishHandler: EventHandler = null!;
    @property(EventHandler)
    public fireHandler: EventHandler = null!;

    playParticle() {
        if (this.particleToPlay) {
            this.particleToPlay.resetSystem();
        }
    }

    fire() {
        EventHandler.emitEvents([this.fireHandler]);
    }

    finish() {
        EventHandler.emitEvents([this.finishHandler]);
    }

}
