import { _decorator, Component, Animation, ParticleSystem2D, Node, TweenSystem, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('HomeUI')
export class HomeUI extends Component {
    @property(Animation)
    public menuAnim: Animation = null!;
    @property(ParticleSystem2D)
    public menuParticle: ParticleSystem2D = null!;
    @property(Node)
    public btnGroup: Node = null!;

    onLoad() {
    }

    start() {
        TweenSystem.instance.ActionManager.pauseTarget(this.btnGroup);
        this.scheduleOnce(() => {
            this.menuAnim.play();
            this.menuParticle.enabled = false;
        }, 2);
    }

    showParticle() {
        this.menuParticle.enabled = true;
    }

    enableButtons() {
        TweenSystem.instance.ActionManager.resumeTarget(this.btnGroup);
    }

    playGame() {
        TweenSystem.instance.ActionManager.pauseTarget(this.btnGroup);
        director.loadScene('PlayGame');
    }

}
