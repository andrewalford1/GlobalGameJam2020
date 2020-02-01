import GameScene from './scenes/GameScene.js'

var config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height:window.innerHeight,
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
