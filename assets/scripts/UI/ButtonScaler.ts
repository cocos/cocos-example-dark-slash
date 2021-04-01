import { _decorator, Node, Component, Button, TweenSystem, Vec3, tween, Tween } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ButtonScaler')
export class ButtonScaler extends Component {
    @property
    public pressedScale = 1;
    @property
    public transDuration = 0;

    private initScale: Vec3 = null!;
    private button: Button = null!;
    private scaleDownAction: Tween<Node> = null!;
    private scaleUpAction: Tween<Node> = null!;
    onLoad() {
        this.initScale = this.node.scale;
        this.button = this.getComponent(Button)!;
        this.scaleDownAction = tween().to(this.transDuration, { scale: this.pressedScale });
        this.scaleUpAction = tween().to(this.transDuration, { scale: this.initScale });

        this.node.on('touchstart', () => {
            TweenSystem.instance.ActionManager.removeAllActionsFromTarget(this.node);
            this.scaleDownAction.target(this.node).start();
        });

        this.node.on('touchend', () => {
            TweenSystem.instance.ActionManager.removeAllActionsFromTarget(this.node);
            this.scaleUpAction.target(this.node).start();
        });

        this.node.on('touchcancel', () => {
            TweenSystem.instance.ActionManager.removeAllActionsFromTarget(this.node);
            this.scaleUpAction.target(this.node).start();
        });
    }

}
