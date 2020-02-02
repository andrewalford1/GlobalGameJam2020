import Player from './Player.js';
import StaticObject from './StaticObject.js';

class Npc extends StaticObject
{
    constructor(character)
    {
        super(character);
    }

    Update = function()
    {

    }

    OnInteract = function(player)
    {
        //NPCs can only interact with the player.
        if (typeof(player) !== Player)
        {
            return;
        }
    }

    Die = function()
    {

    }

    Speak = function(audioComponent)
    {

    }
}

export default Npc;