import Player from './Player.js';
import StaticObject from './StaticObject.js';
import Npc from './NPC.js';

class Snake extends Npc
{
    //Private Fields
    _leftMax;
    _rightMax;
    _snakeLeft = true;

    constructor(character)
    {
        super(character);

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
    }

    Update = function()
    {
        if (this._snakeLeft) {
            character.setVelocity(-50);
        } else {
            character.setVelocity(50);
        }
         if (character.x < this._leftMax)
                {
                this._snakeLeft = false;
                character.anims.play('snake right');
                }
        else if (character.x > this._rightMax)
            {
                this._snakeLeft = true;
                character.anims.play('snake left');
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