class Player
{
    //Private Fields
    _player;

    constructor (game)
    {
        this._player = game.physics.add.sprite(100, 450, 'dude');
        this._player.setScale(1.5);
        this._player.setBounce(0.1);
        this._player.setCollideWorldBounds(false);
        this._player.setDrag(30);
        this._player.setMaxVelocity(300, 1000);

        game.anims.create({
            key: 'left',
            frames: game.anims.generateFrameNumbers('dude', {start: 0, end: 3}),
            frameRate: 10,
            repeat: -1
        });
        game.anims.create({
            key: 'turn',
            frames: [ { key: 'dude', frame: 4}],
            frameRate: 20
        });
        game.anims.create({
            key: 'right',
            frames: game.anims.generateFrameNumbers('dude', {start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
    }

    Update = function(cursors)
    {
        if (cursors.left.isDown)
        {
            this.MoveLeft();
        }
        
        if (cursors.right.isDown)
        {
            this.MoveRight();
        }
        
        if (IsOnSurface())
        {
            this._player.anims.play('turn');
            this._player.setDragX(1500);
        } 
        else 
        {
            this._player.setDragX(1000);
        }

        if (!cursors.up.isDown && !cursors.down.isDown)
        {
            this._player.setGravityY(0);
        }
    }

    MoveLeft = function()
    {
        this._player.anims.play('left', true);
        if (this.IsOnSurface())
        {
            this._player.setAccelerationX(-500);
            return;
        }

        this._player.setAccelerationX(-200);
    }

    MoveRight = function()
    {
        this._player.anims.play('right', true);
        if (this._player.body.touching.down)
        {
            this._player.setAccelerationX(500);
            return;
        } 

        this._player.setAccelerationX(200);
    }

    Jump = function()
    {
        if (this.IsOnSurface())
        {
            this._player.setVelocityY(-330);
        } 
        else if (canDoubleJump) 
        {
            this._player.setVelocityY(-330);
            canDoubleJump = false
        } 
        else 
        {
            this._player.setGravityY(-250)
        }
    }

    Pound = function()
    {
        if (this.IsOnSurface())
        {
            this._player.setDragX(2000);
            return;
        } 
        this._player.setVelocityY(750);
    }

    IsOnSurface()
    {
        return this._player.body.touching.down;
    }

    Hit(otherObject)
    {
        this._player.setVelocity(0,0);
        this._player.setX(50);
        this._player.setY(300);
    }

    Get()
    {
        return this._player;
    }
}