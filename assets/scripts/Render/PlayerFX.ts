import { _decorator, Component, Animation } from 'cc';
import { Player } from '../Actors/Player';
import { Game } from '../Game';
const { ccclass, property } = _decorator;

@ccclass('PlayerFX')
export class PlayerFX extends Component {
    @property(Animation)
    public introAnim: Animation = null!;
    @property(Animation)
    public reviveAnim: Animation = null!;

    private game: Game = null!;

    init(game: Game) {
        this.game = game;
        this.introAnim.node.active = false;
        this.reviveAnim.node.active = false;
    }

    playIntro() {
        this.introAnim.node.active = true;
        this.introAnim.play('start');
    }

    playRevive() {
        this.reviveAnim.node.active = true;
        this.reviveAnim.node.position = this.game.player.position;
        this.reviveAnim.play('revive');
    }

    introFinish() {
        this.game.playerReady();
        this.introAnim.node.active = false;
    }

    reviveFinish() {
        this.game.playerReady();
        this.reviveAnim.node.active = false;
    }

    reviveKill() {
        this.game.clearAllFoes();
    }

}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// cc.Class({
//     extends: cc.Component,
// 
//     properties: {
//         introAnim: cc.Animation,
//         reviveAnim: cc.Animation
//     },
// 
//     // use this for initialization
//     init (game) {
//         this.game = game;
//         this.introAnim.node.active = false;
//         this.reviveAnim.node.active = false;
//     },
// 
//     playIntro () {
//         this.introAnim.node.active = true;
//         this.introAnim.play('start');
//     },
// 
//     playRevive () {
//         this.reviveAnim.node.active = true;
//         this.reviveAnim.node.setPosition(this.game.player.node.position);
//         this.reviveAnim.play('revive');
//     },
// 
//     introFinish () {
//         this.game.playerReady();
//         this.introAnim.node.active = false;
//     },
// 
//     reviveFinish () {
//         this.game.playerReady();
//         this.reviveAnim.node.active = false;
//     },
//     
//     reviveKill () { // kill all enemies
//         this.game.clearAllFoes();
//     }
// });
