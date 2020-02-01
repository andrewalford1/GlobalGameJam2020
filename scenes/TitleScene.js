class TitleScene extends Phaser.Scene {
	constructor() {
		super({key: 'TitleScene'})
	}

	preload () {
		this.load.image('background_img2','assets/background-cut-1.png');
	}

	create () {
		let background = this.add.sprite(0,0,'background_img2')
		background.setOrigin(0,0);

		let lineHeight = 40;

		var text = this.add.text(100,100, 'Asteria', { fontFamily: '"Cinzel", cursive' }).setFontSize(100);

		var text = this.add.text(100,(300+lineHeight), 'In the land of Greece', { fontFamily: '"Uncial Antiqua", cursive' }).setFontSize(30);
		var text = this.add.text(100,(300+(2*lineHeight)), 'High in the sky', { fontFamily: '"Uncial Antiqua", cursive' }).setFontSize(30);
		var text = this.add.text(100,(300+(3*lineHeight)), 'Lies Mount Olympus', { fontFamily: '"Uncial Antiqua", cursive' }).setFontSize(30);
		var text = this.add.text(100,(300+(4*lineHeight)), 'The land of the god and their children', { fontFamily: '"Uncial Antiqua", cursive' }).setFontSize(30);
		var text = this.add.text(100,(300+(5*lineHeight)), 'Our story follows one of the nine muses', { fontFamily: '"Uncial Antiqua", cursive' }).setFontSize(30);
		var text = this.add.text(100,(300+(6*lineHeight)), 'Children of Zeus and the titan Mnemosyne', { fontFamily: '"Uncial Antiqua", cursive' }).setFontSize(30);








		var text_start = this.add.text(100,800, 'Start').setFontSize(100);


		text_start.setInteractive({ useHandCursor: true });
		text_start.on('pointerdown', () => this.clickButton());

		

		

	}

	clickButton() {
    		//var text = this.add.text(200,200, 'WelcHIHIHIHIHHe!');
    		this.scene.switch('GameScene');
	}
}

export default TitleScene;