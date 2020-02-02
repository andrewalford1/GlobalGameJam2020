class WinScene extends Phaser.Scene {
	constructor() { 
		super('WinScene');
		
		
		this.counter = 0;
		

		
	}




	preload () {
		this.load.image('background_img','assets/img/Background.png');
		this.load.image('zeus_img','assets/img/Characters/Zeus.png');

		this.load.audio('win', 'assets/sfx/Zeus_voiceline.wav');
	}



	create () {
		let winMusic = this.sound.add('win');
		winMusic.play({
		volume: 10,
		loop: false
        })
		
		let background = this.add.sprite(0,0,'background_img');
		background.setOrigin(0,0).setAlpha(0.2);


        this.zeus_img = this.add.sprite(window.innerWidth/2,window.innerHeight/2,'zeus_img').setScale(0.1);
		//this.helm.setOrigin(0,0);

		

		this.title_text = this.add.text(window.innerWidth/2,window.innerHeight/2, 'You Win!!!').setFont('helvetica').setFontSize(200).setTint(0x55FFFF,0xFF55FF,0xFFFF11,0x55FFFF).setStroke("black",40).setShadow(30,30).setOrigin(0.5);



		 

		


		this.input.keyboard.on('keydown_SPACE', () => this.clickSpace());
		this.input.keyboard.on('keydown_C', () => this.clickButtonC());


		


 }
    

update(time, delta) { 
	

	

	this.counter++;

	this.zeus_img.setScale(0.1 * this.counter);
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

export default WinScene;
