class TitleScene extends Phaser.Scene {
	constructor() { 
		super('TitleScene');
		
		this.ii = 50;
		this.iii = 50;
		this.grow = true;
		this.counter = 0;
		this.miniCount = 0;

		
	}

	preload () {
		this.load.image('background_img','assets/img/background.png');

		this.load.image('star', 'assets/img/star.png');

	}



	create () {
		let background = this.add.sprite(0,0,'background_img')
		background.setOrigin(0,0);

		let lineHeight = 60;

		this.title_text = this.add.text(200,50, 'Asteria').setFontSize(100).setFont('cursive').setFontSize(300).setTint(0x55FFFF,0xFF55FF,0xFFFF11,0x55FFFF).setStroke("black",40).setShadow(30,30);

		this.storytext_1 = this.add.text(300,(300+lineHeight), 'In the land of Greece', { fontFamily:  'helvetica', padding: 20 }).setFontSize(40).setStroke("black",20).setVisible(0)
		this.storytext_2 = this.add.text(300,(300+(2*lineHeight)), 'High in the sky', { fontFamily: 'helvetica' , padding: 20 }).setFontSize(40).setStroke("black",20).setVisible(0);
		this.storytext_3 = this.add.text(300,(300+(3*lineHeight)), 'Lies Mount Olympus', { fontFamily: 'helvetica', padding: 20  }).setFontSize(40).setStroke("black",20).setVisible(0);
		this.storytext_4 = this.add.text(300,(300+(4*lineHeight)), 'The land of the god and their children', { fontFamily: 'helvetica', padding: 20  }).setFontSize(40).setStroke("black",20).setVisible(0);
		this.storytext_5 = this.add.text(300,(300+(5*lineHeight)), 'Our story follows one of the nine muses', { fontFamily: 'helvetica' , padding: 20 }).setFontSize(40).setStroke("black",20).setVisible(0);
		this.storytext_6 = this.add.text(300,(300+(6*lineHeight)), 'Children of Zeus and the titan Mnemosyne', { fontFamily: 'helvetica', padding: 20  }).setFontSize(40).setStroke("black",20).setVisible(0);

		this.text_start = this.add.text(300,800, 'Press Spacebar').setFontSize(100).setBackgroundColor("black").setVisible(0);
		this.text_credits = this.add.text(300,1000, 'Press c for credits, space to start').setFontSize(40).setBackgroundColor("black").setVisible(1);

		this.text_start.setInteractive({ useHandCursor: true });
		this.text_start.on('pointerdown', () => this.clickButton());

		this.input.keyboard.on('keydown_SPACE', () => this.clickSpace());
		this.input.keyboard.on('keydown_C', () => this.clickButtonC());
		this.input.keyboard.on('keydown_G', () => this.clickButtonG());

 }
    

update(time, delta) { 
	

	if (this.iii < 10) {
		this.iii++;
	} else {
		this.iii = 0;
	}

	this.counter++;
	if (this.counter <= 25) {
		this.storytext_1.setVisible(0);
		this.storytext_2.setVisible(0);
		this.storytext_3.setVisible(0);
		this.storytext_4.setVisible(0);
		this.storytext_5.setVisible(0);
		this.storytext_6.setVisible(0);
	}

	if (this.counter > 25) {
		this.storytext_1.setVisible(1);
	} 
	if (this.counter > 50) {
		this.storytext_2.setVisible(1);
	} 	
	if (this.counter > 75) {
		this.storytext_3.setVisible(1);
	} 	
	if (this.counter > 100) {
		this.storytext_4.setVisible(1);
	} 	
	if (this.counter > 125) {
		this.storytext_5.setVisible(1);
	} 
	if (this.counter > 150) {
		this.storytext_6.setVisible(1);
	} 
		if (this.counter > 200) {
		this.text_start.setVisible(1).setAlpha(1).setTint(0x55FFFF,0xFF55FF,0xFFFF11,0x55FFFF);
	} 

 	if (this.counter > 500) {
 		this.counter = 0;
 		this.scene.switch('CreditScene');
 	}


	var x = 100 + (this.iii/50);
	this.text_start.setFontSize(x);
	}

	clickButtonC() {
    		this.counter = 0;
    		this.scene.switch('CreditScene');
	}
	clickSpace() {
			this.counter = 0;
    		this.scene.switch('GameScene');
	}	
	clickButtonG() {
    		this.counter = 0;
    		this.scene.switch('GameOverScene');
	}


}

export default TitleScene;