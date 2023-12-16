//call() , apply() , bind()
// Ex1 : call()
function greetCall(first , middle , last){
    console.log(this);
    console.log(`${first} , ${middle} , ${this.name} , ${last}`);
}

let personCall = {name:"VietNam"} ; 
greetCall.call(personCall , "Hello","welcome to" , "!") ; 


// Ex2 : apply()
function greetApply(first , middle , last){
    console.log(this);
    console.log(`${first} , ${middle} , ${this.name} , ${last}`);
}

let personApply = {name:"VietNam"} ; 
greetApply.apply(personCall ,["Hello" , "welcome to" , "!"]) ; 

// Ex3 : bind()
function greetBind(first , middle , last){
    console.log(this);
    console.log(`${first} , ${middle} , ${this.name} , ${last}`);
}

let personBind = {name:"VietNam"} ; 
greetBind.bind(personCall , "Hello" , "welcome to" , "!" ) ; 


//this example
//Ex1:objext method
let personThis = {
    name:"FPT" , 
    greet(){
        console.log("personThis:" , this.name);

    },
}
personThis.greet() ; 

//Ex2: normal function
function greetThis(){
    alert("welcome") ; 
    console.log(this);
}


//Prototype
class Person {
    constructor(first , last){
        this.first  = first ; 
        this.last   = last ; 
    }
}

Person.prototype.geFullName = function(){
    return `${this.first} ${this.last}` ; 

}

let person = new Person("FPT" , "Corpration") ; 
console.log(person.geFullName());
//Static
class Myclass {
    static greeting = "hello,world!"
    static count = 0 ; 
    constructor(){
        Myclass.count +=1 ; 

    }

    static greet(){
        return this.greeting  ;
    }
}

let objMyclass = new Myclass() ; 
console.log(objMyclass.count) ; 
// console.log(objMyclass.greet());
console.log(Myclass.count);
console.log(Myclass.greet());


//private fields
class Academy {
    #privateProperty ;
    publicProperty ;  
    constructor(privateValue , publicValue) {
        this.#privateProperty = privateValue ; 
        this.publicValue = publicValue ; 
    }

    getPrivateProperty(value){
        return this.#privateProperty ; 

    }
    setPrivateProperty(value){
        this.#privateProperty = value ; 
    }

    ser
}

let objAcademy = new Academy("Fsoft" , "FPT corp") ; 
console.log(objAcademy.publicProperty);
console.log(objAcademy.setPrivateProperty("Fpt Corporation"));
console.log(objAcademy.getPrivateProperty());
//Inheritance 
//parent class
class Animal {
    constructor(name){
        this.name = name ; 

    }

    speak() {
        console.log(`${this.name} make a sound`);
    }
}

class Cat extends Animal {
    //@override speak method
    speak() {
        console.log(`${this.name} meo meo !`);
    }
}

//Child  class 2 
class Dog extends Animal {
    //@override speak method 

    speak() {
        console.log(`${this.name} go go ! `);
    }
}

//Child class 3 
class Tiger extends Cat {
    //@override speak method 
    constructor (name , color) {
        super(name) ; //dung de goi method cua class cha tu method cua class con
        this.color = color ; 
    }
    speak() {
        console.log(`${this.name} ${this.color} ec ec !`);
    }
}

const cat1  = new Cat("MiMi") ; 
cat1.speak() ; 

const dog1 = new Dog("Lulu") ; 
dog1.speak() ;

const tiger1 = new Tiger("Lele" , "yellow") ; 
tiger1.speak() ; 

//abstraction
class Circle {
    constructor(radius) {
        this.radius = radius ; 
    }
    //get
    getRadius(){
        return this.radius ;  //This se tham chieu den doi tuong
    }

    // set
    setRadius(radius){
        this.radius = radius ; 
    }

    //calculate area 
    calculateAre() {
        return (Math.PI * this.radius ** 2).toFixed(1) ; 
    }
}

const c = new Circle(10) ;
// console.log(c.radius); 
console.log(c.getRadius()); 
c.setRadius(20)
console.log(c.getRadius());


//