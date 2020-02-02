class Objective
{
    //Private Fields
    _isComplete;
    _numCollected;
    _numTotalToCollect;

    constructor(numCollectables)
    {
        this._isComplete = false;
        this._numCollected = 0;
        this._numTotalToCollect = numCollectables;
    }

    IsComplete = function()
    {
        return this._isComplete;
    }

    Update = function()
    {
        if (this._numCollected >= this._numTotalToCollect)
        {
            this._isComplete = true;
        }
    }

    Collect = function()
    {

        this._numCollected++;
    }

    Reset = function()
    {
        this._isComplete = false;
        this._numCollected = 0;
    }
}

export default Objective;
