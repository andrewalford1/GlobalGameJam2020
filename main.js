import TitleScene from './scenes/TitleScene'
import StoryScene from './scenes/StoryScene'
import GameScene from './scenes/GameScene'

let titleScene = new TitleScene();
let storyScene = new StoryScene();
let gameScene = new GameScene();


var config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    /*scene: {
        preload: preload,
        create: create,
        update: update
    }*/
};

var player;
var stars;
var bombs;
var platforms;
var cursors;
var score = 0;
var gameOver = false;
var scoreText;

var game = new Phaser.Game(config);

game.scene.add('titleScene', TitleScene);
game.scene.add('storyScene', StoryScene);
game.scene.add('gameScene', GameScene);

game.scene.start('TitleScene');


