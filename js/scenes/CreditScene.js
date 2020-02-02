class CreditScene extends Phaser.Scene {
	constructor() { 
		super('CreditScene');
		
		this.h = 1000;
		

		
	}




	preload () {
		this.load.image('background_img2','assets/img/Background.png');

		



		//  Load the Google WebFont Loader script
	}



	create () {
		let background = this.add.sprite(0,0,'background_img2')
		background.setOrigin(0,0);
		
		
		this.text_credits = this.add.text(400,400, 
			'CREDITS \n\n' +
			'Andrew Walford \n\n' +
			'Adam Rodgers \n\n' + 
			'Sylwia Krupa \n\n' +
			'Carlos Alvarez \n\n' +
			'Georgina McKeever \n\n' +
			'Gaëtane Yvonnou \n\n' +
			'John Rooksby \n\n\n' +
			'Global Game Jam 2020',
			{ fontFamily: '"Uncial Antiqua", cursive', padding: 40, height: 50 }).setFontSize(30).setBackgroundColor("black");
		
		//this.text_credits = this.add.text(100,(300+lineHeight), 'CREDITS', { fontFamily: '"Uncial Antiqua", cursive' }).setFontSize(30).setBackgroundColor("black");


		this.input.keyboard.on('keydown_SPACE', () => this.clickButton());


		


 }
    

	update(time, delta) { 
	
		this.h-=3;

		this.text_credits.setPosition(600,this.h);

		if (this.h < 100) {
			this.h = 1000;
			this.scene.switch('TitleScene');
		}
	}




	clickButton() {
    		//var text = this.add.text(200,200, 'WelcHIHIHIHIHHe!');
    		this.scene.switch('TitleScene');
	}


}

export default CreditScene;