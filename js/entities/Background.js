class Background
{
    //Private fields
    _states;
    _currentState;
    _numStates;

    constructor()
    {
        this._numStates = 6;
    }

    GetStates = function()
    {
        return this._states;
    }

    GetState = function(index)
    {
        return this._states[i];
    }

    GetCurrentState = function()
    {
        return this._states[this._currentState];
    }

    IncrementState = function()
    {
        if (this._currentState < this._numStates)
        {
            this._currentState++;
        }
    }

    Reset = function()
    {
        this._currentState = 0;
    }
}

export default Background;