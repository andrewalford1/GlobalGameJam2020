class Background
{
    //Private fields
    _states;
    _currentState;

    constructor(background)
    {
        this._states = background.states;
        this._currentState = 0;
    }

    PreLoad = function(gameConfig)
    {
        for (let i = 0; i < this._states.length; i++)
        {
            gameConfig.load.image(
                'bg_' + i,
                this._states[i].SpritePath
            );
        }
    }

    Create = function(gameConfig)
    {
        for (let i = 0; i < this._states.length; i++)
        {
            this._states[i].Sprite = gameConfig._nonCollidable.create(
                window.innerWidth / 2,
                window.innerHeight / 2,
                'bg_' + i
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
}

export default Background;