import StaticObject from '../entities/StaticObject.js';


class CreditScene extends Phaser.Scene {
	constructor() { 
		super('CreditScene');
		
		this.h = 1000;

		this._staticObjects = [
            new StaticObject({
                name: 'bg',
                path: 'assets/img/Background.png',
                x: window.innerWidth / 2,
                y: window.innerHeight / 2,
                scaleX: 1,
                scaleY:1,
                isCollidable: false, 
                alpha: 0.2     
            }),
            new StaticObject({
                name: 'character_urania',
                path: 'assets/img/Characters/Urania/UraniaStandingRight.png',
                x: (window.innerWidth / 4)-100,
                y: (window.innerHeight / 2)-300,
                scaleX: 0.8,
                scaleY:0.8,
                isCollidable: false, 
                alpha: 1     
            }),
            new StaticObject({
                name: 'character_artemis',
                path: 'assets/img/Artemis.png',
                x: (window.innerWidth / 4)-100,
                y: (window.innerHeight / 2),
                scaleX: 0.3,
                scaleY:0.3,
                isCollidable: false, 
                alpha: 1     
            }),
            new StaticObject({
                name: 'character_zeus',
                path: 'assets/img/Characters/Zeus.png',
                x: (window.innerWidth / 4)-100,
                y: (window.innerHeight / 2)+300,
                scaleX: 0.8,
                scaleY:0.8,
                isCollidable: false, 
                alpha: 1     
            }),new StaticObject({
                name: 'character_demetra',
                path: 'assets/img/Demetra.png',
                x: ((window.innerWidth / 4)*3)+100,
                y: (window.innerHeight / 2)-300,
                scaleX: 0.3,
                scaleY:0.3,
                isCollidable: false, 
                alpha: 1     
            }),
            new StaticObject({
                name: 'character_owl',
                path: 'assets/img/Owl.png',
                x: ((window.innerWidth / 4)*3)+100,
                y: (window.innerHeight / 2),
                scaleX: 0.2,
                scaleY:0.2,
                isCollidable: false, 
                alpha: 1     
            }),
            new StaticObject({
                name: 'character_pan',
                path: 'assets/img/Pan.png',
                x: ((window.innerWidth / 4)*3)+100,
                y: (window.innerHeight / 2)+300,
                scaleX: 0.15,
                scaleY:0.15,
                isCollidable: false, 
                alpha: 1     
            })
        ]; 
		

		
	}




	preload () {
		//this.load.image('background_img2','assets/img/Background.png');
		//this.load.image('character_artemis','assets/img/Artemis.png');

		for (let i = 0; i < this._staticObjects.length; i++)
        {
            this.load.image(
                this._staticObjects[i].GetName(),
                this._staticObjects[i].GetPath()
            );
        }


	}



	create () {
		//let background = this.add.sprite(0,0,'background_img2')
		//background.setOrigin(0,0).setAlpha(0.2);


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
            .setScale(this._staticObjects[i].GetScaleX(), this._staticObjects[i].GetScaleY())
            .setAlpha(this._staticObjects[i].GetAlpha());
            }
    
            this._nonCollidable.setScrollFactor(0);
        }
		
		
		this.text_credits = this.add.text((window.innerWidth/2)-100,400, 
			'CREDITS \n\n' +
			'Andrew Alford \n\n' +
			'Adam Rodgers \n\n' + 
			'Sylwia Krupa \n\n' +
			'Carlos Alvarez \n\n' +
			'Georgina McKeever \n\n' +
			'Gaëtane Yvonnou \n\n' +
			'John Rooksby \n\n\n' +
			'Global Game Jam 2020',
			{ fontFamily: 'helvetica', padding: 40, height: 50 }).setFontSize(30).setOrigin(0);
		

		this.input.keyboard.on('keydown_SPACE', () => this.clickButton());


		//let character_artemis = this.add.sprite(200,200,'character_artemis').setScale(0.2);
		//this.text_artemis = this.add.text(200,200, "Artemis");
		


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