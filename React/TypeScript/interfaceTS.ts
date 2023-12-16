//Ex1
interface LabelValue{
    label:string;
    size: number ; 

}

const printLabel = (labelObject:LabelValue):void =>{
    console.log(`Label : ${labelObject.label}- Size: ${labelObject.size}`);
}

let object  = {size:100 , label:"Label Size 100"} ; 
printLabel(object)  ; 

//Ex2 

interface Shape {
    color:string ; 
    area():number ; 
} 

class Circle implements Shape {
    color: string;
    radius: number ; 

    constructor(color:string  , radius:number){
        this.color = color ; 
        this.radius = radius ; 
    }

    area():number {
        return Math.PI*this.radius**2 ; 
    }
}

let circleArea  = new Circle("red" , 10) ; 
console.log(circleArea.area());

//Ex3 
interface ShapePro {
    color : string ;    
}

interface CirclePro extends ShapePro {
    radius : number ; 
    area() : number  ;
}

class ColoredCircle implements CirclePro {
    color: string;
    radius: number;

    constructor(color:string  , radius:number){
        this.color = color ; 
        this.radius = radius ; 
    }

    area():number {
        return Math.PI*this.radius**2 ; 
    }

}

let cirleArea = new ColoredCircle("red" , 20) ; 
console.log(circleArea.area());

//Ex4 

interface Person {
    name:string ; 
    age?:number ; //Optional:tuy chon 
}

let person1 : Person = {name:"Minh" , age:27} ; 
let person2 : Person = {name:"Huyen"} ; 
