import { _decorator, Component, Node } from 'cc';
import { WaveMng } from '../Actors/WaveMng';
import { ComboDisplay } from '../Render/ComboDisplay';
import { KillDisplay } from '../Render/KillDisplay';
import { WaveUI } from './WaveUI';
const { ccclass, property } = _decorator;

@ccclass('InGameUI')
export class InGameUI extends Component {
    @property(Node)
    public waveUI: Node = null!;
    @property(Node)
    public killDisplay: Node = null!;
    @property(Node)
    public comboDisplay: Node = null!;

    init(game: any) {
        this.waveUI.active = false;
        this.killDisplay.active = false;

        let comboDisplay = this.comboDisplay.getComponent(ComboDisplay)!;
        comboDisplay.init();
    }

    showWave(num: any) {
        let wave = this.waveUI.getComponent(WaveUI)!;
        wave.node.active = true;
        wave.show(num);
    }

    showKills(num: any) {
        let killDisplay = this.killDisplay.getComponent(KillDisplay)!;
        killDisplay.playKill(num);
    }

    addCombo() {
        let comboDisplay = this.comboDisplay.getComponent(ComboDisplay)!;
        comboDisplay.playCombo();
    }

}
