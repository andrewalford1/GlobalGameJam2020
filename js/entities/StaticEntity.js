import Entity from './Entity.js';

class StaticEntity extends Entity
{
    constructor()
    {

    }

    Preload(gameConfig)
    {

    }

    Create(gameConfig)
    {

    }

    Update(time, delta) 
    { 
        //Static Entities do not need updating. 
    }
}