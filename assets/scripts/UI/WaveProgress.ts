import { _decorator, Component, ProgressBar, Node, UITransform, Vec3 } from 'cc';
import { WaveMng } from '../Actors/WaveMng';
const { ccclass, property } = _decorator;

@ccclass('WaveProgress')
export class WaveProgress extends Component {
    @property(ProgressBar)
    public bar: ProgressBar = null!;
    @property(Node)
    public head: Node = null!;
    @property
    public lerpDuration = 0;

    private waveMng: WaveMng = null!;
    private curProgress: number = 0;
    private destProgress: number = 0;
    private timer: number = 0;
    private isLerping: boolean = false;

    onLoad() {
    }

    init(waveMng: WaveMng) {
        this.waveMng = waveMng;
        this.bar.progress = 0;
        this.curProgress = 0;
        this.destProgress = 0;
        this.timer = 0;
        this.isLerping = false;
    }

    updateProgress(progress: number) {
        this.curProgress = this.bar.progress;
        this.destProgress = progress;
        this.timer = 0;
        this.isLerping = true;
    }

    update(dt: number) {
        if (this.isLerping === false) {
            return;
        }

        this.timer += dt;
        if (this.timer >= this.lerpDuration) {
            this.timer = this.lerpDuration;
            this.isLerping = false;
        }

        var lerp = function (a: number, b: number, r: number) {
            return a + (b - a) * r;
        };

        this.bar.progress = lerp(this.curProgress, this.destProgress, this.timer / this.lerpDuration);
        var utf = this.bar.barSprite?.getComponent(UITransform)!;
        this.head.position = new Vec3(utf.width * this.bar.progress, 0, 0);
    }

}
