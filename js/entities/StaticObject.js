class StaticObject {
    constructor(obj) {
        this.name = obj.name;
        this.path = obj.path;
        this.x = obj.x;
        this.y = obj.y;
        this.scaleX = obj.scaleX;
        this.scaleY = obj.scaleY;
        this.isCollidable = obj.isCollidable;
        this.alpha = obj.alpha;
    }
    
    GetName() {
        return this.name;
    } 

    GetPath() {
        return this.path;
    }

    GetX() {
        return this.x;
    }

    GetY() {
        return this.y;
    }

    GetScaleX() {
        return this.scaleX;
    }

    GetScaleY() {
        return this.scaleY;
    }
    
    GetCollidable() {
        return this.isCollidable;
    }

    GetAlpha() {
        return this.alpha;
    }
}

export default StaticObject; 