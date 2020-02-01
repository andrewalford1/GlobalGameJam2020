class StoryScene extends Phaser.Scene {
	constructor() {
		super({key: 'StoryScene'})
	}

	preload () {
		this.load.image('background_img2','assets/background-cut-1.png');
	}

	create () {
		let background = this.add.sprite(0,0,'background_img2')
		background.setOrigin(0,0);

		var text = this.add.text(100,100, 'Asteria').setFont('Verdana, "Times New Roman", Tahoma, serif');

		var text = this.add.text(100,200, 'In the land of Greece', { fontFamily: '"Uncial Antiqua", cursive' });
		var text = this.add.text(100,220, 'High in the sky', { fontFamily: '"Uncial Antiqua", cursive' });
		var text = this.add.text(100,240, 'Lies Mount Olympus', { fontFamily: '"Uncial Antiqua", cursive' });
		var text = this.add.text(100,260, 'The land of the god and their children', { fontFamily: '"Uncial Antiqua", cursive' });
		var text = this.add.text(100,280, 'Our story follows one of the nine muses', { fontFamily: '"Uncial Antiqua", cursive' });
		var text = this.add.text(100,300, 'Children of Zeus and the titan Mnemosyne', { fontFamily: '"Uncial Antiqua", cursive' });








		var text_start = this.add.text(100,400, 'Start');


		text_start.setInteractive({ useHandCursor: true });
		text_start.on('pointerdown', () => this.clickButton());

		

		

	}

	clickButton() {
    		//var text = this.add.text(200,200, 'WelcHIHIHIHIHHe!');
    		this.scene.switch('GameScene');
	}
}

export default StoryScene;