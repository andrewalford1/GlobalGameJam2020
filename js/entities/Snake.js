import Player from './Player.js';
import StaticObject from './StaticObject.js';
import Npc from './Npc.js';

class Snake extends StaticObject
{
    //Private Fields
    _leftMax;
    _rightMax;
    _snakeLeft = true;
    _character;
  


    constructor(character)
    {
        super(character);
        
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
        gameConfig.add.image(0, 0, super.GetName());
        gameConfig.anims.create({
            key: 'snake left',
            frames: gameConfig.anims.generateFrameNumbers('snake1', {start: 0, end: 5}),
            frameRate: 10,
            repeat: -1
        });
        gameConfig.anims.create({
            key: 'snake right',
            frames: gameConfig.anims.generateFrameNumbers('snake1', {start: 6, end: 11}),
            frameRate: 10,
            repeat: -1
        });
        this._character.anims.play('snake left');
    }

    Update = function(cursors)
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