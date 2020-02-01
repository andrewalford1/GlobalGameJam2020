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
                y: window.innerHeight - 30,
                scaleX: 10,
                scaleY:2, 
                isCollidable: true   
            }),
            new StaticObject({
                name: 'platform',
                path: 'assets/img/Platforms/Cloud2.png',
                x: 0,
                y: 0,
                scaleX: 0.25,
                scaleY: 0.25, 
                isCollidable: true   
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

        this.load.spritesheet('urania', 'assets/img/Characters/Urania/UraniaSprites2.png', {frameWidth: 76, frameHeight: 87});
    }

    create()
    {
        this._collidable = this.physics.add.staticGroup();

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

        this._player = new Player(this);
    
        //keys
        this._cursors = this.input.keyboard.createCursorKeys();
    
        //collisions
        this.physics.add.collider(this._player.Get(), this._collidable);   
        //this.physics.add.collider(player, bad, playerHit, null, this);
    
        this.cameras.main.setBounds(0,0, 1000000000000000000000000000000, 600);
        this.cameras.main.startFollow(this._player.Get());
    }

    update()
    {
        this._player.Update(this._cursors);
    }
}

export default GameScene;