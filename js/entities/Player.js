class Player
{
    //Private Fields
    _player;
    _canDoubleJump;
    _isFloating;
    constructor (game)
    {
        this._player = game.physics.add.sprite(100, window.innerHeight/2, 'urania');
        this._player.setScale(1.5);
        this._player.setBounce(0.1);
        this._player.setCollideWorldBounds(false);
        this._player.setDrag(30);
        this._player.setMaxVelocity(300, 1000);
        this._canDoubleJump = false;
        this._isFloating = false;

        var badVariablePlayer = this._player;
        var badVariableIsFloating = this._isFloating;
        var badVariableIsDoubleJump = this._canDoubleJump;

        game.input.keyboard.on('keydown_UP', function(event)
        {
            if (badVariablePlayer.body.touching.down)
            {
                badVariablePlayer.setVelocityY(-330);
                if (badVariablePlayer.body.velocity.x < 0)
                {
                    badVariablePlayer.anims.play('jump left', true);
                }
                else 
                    {
                        badVariablePlayer.anims.play('jump right', true);
                    }
            } 
            else if (badVariableIsDoubleJump) 
            {
                badVariablePlayer.setVelocityY(-330);
                if (badVariablePlayer.body.velocity.x < 0)
                {
                    badVariablePlayer.anims.play('jump left', true);
                }
                else 
                    {
                        badVariablePlayer.anims.play('jump right', true);
                    }
                    badVariableIsDoubleJump = false;
            } 
            else 
            {
                    badVariablePlayer.setGravityY(-200);
                    badVariableIsFloating = true;
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
                badVariablePlayer.anims.play('pound', true);
            }
        });

        game.anims.create({
            key: 'pound',
            frames: game.anims.generateFrameNumbers('urania pound', {start: 0, end: 3}),
            frameRate: 10,
            repeat: -1
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
            key: 'jump left',
            frames: game.anims.generateFrameNumbers('urania jump', {start: 0, end: 1}),
            frameRate: 10,
            repeat: -1
        });
         game.anims.create({
            key: 'jump right',
            frames: game.anims.generateFrameNumbers('urania jump', {start: 2, end: 3}),
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
        this._player.anims.play('turn left');
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
                
                if (this._player.body.velocity.x < 0){
                
                this._player.anims.play('turn left');
                
            }
            else if (this._player.anims.frameRate == 10)
            {
                
                this._player.anims.play('turn right');
                
            }
                
            }
            else
            {
                this._player.anims.play('float right', true); 
            }            
        }
            
        if (this._isFloating)
        {
            if (cursors.left.isDown)
            {
                this._player.anims.play('float left', true);
            }
            else if (cursors.right.isDown)
            {
               this._player.anims.play('float right', true); 
            }
            else if (this._player.body.velocity.x < 0)
            {
                this._player.anims.play('float left', true);
            }
            else
            {
                this._player.anims.play('float right', true); 
            }            
        }
            
        
        
        if (this._player.body.touching.down)
        {
            // this._player.anims.play('turn');
            this._player.setDragX(1500);
            this._isFloating = false;
            this._canDoubleJump = true;
        } 
        else 
        {
            this._player.setDragX(1000);
        }

        if (!cursors.up.isDown && !cursors.down.isDown)
        {
            this._player.setGravityY(0);
        }
        
        if (!cursors.up.isDown)
            {
                this._isFloating = false
                if (!this._player.body.touching.down)
                {
                    if (this._player.body.velocity.x < 0)
            {
                this._player.anims.play('jump left', true);
            }
            else 
                {
                    this._player.anims.play('jump right', true);
                }
                }
            }
    }

    MoveLeft = function()
    {
        
        if (this._player.body.touching.down)
        {
            this._player.setAccelerationX(-500);
            if (this._player.body.velocity.x < 0){
                this._player.anims.play('left', true);
            }
            else
            {
                this._player.anims.play('turn left');
            }
            return;
        }

        this._player.setAccelerationX(-200);
    }

    MoveRight = function()
    {
        
        if (this._player.body.touching.down)
        {
            this._player.setAccelerationX(500);
            if (this._player.body.velocity.x > 0){
                this._player.anims.play('right', true);
            }
            else
            {
                this._player.anims.play('turn right');
            }
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
