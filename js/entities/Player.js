class Player
{
    //Private Fields
    _player;

    constructor (game)
    {
        this._player = game.physics.add.sprite(100, 450, 'urania');
        this._player.setScale(1.5);
        this._player.setBounce(0.1);
        this._player.setCollideWorldBounds(false);
        this._player.setDrag(30);
        this._player.setMaxVelocity(300, 1000);

        game.anims.create({
            key: 'left',
            frames: game.anims.generateFrameNumbers('urania', {start: 0, end: 3}),
            frameRate: 10,
            repeat: -1
        });
        game.anims.create({
            key: 'turn left',
            frames: [ { key: 'urania', frame: 4}],
            frameRate: 20
        });
        game.anims.create({
            key: 'turn right',
            frames: [ { key: 'urania', frame: 5}],
            frameRate: 20
        });
        game.anims.create({
            key: 'right',
            frames: game.anims.generateFrameNumbers('urania', {start: 6, end: 9 }),
            frameRate: 10,
            repeat: -1
        });
    }

    Update = function(cursors)
    {
        if (cursors.left.isDown)
        {
            this.MoveLeft();
        } else if (cursors.right.isDown)
        {
            this.MoveRight();
        } else {
            if (this._player.body.velocity.x < 0){
            this._player.anims.play('turn left');
            } else {
                this._player.anims.play('turn right');
            }
        }
        
        if (IsOnSurface())
        {
            this._player.setDragX(1500);
            canDoubleJump = true
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
        if (this.IsOnSurface())
        {
            this._player.setAccelerationX(-500);
            if (this._player.body.velocity.x < 0){
                this._player.anims.play('left', true);
            } else {
                this._player.anims.play('turn left');
            }
            return;
        }

        this._player.setAccelerationX(-200);
        this._player.anims.play('turn left');
    }

    MoveRight = function()
    {
        this._player.anims.play('right', true);
        if (this._player.body.touching.down)
        {
            this._player.setAccelerationX(500);
            if (this._player.body.velocity.x > 0){
                this._player.anims.play('right', true);
            } else {
                this._player.anims.play('turn right');
            }
            return;
        } 

        this._player.setAccelerationX(200);
        this._player.anims.play('turn right');
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
            if (this._player.body.velocity.y < 0)
                {
                this._player.setGravityY(-200)
                }
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