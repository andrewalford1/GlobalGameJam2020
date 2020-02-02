import Player from './Player.js';

class Npc
{
    //Private Fields
    _npc;
    _name;
    _spritePath;
    _audio;
    _location;
    _scale;

    constructor(character, game)
    {
        this._name = character.Name;
        this._spritePath = character.SpritePath;
        this._audio = character.Audio;
        this._location = character.Location;
        this._scale = character.Scale;
     
        this._npc = game.physics.add.sprite(this._location.X, this._location.Y, this._name);
        this._npc.setScale(this._scale);
        this._npc.setBounce(0.1);
        this._npc.setCollideWorldBounds(false);
        this._npc.setDrag(30);
        this._npc.setMaxVelocity(300, 1000);
    }

    Get = function() { return _npc; }
    GetName = function() { return this._name; }
    GetSpritePath = function() { return this._spritePath; }
    GetAudio = function() { return this._audio; }
    GetLocation = function() { return this._location; }
    GetScale = function() { return this._scale; }

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

export default StaticObject