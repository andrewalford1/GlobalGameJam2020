import GameScene from './scenes/GameScene.js'
import TitleScene from './scenes/TitleScene.js'
import CreditScene from './scenes/CreditScene.js'
import GameOverScene from './scenes/GameOverScene.js'


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
let titleScene = new TitleScene();
let creditScene = new CreditScene();
let gameOverScene = new GameOverScene();


game.scene.add('GameScene', gameScene);
game.scene.add('TitleScene', titleScene);
game.scene.add('GameOverScene', gameOverScene);
game.scene.add('CreditScene', creditScene);


game.scene.start('TitleScene');
