class TitleScene extends Phaser.Scene {
	constructor() {
		super('TitleScene');
		
		this.ii = 50;
		this.iii = 50;
		this.grow = true;

		
	}




	preload () {
		this.load.image('background_img2','assets/background-cut-1.png');

		this.load.image('star', 'assets/star.png');



		//  Load the Google WebFont Loader script
	}



	create () {
		let background = this.add.sprite(0,0,'background_img2')
		background.setOrigin(0,0);
		

		this.myStar1 = this.add.image(400, 300, 'star');
		this.myStar2 = this.add.image(450, 320, 'star');
		this.myStar3 = this.add.image(500, 300, 'star');
		this.myStar4 = this.add.image(550, 340, 'star');
		this.myStar5 = this.add.image(600, 290, 'star');


		let lineHeight = 40;

		

		this.title_text = this.add.text(0,0, 'Asteria').setFontSize(100).setFill("red").setFont('cursive').setFontSize(300);



		 

		

		var text;

		text = this.add.text(100,(300+lineHeight), 'In the land of Greece', { fontFamily: '"Uncial Antiqua", cursive' }).setFontSize(30).setBackgroundColor("black");
		text = this.add.text(100,(300+(2*lineHeight)), 'High in the sky', { fontFamily: '"Uncial Antiqua", cursive' }).setFontSize(30).setBackgroundColor("black");
		text = this.add.text(100,(300+(3*lineHeight)), 'Lies Mount Olympus', { fontFamily: '"Uncial Antiqua", cursive' }).setFontSize(30).setBackgroundColor("black");
		text = this.add.text(100,(300+(4*lineHeight)), 'The land of the god and their children', { fontFamily: '"Uncial Antiqua", cursive' }).setFontSize(30).setBackgroundColor("black");
		text = this.add.text(100,(300+(5*lineHeight)), 'Our story follows one of the nine muses', { fontFamily: '"Uncial Antiqua", cursive' }).setFontSize(30).setBackgroundColor("black");
		text = this.add.text(100,(300+(6*lineHeight)), 'Children of Zeus and the titan Mnemosyne', { fontFamily: '"Uncial Antiqua", cursive' }).setFontSize(30).setBackgroundColor("black");








		this.text_start = this.add.text(100,800, 'Press Spacebar').setFontSize(100).setBackgroundColor("black");


		this.text_start.setInteractive({ useHandCursor: true });
		this.text_start.on('pointerdown', () => this.clickButton());

		this.input.keyboard.on('keydown_SPACE', () => this.clickButton());


		


 }
    

update(time, delta) { 
	
	if (this.grow) {
		if (this.ii < 100) {
			this.ii++;
		} else {
			this.grow = false;
		}
	}
	else {
		if (this.ii > 0) {
			
			this.ii--;
		} else {
			this.grow = true;
		}
	}

	if (this.iii < 10) {
		this.iii++;
	} else {
		this.iii = 0;
	}



	this.myStar1.setVisible((1)).setScale(this.ii/50).setRotation(this.ii);
	this.myStar2.setVisible((1)).setScale(this.ii/55);
	this.myStar3.setVisible((1)).setScale(this.ii/40);
	this.myStar4.setVisible((1)).setScale(this.ii/50);
	this.myStar5.setVisible((1)).setScale(this.ii/50);

	var x = 100 + (this.iii/50);
	this.text_start.setFontSize(x);
	}




	clickButton() {
    		//var text = this.add.text(200,200, 'WelcHIHIHIHIHHe!');
    		this.scene.switch('GameScene');
	}


}

export default TitleScene;