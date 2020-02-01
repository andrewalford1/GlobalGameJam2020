import GameScene from './scenes/GameScene.js'

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

var config = {
    type: Phaser.AUTO,
    width: WIDTH,
    height:HEIGHT,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    }
};

var game = new Phaser.Game(config);
let gameScene = new GameScene();
game.scene.add('GameScene', gameScene);
game.scene.start('GameScene');