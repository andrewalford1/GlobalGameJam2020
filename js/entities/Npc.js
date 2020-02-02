import Player from './Player.js';
import StaticObject from './StaticObject.js';

class Npc extends StaticObject
{
    //Private Fields
    _audio;

    constructor(character)
    {
        super(character);

        if (character.hasOwnProperty('audio'))
        {
            this._audio = character.audio;
        }
    }

    Create(gameConfig)
    {
        if (this._audio.hasOwnProperty('Name'))
        {
            this._audio.obj = gameConfig.sound.add(this._audio.Name);
        }
    }

    Update = function()
    {

    }

    OnInteract = function(player)
    {
        //NPCs can only interact with the player.
        if (!(player instanceof Player))
        {
            return;
        }
    }

    Speak = function()
    {
        this._audio.obj.play({
            volumne: .3,
            loop: false
        });
    }
}

export default Npc;