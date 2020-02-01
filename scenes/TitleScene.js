class TitleScene extends Phaser.Scene {
	constructor() {
		super({key: 'TitleScene'})
	}

	preload () {
		this.load.image('background_img','assets/sky.png');
	}

	create () {
		let background = this.add.sprite(0,0,'background_img')
		background.setOrigin(0,0);

		var text = this.add.text(100,100, 'Welcome to my game!');
		text.setInteractive({ useHandCursor: true });
		text.on('pointerdown', () => this.clickButton());

		

	}

	clickButton() {
    		//var text = this.add.text(100,100, 'WelcHIHIHIHIHHe!');
    		this.scene.switch('StoryScene');
	}
}

export default TitleScene;