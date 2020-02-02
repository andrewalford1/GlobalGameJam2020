class GameOverScene extends Phaser.Scene {
	constructor() { 
		super('GameOverScene');
		
		
		this.counter = 0;
		

		
	}




	preload () {
		this.load.image('background_img','assets/img/background.png');

	
	}



	create () {
		let background = this.add.sprite(0,0,'background_img')
		background.setOrigin(0,0);



		

		

		this.title_text = this.add.text(200,400, 'Game Over').setFont('cursive').setFontSize(200).setTint(0x55FFFF,0xFF55FF,0xFFFF11,0x55FFFF).setStroke("black",40).setShadow(30,30);



		 

		


		this.input.keyboard.on('keydown_SPACE', () => this.clickSpace());
		this.input.keyboard.on('keydown_C', () => this.clickButtonC());


		


 }
    

update(time, delta) { 
	

	

	this.counter++;

	

 	if (this.counter > 150) {
 		this.counter = 0;
 		this.scene.switch('CreditScene');
 	}



}




	clickButtonC() {
    		this.counter = 0;
    		this.scene.switch('CreditScene');
	}
	clickSpace() {
    		this.counter=0;
    		this.scene.switch('TitleScene');
	}


}

export default GameOverScene;