import StaticObject from '../entities/StaticObject.js';

class Collectible extends StaticObject {
    _collectible;
    constructor(obj) {
        super(obj);
        this._collectible = this;
    }

    Get = function() {
        return this._collectible;
    }

    Kill = function() {
        kill(this._collectible);
    }
}

export default Collectible;