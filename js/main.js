import GameScene from './scenes/GameScene.js'
import TitleScene from './scenes/TitleScene.js'
import CreditScene from './scenes/CreditScene.js'
import GameOverScene from './scenes/GameOverScene.js'
import WinScene from './scenes/WinScene.js'

import config from './Config.js'

var game = new Phaser.Game(config);

let gameScene = new GameScene();
let titleScene = new TitleScene();
let creditScene = new CreditScene();
let gameOverScene = new GameOverScene();
let winScene = new WinScene();


game.scene.add('GameScene', gameScene);
game.scene.add('TitleScene', titleScene);
game.scene.add('GameOverScene', gameOverScene);
game.scene.add('CreditScene', creditScene);
game.scene.add('WinScene', winScene);


game.scene.start('TitleScene');
