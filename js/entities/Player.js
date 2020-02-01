class Player
{
    //Private Fields
    _player;

    constructor (game)
    {
        this._player = game.physics.add.sprite(window.innerWidth/2, window.innerHeight/2, 'urania');
        this._player.setScale(1.5);
        this._player.setBounce(0.1);
        this._player.setCollideWorldBounds(false);
        this._player.setDrag(30);
        this._player.setMaxVelocity(300, 1000);

        var badVariablePlayer = this._player;

        game.input.keyboard.on('keydown_UP', function(event)
        {
            if (badVariablePlayer.body.touching.down)
            {
                badVariablePlayer.setVelocityY(-330);
            } 
            else 
            {
                badVariablePlayer.setGravityY(-250)
            }
        });
        game.input.keyboard.on('keydown_DOWN', function(event) {
            if (badVariablePlayer.body.touching.down)
            {
                badVariablePlayer.setDragX(2000);
            } 
            else 
            {
                badVariablePlayer.setVelocityY(750);
            }
        });

        game.anims.create({
            key: 'float left',
            frames: game.anims.generateFrameNumbers('urania float', {start: 0, end: 1}),
            frameRate: 10,
            repeat: -1
        });
         game.anims.create({
            key: 'float right',
            frames: game.anims.generateFrameNumbers('urania float', {start: 2, end: 3}),
            frameRate: 10,
            repeat: -1
        });
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
        }
        else if (cursors.right.isDown)
        {
            this.MoveRight();
        }
        else
        {
            if (this._player.body.touching.down)
            {
                this._player.setAccelerationX(0);
            }
        }
        
        if (this._player.body.touching.down)
        {
            // this._player.anims.play('turn');
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
        if (this._player.body.touching.down)
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

    Hit = function(otherObject)
    {
        this._player.setVelocity(0,0);
        this._player.setX(50);
        this._player.setY(300);
    }

    Get = function()
    {
        return this._player;
    }
}