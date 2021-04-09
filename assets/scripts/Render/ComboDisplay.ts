import { _decorator, Component, Label, Sprite, Animation, Color } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ComboDisplay')
export class ComboDisplay extends Component {
    @property(Label)
    public labelCombo: Label = null!;
    @property(Sprite)
    public spFlare: Sprite = null!;
    @property(Animation)
    public anim: Animation = null!;
    @property([Color])
    public comboColors: Color[] = [];
    @property
    public showDuration = 0;

    private comboCount: number = 0;
    private showTimer: number = 0;

    init() {
        this.comboCount = 0;
        this.node.active = false;
        this.showTimer = 0;
    }

    playCombo() {
        this.comboCount++;
        this.node.active = true;
        let colorIdx = Math.min(Math.floor(this.comboCount / 10), this.comboColors.length - 1);
        this.spFlare.color = this.comboColors[colorIdx];
        this.labelCombo.color = this.comboColors[colorIdx];
        this.labelCombo.string = this.comboCount.toString();
        this.anim.play('combo-pop');
        this.showTimer = 0;
    }

    hide() {
        this.comboCount = 0;
        this.node.active = false;
    }

    update(dt: number) {
        if (!this.node.active) {
            return;
        }
        this.showTimer += dt;
        if (this.showTimer >= this.showDuration) {
            this.hide();
        }
    }

}
