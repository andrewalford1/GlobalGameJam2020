class Entity
{
    _posX;
    _posY;
    _scale;
    _metadata;
    
    constructor()
    {
        //Define this class as abstract.
        if (this.constructor === Entity)
        {
            throw new console.error(
                'Cannot instansiate abstract class: ' + 'Entiy'
            );
        }
    }

    Preload(gameConfig)
    {
        throw new console.error(
            'Abstract method Entity.Preload() must be overridden'
        );
    }

    Create(gameConfig)
    {
        throw new console.error(
            'Abstract method Entity.Create() must be overridden'
        );
    }

    Update(time, delta)
    {
        throw new console.error(
            'Abstract method Entity.Update() must be overriden'
        );
    }

    GetXPos()
    {
        return this._posX;
    }

    GetYPos()
    {
        return this._posY;
    }

    GetScale()
    {
        return this._scale;
    }

    Get()
    {
        throw new console.error(
            'Abstract method Entity.Get() must be overriden'
        )
    }

    SetXPos(x)
    {
        this._posX = x;
    }

    SetYPos(y)
    {
        this._posY = y;
    }

    SetScale(scale)
    {
        this._scale = scale;
    }
}

export default Entity;