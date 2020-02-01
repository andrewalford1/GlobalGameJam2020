class StoryScene extends Phaser.Scene {
	constructor() {
		super({key: 'StoryScene'})
	}

	preload () {
		this.load.image('background_img','assets/sky.png');
	}

	create () {
		let background = this.add.sprite(0,0,'background_img')
		background.setOrigin(0,0);

		var text = this.add.text(100,100, 'THIS IS A NEW SCENE');
		text.setInteractive({ useHandCursor: true });
		text.on('pointerdown', () => this.clickButton());

		

	}

	clickButton() {
    		//var text = this.add.text(200,200, 'WelcHIHIHIHIHHe!');
    		this.scene.switch('GameScene');
	}
}

export default StoryScene;