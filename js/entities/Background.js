class Background
{
    //Private fields
    _states;
    _nextState;
    _currentState;
    _scale;
    _name;
    _base;

    constructor(background)
    {
        this._states = background.States;
        this._location = background.Location;
        this._scale = background.Scale;
        this._base = background.Base;
        this._currentState = 0;
    }

    PreLoad = function(gameConfig)
    {
        gameConfig.load.image(
            this._base.Name,
            this._base.SpritePath
        );

        for (let i = 0; i < this._states.length; i++)
        {
            gameConfig.load.image(
                this._states[i].Name,
                this._states[i].SpritePath
            );
        }
    }

    Create = function(gameConfig)
    {
        this._base.Spite = gameConfig._nonCollidable.create(
            this._base.Location.X,
            this._base.Location.Y,
            this._base.Name
        );

        for (let i = 0; i < this._states.length; i++)
        {
            this._states[i].Sprite = gameConfig._nonCollidable.create(
                this._states[i].Location.X,
                this._states[i].Location.Y,
                this._states[i].Name
            );
            this._states[i].Sprite.visible = false;
        } 
    }

    IncrementState = function()
    {
        if (this._currentState < this._states.length)
        {
            this._states[this._currentState].Sprite.visible = true;
            this._currentState++;
        }
    }

    Reset = function()
    {
        this._currentState = 0;
    }
}

export default Background;