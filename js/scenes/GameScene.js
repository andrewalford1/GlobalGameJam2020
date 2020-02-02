import Player from '../entities/Player.js';
import StaticObject from '../entities/StaticObject.js';
import Npc from '../entities/Npc.js';

class GameScene extends Phaser.Scene
{
    //Private Fields.
    _player;
    _collidable;
    _nonCollidable;
    _cursors;
    _bad;
    _canDoubleJump;
    _staticObjects;

    constructor() 
    { 
        super({ key: 'GameScene' });

        this._staticObjects = [
            new StaticObject({
                name: 'bg',
                path: 'assets/img/Background.png',
                x: window.innerWidth / 2,
                y: window.innerHeight / 2,
                scaleX: 1,
                scaleY:1,
                isCollidable: false      
            }),
            new StaticObject({
                name: 'ground',
                path: 'assets/img/platform.png',
                x: 400,
                y: window.innerHeight + 30,
                scaleX: 10,
                scaleY:2, 
                isCollidable: true   
            }),
            new StaticObject({
                name: 'boundary',
                path: 'assets/img/Column 1.png',
                x: -300,
                y:400,
                scaleX: 1,
                scaleY:1, 
                isCollidable: true   
            }),
            new StaticObject({
                name: 'platform1',
                path: 'assets/img/Platforms/Grass2.png',
                x: 300,
                y: 1050,
                scaleX: 0.20,
                scaleY: 0.20, 
                isCollidable: true   
            }),
            new StaticObject({
                name: 'platform2',
                path: 'assets/img/Platforms/Cloud2.png',
                x: 1000,
                y: 900,
                scaleX: 0.20,
                scaleY: 0.20, 
                isCollidable: true   
            }),
            new StaticObject({
                name: 'platform3',
                path: 'assets/img/Platforms/Grass2.png',
                x: 2000,
                y: 1050,
                scaleX: 0.40,
                scaleY: 0.20, 
                isCollidable: true   
            }),
            new StaticObject({
                name: 'platform4',
                path: 'assets/img/Platforms/Cloud2.png',
                x: 2000,
                y: 2000,
                scaleX: 0.20,
                scaleY: 0.20, 
                isCollidable: true   
            }),
            new StaticObject({
                name: 'platform5',
                path: 'assets/img/Platforms/Grass2.png',
                x: 3000,
                y: 1050,
                scaleX: 0.40,
                scaleY: 0.20, 
                isCollidable: true   
            }),
            new StaticObject({
                name: 'Zeus',
                path: 'assets/img/Characters/Zeus.png',
                x: window.innerWidth / 2,
                y: window.innerHeight / 2,
                scaleX: 1,
                scaleY: 1, 
                isCollidable: false   
            })
        ]; 
    }

    preload()
    {
        for (let i = 0; i < this._staticObjects.length; i++)
        {
            this.load.image(
                this._staticObjects[i].GetName(),
                this._staticObjects[i].GetPath()
            );
        }

        this.load.spritesheet('urania', 'assets/img/Characters/Urania/UraniaSprites5.png', {frameWidth: 76, frameHeight: 87});
        this.load.spritesheet('urania jump', 'assets/img/Characters/Urania/UraniaSpritesJump2.png', {frameWidth: 76, frameHeight: 87});
        this.load.spritesheet('urania pound', 'assets/img/Characters/Urania/UraniaSpritesPound.png', {frameWidth: 76, frameHeight: 87});
        this.load.spritesheet('urania float', 'assets/img/Characters/Urania/UraniaSprites Float3.png', {frameWidth: 76, frameHeight: 87});
        
        this.load.audio('bgmusic', 'assets/sfx/bensound-memories.mp3');
    }

    create()
    {
        this._collidable = this.physics.add.staticGroup();
        this._nonCollidable = this.physics.add.staticGroup();

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
            this._nonCollidable.create(
                this._staticObjects[i].GetX(), 
                this._staticObjects[i].GetY(), 
                this._staticObjects[i].GetName()
            )
            .setScale(this._staticObjects[i].GetScaleX(), this._staticObjects[i].GetScaleY());
            }
    
            this._nonCollidable.children.entries[0].setScrollFactor(0);
        }

        this._player = new Player(this);
    
        //keys
        this._cursors = this.input.keyboard.createCursorKeys();
    
        //collisions
        this.physics.add.collider(this._player.Get(), this._collidable);   
        //this.physics.add.collider(player, bad, playerHit, null, this);
    
        this.cameras.main.setBounds(0,0, 1000000000000000000000000000000, 600);
        this.cameras.main.startFollow(this._player.Get());
        
        //music
        let bgmusic = this.sound.add('bgmusic');
        bgmusic.play({
            volume: .3,
            loop: true
        })
    }

    update()
    {
        this._player.Update(this._cursors);
    }
}

export default GameScene;
