class Background
{
    //Private fields
    _states;
    _nextState;
    _currentState;
    _scale;

    constructor(background)
    {
        this._states = background.States;
        this._location = background.Location;
        this._scale = background.Scale;
        this._currentState = 0;
    }

    PreLoad = function(gameConfig)
    {
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
        for (let i = 0; i < this._states.length; i++)
        {
            this._states[i].Sprite = gameConfig._nonCollidable.create(
                this._states[i].Location.X,
                this._states[i].Location.Y,
                this._states[i].Name
            );
            this._states[i].Sprite.visible = false;

            //Follow the camera.
            this._states[i].Sprite.setScrollFactor(0);
        } 

        this._states[0].Sprite.visible = true;
    }

    IncrementState = function()
    {
        if (this._currentState < this._states.length)
        {
            this._currentState++;
            this._states[this._currentState].Sprite.visible = true;
        }
    }

    Reset = function()
    {
        this._currentState = 0;
    }
}

export default Background;