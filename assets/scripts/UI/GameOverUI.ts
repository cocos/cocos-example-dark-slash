import { _decorator, Component, Vec3 } from 'cc';
import { Game } from '../Game';
const { ccclass } = _decorator;

@ccclass('GameOverUI')
export class GameOverUI extends Component {
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

    restart() {
        this.game.restart();
    }

}
