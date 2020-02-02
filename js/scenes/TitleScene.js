import StaticObject from '../entities/StaticObject.js';


class TitleScene extends Phaser.Scene {
	constructor() { 
		super('TitleScene');
		
		this.ii = 50;
		this.iii = 50;
		this.grow = true;
		this.counter = 0;
		this.miniCount = 0;

		this.base = window.innerHeight;

		this.story = [
			"In the land of Greece",
			"High in the sky",
			"Far above the clouds",
			"Lies mount Olympus",
			"The land of the gods and their children",
			"Our story follows one of the nine muses",
			"Children of Zeus and the titan Mnemosyne"
		]

		this._staticObjects = [
            new StaticObject({
                name: 'bg',
                path: 'assets/img/Background.png',
                x: window.innerWidth / 2,
                y: window.innerHeight / 2,
                scaleX: 1,
                scaleY:1,
                isCollidable: false      
            })
        ]; 


	}

	preload () {
		for (let i = 0; i < this._staticObjects.length; i++)
        {
            this.load.image(
                this._staticObjects[i].GetName(),
                this._staticObjects[i].GetPath()
            );
        }
	}

	create () {

		//let background = this.add.sprite(0,0,'background_img')
		//background.setOrigin(0,0);


        for(let i = 0; i < this._staticObjects.length; i++) 
        {
            if(this._staticObjects[i].GetCollidable()==true) {
                this._collidable.create(
                this._staticObjects[i].GetX(), 
                this._staticObjects[i].GetY(), 
                this._staticObjects[i].GetName()
            )
            .setScale(this._staticObjects[i].GetScaleX(), this._staticObjects[i].GetScaleY()).refreshBody();
            } else {
            this._nonCollidable = this.add.image(
                this._staticObjects[i].GetX(), 
                this._staticObjects[i].GetY(), 
                this._staticObjects[i].GetName()
            )
            .setScale(this._staticObjects[i].GetScaleX(), this._staticObjects[i].GetScaleY());
            }
    
            this._nonCollidable.setScrollFactor(0);
        }


		let lineHeight = 60;

		this.title_text = this.add.text(window.innerWidth/2, 150, 'Asteria').setFont('cursive').setFontSize(300).setTint(0x55FFFF,0xFF55FF,0xFFFF11,0x55FFFF).setStroke("black",40).setShadow(30,30).setOrigin(0.5);

		//this.storytext_1 = this.add.text(300,(300+lineHeight), 'In the land of Greece', { fontFamily:  'helvetica', padding: 20 }).setFontSize(40).setStroke("black",20).setVisible(0)
		//this.storytext_2 = this.add.text(300,(300+(2*lineHeight)), 'High in the sky', { fontFamily: 'helvetica' , padding: 20 }).setFontSize(40).setStroke("black",20).setVisible(0);
		this.storytext_1 = this.styleText(this.story[0], this.base-500);
		this.storytext_2 = this.styleText(this.story[1], this.base-450);
		this.storytext_3 = this.styleText(this.story[2], this.base-400);
		this.storytext_4 = this.styleText(this.story[3], this.base-350);
		this.storytext_5 = this.styleText(this.story[4], this.base-300);
		this.storytext_6 = this.styleText(this.story[5], this.base-250);

		this.text_start = this.add.text(window.innerWidth/2,this.base-95, 'Press Spacebar').setFontSize(100).setBackgroundColor("black").setVisible(0).setOrigin(0.5);
		this.text_credits = this.add.text(window.innerWidth/2,this.base-20, 'Press c for credits, space to start').setFontSize(40).setBackgroundColor("black").setOrigin(0.5);

		this.text_start.setInteractive({ useHandCursor: true });
		this.text_start.on('pointerdown', () => this.clickButton());

		this.input.keyboard.on('keydown_SPACE', () => this.clickSpace());
		this.input.keyboard.on('keydown_C', () => this.clickButtonC());
		this.input.keyboard.on('keydown_G', () => this.clickButtonG());
 	}

 	styleText(t,y) {
 		return this.add.text(window.innerWidth/2, y, t, { fontFamily:  'helvetica', padding: 20 }).setFontSize(40).setStroke("black",20).setVisible(0).setOrigin(0.5);
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

	 	if (this.counter > 600) {
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