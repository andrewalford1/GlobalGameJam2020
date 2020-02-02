import Player from './Player.js';
import StaticObject from './StaticObject.js';
import Npc from './Npc.js';

class Snake extends Npc
{
    //Private Fields
    _leftMax;
    _rightMax;
    _snakeLeft = true;
    _character;
    _spawnPoint;
    _name;
    _width;
    _height;
    _scale;


    constructor(character)
    {
        super(character);
        
        this._spawnPoint = character.SpawnPoint;
        this._name = chatacter.Name;
        this._width = character.Width;
        this._height = character.Height;
        this._scale = character.Scale;
        
        
        this._character = character
        if (character.hasOwnProperty('leftMax'))
        {
            this._leftMax = character.leftMax;
        }
        if (character.hasOwnProperty('rightMax'))
        {
            this._rightMax = character.rightMax;
        }
    }

    Create(gameConfig)
    {
        
        this._character = gameConfig.physics.add.sprite(
            this._spawnPoint.X, 
            this._spawnPoint.Y, 
            this._name
        );
        this._character.setGravityY(-300)
        
        gameConfig.anims.create({
            key: 'snake left',
            frames: gameConfig.anims.generateFrameNumbers('snake', {start: 0, end: 5}),
            frameRate: 10,
            repeat: -1
        });
        gameConfig.anims.create({
            key: 'snake right',
            frames: gameConfig.anims.generateFrameNumbers('snake', {start: 6, end: 11}),
            frameRate: 10,
            repeat: -1
        });
        this._character.anims.play('snake left');
    }

    Update = function()
    {
    
        if (this._snakeLeft) {
            this._character.x += -10;
        } else {
            this._character.x += 10;
        }
         if (this._character.x < this._leftMax)
                {
                this._snakeLeft = false;
                this._character.anims.play('snake right');
                }
        else if (this._character.x > this._rightMax)
            {
                this._snakeLeft = true;
                this._character.anims.play('snake left');
            }
    }

    OnInteract = function(player)
    {
        //NPCs can only interact with the player.
        if (!(player instanceof Player))
        {
            return;
        }
    }

 /*    if (Player._isPounding) {
        //kill snake
    } else {
        //game over
    }
   */ 
   
}

export default Npc;