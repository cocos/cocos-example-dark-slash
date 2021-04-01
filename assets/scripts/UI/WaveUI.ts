import { _decorator, Component, Label, Animation } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('WaveUI')
export class WaveUI extends Component {
    @property(Label)
    public labelWave: Label = null!;
    @property(Animation)
    public anim: Animation = null!;

    onLoad() {
    }

    show(num: any) {
        this.labelWave.string = num;
        this.anim.play('wave-pop');
    }

    hide() {
        this.node.active = false;
    }

}
