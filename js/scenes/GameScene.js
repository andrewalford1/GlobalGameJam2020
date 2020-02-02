import Player from '../entities/Player.js';
import StaticObject from '../entities/StaticObject.js';
import Npc from '../entities/Npc.js';
import Collectible from '../entities/Collectible.js';
import Objective from '../Objective.js';
import Background from '../entities/Background.js';

class GameScene extends Phaser.Scene
{
    //Private Fields.
    _player;
    _collidable;
    _nonCollidable;
    _collectible;
    _killable;
    _cursors;
    _staticObjects;
    _collectibleObjects;
    _objective;
    _lava;
    _snek;
    _background;
    _snekLeft;
    _leftMax;
    _rightMax;

    constructor() 
    { 
        super({ key: 'GameScene' });

        this._staticObjects = [
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
                x: 1800,
                y: 400,
                scaleX: 0.20,
                scaleY: 0.20, 
                isCollidable: true   
            }),
            new StaticObject({
                name: 'platform4.1',
                path: 'assets/img/Platforms/Cloud2.png',
                x: 500,
                y: 600,
                scaleX: 0.15,
                scaleY: 0.15, 
                isCollidable: true   
            }),
            new StaticObject({
                name: 'platform5',
                path: 'assets/img/Platforms/Grass2.png',
                x: 3500,
                y: 1050,
                scaleX: 0.20,
                scaleY: 0.20, 
                isCollidable: true   
            }),
            new StaticObject({
                name: 'platform6',
                path: 'assets/img/Platforms/Cloud2.png',
                x: 4500,
                y: 900,
                scaleX: 0.20,
                scaleY: 0.20, 
                isCollidable: true   
            }),
            new StaticObject({
                name: 'platform6.1',
                path: 'assets/img/Platforms/Cloud2.png',
                x: 5500,
                y: 800,
                scaleX: 0.20,
                scaleY: 0.20, 
                isCollidable: true   
            }),
            new StaticObject({
                name: 'platform7',
                path: 'assets/img/Platforms/Grass2.png',
                x: 6500,
                y: 1050,
                scaleX: 0.20,
                scaleY: 0.20, 
                isCollidable: true   
            }),
            new StaticObject({
                name: 'platform8',
                path: 'assets/img/Column 1.png',
                x: 7500,
                y: 1100,
                scaleX: 0.2,
                scaleY: 0.2, 
                isCollidable: true   
            }),
            new StaticObject({
                name: 'platform9',
                path: 'assets/img/Column 1.png',
                x: 8000,
                y: 1000,
                scaleX: 0.2,
                scaleY: 0.2, 
                isCollidable: true   
            }),
            new StaticObject({
                name: 'platform10',
                path: 'assets/img/Column 1.png',
                x: 8500,
                y: 1100,
                scaleX: 0.2,
                scaleY: 0.2, 
                isCollidable: true   
            }),
            new StaticObject({
                name: 'platform11',
                path: 'assets/img/Platforms/Grass2.png',
                x: 9500,
                y: 1050,
                scaleX: 0.20,
                scaleY: 0.20, 
                isCollidable: true   
            }),
            new StaticObject({
                name: 'platform12',
                path: 'assets/img/Platforms/Cloud2.png',
                x: 9000,
                y: 600,
                scaleX: 0.15,
                scaleY: 0.15, 
                isCollidable: true   
            }),
            new StaticObject({
                name: 'platform13',
                path: 'assets/img/Platforms/Cloud2.png',
                x: 10500,
                y: 550,
                scaleX: 0.15,
                scaleY: 0.15, 
                isCollidable: true   
            }),
            new StaticObject({
                name: 'platform13.1',
                path: 'assets/img/Platforms/Cloud2.png',
                x: 10800,
                y: 550,
                scaleX: 0.15,
                scaleY: 0.15, 
                isCollidable: true   
            }),
            new StaticObject({
                name: 'platform14',
                path: 'assets/img/Column 1.png',
                x: 10700,
                y: 1100,
                scaleX: 0.2,
                scaleY: 0.2, 
                isCollidable: true   
            }),
            new StaticObject({
                name: 'platform15',
                path: 'assets/img/Platforms/Grass2.png',
                x: 12000,
                y: 1050,
                scaleX: 0.20,
                scaleY: 0.20, 
                isCollidable: true   
            }),
            new StaticObject({
                name: 'platform15.2',
                path: 'assets/img/Platforms/Grass2.png',
                x: 13000,
                y: 1050,
                scaleX: 0.20,
                scaleY: 0.20, 
                isCollidable: true   
            }),
             new StaticObject({
                name: 'platform15.1',
                path: 'assets/img/Column 1.png',
                x: 14000,
                y: 1050,
                scaleX: 0.2,
                scaleY: 0.2, 
                isCollidable: true   
            }),
             new StaticObject({
                name: 'platform16',
                path: 'assets/img/Column 1.png',
                x: 14250,
                y: 900,
                scaleX: 0.2,
                scaleY: 0.2, 
                isCollidable: true   
            }),
            new StaticObject({
                name: 'platform16.1',
                path: 'assets/img/Column 1.png',
                x: 14250,
                y: 1150,
                scaleX: 0.2,
                scaleY: 0.2, 
                isCollidable: true   
            }),
            new StaticObject({
                name: 'platform17',
                path: 'assets/img/Column 1.png',
                x: 14600,
                y: 700,
                scaleX: 0.2,
                scaleY: 0.2, 
                isCollidable: true   
            }),
            new StaticObject({
                name: 'platform17.1',
                path: 'assets/img/Column 1.png',
                x: 14600,
                y: 950,
                scaleX: 0.2,
                scaleY: 0.2, 
                isCollidable: true   
            }),
            new StaticObject({
                name: 'platform17.2',
                path: 'assets/img/Column 1.png',
                x: 14600,
                y: 1200,
                scaleX: 0.2,
                scaleY: 0.2, 
                isCollidable: true   
            }),
            new StaticObject({
                name: 'platform18',
                path: 'assets/img/Column 1.png',
                x: 15100,
                y: 500,
                scaleX: 0.2,
                scaleY: 0.2, 
                isCollidable: true   
            }),
            new StaticObject({
                name: 'platform18.1',
                path: 'assets/img/Column 1.png',
                x: 15100,
                y: 750,
                scaleX: 0.2,
                scaleY: 0.2, 
                isCollidable: true   
            }),
            new StaticObject({
                name: 'platform18.2',
                path: 'assets/img/Column 1.png',
                x: 15100,
                y: 1000,
                scaleX: 0.2,
                scaleY: 0.2, 
                isCollidable: true   
            }),
            new StaticObject({
                name: 'platform19',
                path: 'assets/img/Platforms/Grass2.png',
                x: 16000,
                y: 1050,
                scaleX: 0.20,
                scaleY: 0.20, 
                isCollidable: true   
            }),
            new StaticObject({
                name: 'platform20',
                path: 'assets/img/Column 1.png',
                x: 17000,
                y: 900,
                scaleX: 0.2,
                scaleY: 0.2, 
                isCollidable: true   
            }),
            new StaticObject({
                name: 'platform20.1',
                path: 'assets/img/Column 1.png',
                x: 17000,
                y: 1150,
                scaleX: 0.2,
                scaleY: 0.2, 
                isCollidable: true   
            }),
            new StaticObject({
                name: 'platform20.2',
                path: 'assets/img/Column 1.png',
                x: 18000,
                y: 900,
                scaleX: 0.2,
                scaleY: 0.2, 
                isCollidable: true   
            }),
            new StaticObject({
                name: 'platform20.3',
                path: 'assets/img/Column 1.png',
                x: 18000,
                y: 1150,
                scaleX: 0.2,
                scaleY: 0.2, 
                isCollidable: true   
            }),
             new StaticObject({
                name: 'platform21.3',
                path: 'assets/img/Platforms/Grass2.png',
                x: 19000,
                y: 1050,
                scaleX: 0.20,
                scaleY: 0.20, 
                isCollidable: true   
            }),
            new StaticObject({
                name: 'platform21.2',
                path: 'assets/img/Platforms/Grass2.png',
                x: 19000,
                y: 1000,
                scaleX: 0.20,
                scaleY: 0.20, 
                isCollidable: true   
            }),
             new StaticObject({
                name: 'platform21.1',
                path: 'assets/img/Platforms/Grass2.png',
                x: 19000,
                y: 950,
                scaleX: 0.20,
                scaleY: 0.20, 
                isCollidable: true   
            }),
            new StaticObject({
                name: 'platform21',
                path: 'assets/img/Platforms/Grass2.png',
                x: 19000,
                y: 900,
                scaleX: 0.20,
                scaleY: 0.20, 
                isCollidable: true   
            }),
            new StaticObject({
                name: 'platform22',
                path: 'assets/img/Column 1.png',
                x: 20000,
                y: 750,
                scaleX: 0.2,
                scaleY: 0.2, 
                isCollidable: true   
            }),
            new StaticObject({
                name: 'platform22.1',
                path: 'assets/img/Column 1.png',
                x: 20000,
                y: 500,
                scaleX: 0.2,
                scaleY: 0.2, 
                isCollidable: true   
            }),
            new StaticObject({
                name: 'platform22.2',
                path: 'assets/img/Column 1.png',
                x: 20000,
                y: 250,
                scaleX: 0.2,
                scaleY: 0.2, 
                isCollidable: true   
            }),
            new StaticObject({
                name: 'platform22.3',
                path: 'assets/img/Column 1.png',
                x: 20000,
                y: 0,
                scaleX: 0.2,
                scaleY: 0.2, 
                isCollidable: true   
            }),
            new Npc({
                name: 'Selene',
                path: 'assets/img/Moon.png',
                audio: '',
                x: window.innerWidth / 2,
                y: window.innerHeight / 2,
                scaleX: 0.2,
                scaleY: 0.2, 
                isCollidable: false   
            }),
        ]; 
        this._collectibleObjects = [
            new Collectible({
                name: 'star1',
                path: 'assets/img/star.png',
                x: 1750,
                y: 200,
                scaleX: 0.2,
                scaleY: 0.2, 
                isCollidable: false 
            }),
            new Collectible({
                name: 'star2',
                path: 'assets/img/star.png',
                x: 10700,
                y: 900,
                scaleX: 0.2,
                scaleY: 0.2, 
                isCollidable: false 
            }),
            new Collectible({
                name: 'star3',
                path: 'assets/img/star.png',
                x: 15100,
                y: 200,
                scaleX: 0.2,
                scaleY: 0.2, 
                isCollidable: false 
            }),
            new Collectible({
                name: 'star3',
                path: 'assets/img/star.png',
                x: 20000,
                y: 900,
                scaleX: 0.2,
                scaleY: 0.2, 
                isCollidable: false 
            })
        ];

        this._player = new Player({
            Name: 'urania',
            SpawnPoint: {
                X: 200,
                Y: window.innerHeight / 2
            },
            Width: 76,
            Height: 87,
            Scale: 1.5
        });
        
        this._lava = 
            new StaticObject({
                name: 'lava',
                path: 'assets/img/platform.png',
                x: 0,
                y: 1200,
                scaleX: 10000000000,
                scaleY: 1,
                isCollidable: false    
            }); 
             

        this._background = new Background({
            States: [
                {
                    Name: 'constellationsMissing',
                    SpritePath: 'assets/img/background/constellationsMissing.png',
                    Location: {
                        X: window.innerWidth / 2,
                        Y: window.innerHeight / 2
                    },
                    Width: 1920,
                    Height: 1080
                },
                {
                    Name: 'coronaComplete',
                    SpritePath: 'assets/img/background/coronaComplete.png',
                    Location: {
                        X: window.innerWidth / 2,
                        Y: window.innerHeight / 2
                    },
                    Width: 1920,
                    Height: 1080
                },
                {
                    Name: 'vigoComplete',
                    SpritePath: 'assets/img/background/vigoComplete.png',
                    Location: {
                        X: window.innerWidth / 2,
                        Y: window.innerHeight / 2
                    },
                    Width: 1920,
                    Height: 1080
                },
                {
                    Name: 'andromedaComplete',
                    SpritePath: 'assets/img/background/andromedaComplete.png',
                    Location: {
                        X: window.innerWidth / 2,
                        Y: window.innerHeight / 2
                    },
                    Width: 1920,
                    Height: 1080
                },
                {
                    Name: 'bearComplete',
                    SpritePath: 'assets/img/background/bearComplete.png',
                    Location: {
                        X: window.innerWidth / 2,
                        Y: window.innerHeight / 2
                    },
                    Width: 1920,
                    Height: 1080
                }
            ],
            Scale: 1
        });
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
        for (let j = 0; j < this._collectibleObjects.length; j++)
        {
            this.load.image(
                this._collectibleObjects[j].GetName(),
                this._collectibleObjects[j].GetPath()
            );
        }
        
        this.load.image(this._lava.GetName(), this._lava.GetPath());

        this._background.PreLoad(this);

        this.load.spritesheet('urania', 'assets/img/Characters/Urania/UraniaSprites5.png', {frameWidth: 76, frameHeight: 87});
        this.load.spritesheet('urania jump', 'assets/img/Characters/Urania/UraniaSpritesJump2.png', {frameWidth: 76, frameHeight: 87});
        this.load.spritesheet('urania pound', 'assets/img/Characters/Urania/UraniaSpritesPound.png', {frameWidth: 76, frameHeight: 87});
        this.load.spritesheet('urania float', 'assets/img/Characters/Urania/UraniaSprites Float3.png', {frameWidth: 76, frameHeight: 87});
        this.load.spritesheet('snake', 'assets/img/SnekSprites1.png', {frameWidth: 76, frameHeight: 52});
        this.load.audio('bgmusic', 'assets/sfx/bensound-memories.mp3');
        
    }

    create()
    {
        
        
        
        this._collidable = this.physics.add.staticGroup();
        this._nonCollidable = this.physics.add.staticGroup();
        this._collectible = this.physics.add.staticGroup();
        this._killable = this.physics.add.staticGroup();

        this._background.Create(this);

        for(let i = 0; i < this._staticObjects.length; i++) 
        {
            if (this._staticObjects[i] instanceof Npc)
            {
                this._staticObjects[i].Create(this);
            }

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
        for (let j = 0; j < this._collectibleObjects.length; j++)
        {
            this._collectible.create(
                this._collectibleObjects[j].GetX(), 
                this._collectibleObjects[j].GetY(), 
                this._collectibleObjects[j].GetName()
            ).setScale(this._collectibleObjects[j].GetScaleX(), this._collectibleObjects[j].GetScaleY()).refreshBody();
        }
        
        this._killable.create(
            this._lava.GetX(), 
            this._lava.GetY(), 
            this._lava.GetName()
            ).setScale(this._lava.GetScaleX(), this._lava.GetScaleY()).refreshBody();


        this._player.Create(this);
        this._objective = new Objective(this._collectibleObjects.length);
    
        //keys
        this._cursors = this.input.keyboard.createCursorKeys();

        //collisions
        this.physics.add.collider(this._player.Get(), this._collidable);   
        this.physics.add.overlap(this._player.Get(), this._collectible, collectStar, null, this); 
        function collectStar(_player, star) {
            star.disableBody(true, true);
            this._objective.Collect();
            this._objective.Update();
            if(this._objective.IsComplete()) {
                this.scene.switch('CreditScene');
            }
            this._background.IncrementState();
        }
        
        this.physics.add.overlap(this._player.Get(), this._killable, killPlayer, null, this);
        function killPlayer(_player) {
            _player.disableBody(true, true);
            bgmusic.stop();
            this.scene.switch('GameOverScene');
        } 
    
        this.cameras.main.setBounds(0,0, 1000000000000000000000000000000, 600);
        this.cameras.main.startFollow(this._player.Get());
        
        //music
        let bgmusic = this.sound.add('bgmusic');
        bgmusic.play({
            volume: .3,
            loop: true
        })
        
        //snake business, move along
        this._snek = this.physics.add.sprite(1500, 800, 'snake')
        this._snek.setGravity(-300)
        this.anims.create({
            key: 'snake left',
            frames: this.anims.generateFrameNumbers('snake', {start: 0, end: 5}),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'snake right',
            frames: this.anims.generateFrameNumbers('snake', {start: 6, end: 11}),
            frameRate: 10,
            repeat: -1
        });
        this._snek.anims.play('snake left');
        this._snekLeft = true;
        this._leftMax = 1000;
        this._rightMax = 2000;
        this.physics.add.collider(this._player.Get(), this._snek, snekHit, null, this);
        function snekHit (player, snek)
    {
        if (player._isPounding) {
            snek.disableBody(true, true);
        } else {
            this.scene.switch('GameOverScene');
        }
    }
    }

    
    
    update()
    {
        //for snakes only
        if (this._snekLeft) {
             this._snek.setVelocityX(-30);
        } else {
            this._snek.setVelocityX(30);
        }
         if (this._snek.x < this._leftMax)
                {
                this._snekLeft = false;
                this._snek.anims.play('snake right');
                }
        else if (this._snek.x > this._rightMax)
            {
                this._snekLeft = true;
                this._snek.anims.play('snake left'); 
            }
        
        this._player.Update(this._cursors)
    }
    
}

export default GameScene;
