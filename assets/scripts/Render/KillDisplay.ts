import { _decorator, Component, Label, Animation } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('KillDisplay')
export class KillDisplay extends Component {
    @property(Label)
    public labelKills: Label = null!;
    @property(Animation)
    public anim: Animation = null!;

    playKill(kills: number) {
        this.node.active = true;
        this.labelKills.string = kills.toString();
        this.anim.play('kill-pop');
    }

    hide() {
        this.node.active = false;
    }

}
