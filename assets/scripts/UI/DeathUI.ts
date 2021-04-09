import { _decorator, Component, Vec3 } from 'cc';
import { Game } from '../Game';
const { ccclass } = _decorator;

@ccclass('DeathUI')
export class DeathUI extends Component {
    private game: Game = null!;

    init(game: Game) {
        this.game = game;
        this.hide();
    }

    show() {
        this.node.position = new Vec3(0, 0, 0);
    }

    hide() {
        this.node.position = new Vec3(3000, 0, 0);
    }

    revive() {
        this.game.revive();
    }

    gameover() {
        this.game.gameOver();
    }

}
