class Vec {
    constructor(x , y){
        this.x = x ; 
        this.y = y ; 
    }

    plus(vector){ 
        return new Vec(this.x + vector.x , this.y + vector.y) ; 
    }

    minus(vector){
        return new Vec(this.x - vector.x , this.y - vector.y) ; 
    }

    get length(){
        return Math.sqrt(this.x**2 + this.y**2) ; 
    }
}

let vec = new Vec(1,2) ; 
console.log(vec.plus(new Vec(2,3))); 
console.log(vec.minus(new Vec(2,3))); 
console.log(new Vec(3,4).length);