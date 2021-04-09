import { _decorator, Component, Sprite } from 'cc';
const { ccclass } = _decorator;

@ccclass('ShowMask')
export class ShowMask extends Component {

    start() {
        this.getComponent(Sprite)!.enabled = true;
    }

}
