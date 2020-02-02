class GameOverScene extends Phaser.Scene {
	constructor() { 
		super('GameOverScene');
		
		
		this.counter = 0;
		

		
	}




	preload () {
		this.load.image('background_img','assets/img/Background.png');
		this.load.image('helm_img','assets/img/Helm.png');

		this.load.audio('death', 'assets/sfx/death.wav');
	}



	create () {
		let deathMusic = this.sound.add('death');
		deathMusic.play({
		volume: 10,
		loop: false
        })
		
		
		let background = this.add.sprite(0,0,'background_img');
		background.setOrigin(0,0).setAlpha(0.2);


        this.helm = this.add.sprite(window.innerWidth/2,window.innerHeight/2,'helm_img').setScale(0.1);
		//this.helm.setOrigin(0,0);

		

		this.title_text = this.add.text(window.innerWidth/2,window.innerHeight/2, 'Game Over').setFont('helvetica').setFontSize(200).setTint(0xE9740D,0xE9100D,0xE90DE6,0xE90D78).setStroke("black",40).setShadow(30,30).setOrigin(0.5);



		 

		


		this.input.keyboard.on('keydown_SPACE', () => this.clickSpace());
		this.input.keyboard.on('keydown_C', () => this.clickButtonC());


		


 }
    

update(time, delta) { 
	

	

	this.counter++;

	this.helm.setScale(0.01 * this.counter);
	//this.helm.setOrigin(0,0);

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
