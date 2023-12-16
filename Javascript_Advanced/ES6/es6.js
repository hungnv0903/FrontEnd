
//spread operator
var numberArray = [2,4,6,8,10] ; 
console.log(Math.min(numberArray));
console.log(numberArray);
console.log(...numberArray);
console.log(Math.min(...numberArray));

//Arrow  function

//3 if you want to return an expression (no {} and return)
var myFunction3 = (a,b)=> a+b ; 
console.log(myFunction3(10,20));


//2 if only parameter
var myFunction2 = (value)=> {
    return value+100 ;
} 
console.log(myFunction2(99));
//1. if no parameter
var myFunction = () => {
        return 100 ; 
}
console.log(myFunction());

//Ex2
console.log("-------");
const numberMulti = [5,6,7] ; 
const multiple  = (a,b,c)=>{
    return a*b*c ; 
}
console.log(multiple(...numberMulti));

//Ex3 

const tools = ['a' , 'b' , 'c'] ; 
const othertool = ['c','d'] ; 
const otherTool2 = ['e','f'] ; 
const allTool = tools.concat(othertool , otherTool2 , "AAAA") ;
//Trong ES6 
const ToolES6 = [...tools , ...othertool , ...otherTool2 , "Bbbbb   "] ;  
console.log(allTool);
console.log(ToolES6);

//Ex4 : spread object
console.log("--------");
const originalObject = {enable:true , darkMode:false} ; 
const secondObject = originalObject;
secondObject.darkMode = true ;


const arrName = ["nguyen van a" , "tran van b"] ;

const secondObjectES6 = {...originalObject, theme:"light",darkMode:true , ...arrName} ; 

console.log("originalObject : " , originalObject);
console.log("secondObject : " , secondObject);
console.log("secondObjectES6 : " , secondObjectES6);

console.log("--------");
//Rest parameter
const sum = (number1,number2,...number)=>{
    console.log(number1);
    console.log(number2);   
    console.log(number
        );
    return number.reduce((total , value)=>{
        return total+value ; 
    }) ;
}
console.log(sum(1,2,3,4,5));
console.log("-------");
//Destrucring

//Ex1
const post = {
    postID:1 , 
    webSite:"https://google.com",
    date:"09/11/2023",
    comments : {
        commentId:10,
        commentTitle:"Lorem ipsum"
    }
}
// console.log(post.postID , post.webSite , post.date);
// const {postID , webSite , date , comments} = post ; 
// console.log(postID,webSite,date,comments);
console.log("");
// const {commentId , commentTitle} = comments ; 
// console.log(commentId , commentTitle);

//Ex2 

const postEx = [
    {
    postID:1  , 
    webSite:"https://google.com",
    date:"09/11/2023",
    comments : {
        commentId:10,
        commentTitle:"Lorem ipsum"
    }
},
    {
    postID:2  , 
    webSite:"https://abc.com",
    date:"12/12/2023",
    comments : {
        commentId:11,
        commentTitle:"Lorem ipsum abcd"
    }
}
] ; 

const[{comments , postID , wesite , data}] = postEx ; 
console.log(comments,postID,wesite,data);
console.log("--------");
//Ex3
const arrDate = ["09" , "11" , "2023"] ; 
const [day , month , year] = arrDate ; 
console.log(day , month , year);

console.log("---------");
//Ex 4 
const res = () => [100,200,300] ; 
const [a,b,c] = res() ; 
console.log(b,c); 
console.log("-------");
//Ex5
const responseObj = {
    name:"FPT Software" , 
    type : "Academy"
} ; 

const {name:academyName , type} = responseObj ; 
console.log(academyName ,type);
//Ex6 
console.log("---------");
const blog = {
    anonymous: [
        {
            page: "anonymous.com",
            likes: 10000,
            daily : 2000
        }
    ]
};

const {anonymous:[{page,likes,daily}]} = blog ; 
console.log(page,likes,daily);

//Ex7
console.log("-----------");
const PersonObj = {
    name:"Thuyet",
    age:23,
    addres:"Ha Noi",
    hairColor:"black"
} ; 

const getSomeThing = (name , age,...otherInfo)=>{
    console.log(name,age,otherInfo);
}
getSomeThing(PersonObj);
console.log("---------");
//Symbol() - new primitive ES6 (ECMAScript 2015)
const mySymbol = Symbol() ; 
console.log(typeof(mySymbol));

const symbol1 = Symbol("mySymbol1") ; 
const symbol2 = Symbol("mySymbol2") ;
console.log(symbol1);
console.log(symbol1===symbol2);

createToken = ()=>{
    var s = Symbol() ; 
    return {
        [s]:"Secret",
    };
};

var token = createToken() ; 
console.log(token);

//for of : không  cung cấp trực tiếp index
const number  = [1,2,3,4] ; 
for(let [index , item] of number.entries()){
    console.log(index , item);
}

console.log(...number);

number.forEach((item , index) => {
    console.log(index , item);
});


const string = 'Hello world !' ; 
for(item of string){
    console.log(item);
}
console.log("");
//Iterators Es6
var numberArray = [1,2,3,4,5,6,7,8,9] ; 
var iterators = numberArray[Symbol.iterator]() ; 
let next = iterators.next() ; 
while(!next.done){
    console.log(next);

    next = iterators.next() ; 
}
console.log("");
//Iterator - object 
var ObjPerson =  {
    name : 'Dat green',
    class: 'prd04',
    age : 25
}

ObjPerson[Symbol.iterator] = function* (){
    var self = this; //tham chieu den objperson khi goi
    // var keys = Object.keys(this) ; 
    var keys = Object.keys(self) ; 
    // var i = 0 ; 
    for(var i = 0 ; i<keys.length ; i++){
        yield self[keys[i]] ; 
    }

    return ;
    // return {
    //     next: function(){
    //         if(i>=keys.length){
    //             return {
    //                 value:undefined,done:true        } 
    //         }
    //         return {
    //             value:self[keys[i++]],done:false
    //         }
    //     }
    // }
}

for(var keys of ObjPerson) {
    console.log(keys);
}

console.log("");
//generator
function* evenNumber(){
    let number = 0 ; 
    while(true){
        yield number ; 
        number +=2 ; 

    }
}
const generators = evenNumber() ; 
console.log(generators.next()); //{value:0 , done:false}
console.log(generators.next()); //{value:2 , done:false}
console.log(generators.next()); //{value:4 , done:false}
console.log(generators.next()); //{value:6 , done:false}


//ex2  

var generatorNumber = generator(90) ; 
console.log(generatorNumber.next().value); //90
console.log(generatorNumber.next().value); //91
console.log(generatorNumber.next().value); //92
console.log(generatorNumber.next().value); //93
console.log(generatorNumber.next().value); //100 ; 
function* generator(number){
    yield number ; 
    yield* anotherGenerator(number) ;
    yield number+10  ; 
}

function* anotherGenerator(number){
    yield number+1 ; 
    yield number+2 ; 
    yield number+3 ; 
}
console.log("");
console.log("MAP");
//Map
const key1 = "key1" ; 
const key2 = {name:"Duong"} ; 
const key3 = function(){}

const myMap = new Map() ; 
myMap.set(key1 , "Value 1") ; 
myMap.set(key2 , "Value 2") ; 
myMap.set(key3 , "Value 3") ; 

console.log(myMap);
console.log(myMap.get(key1));
console.log(myMap.get(key2));
console.log(myMap.get(key3));

console.log(myMap.entries());
console.log(myMap.keys());
console.log(myMap.values());
console.log(myMap.size);
console.log(myMap.has(key3));
myMap.delete(key3) ; 
console.log(myMap.size);


//Set Es6
console.log("");
console.log("Set");
const mySet =  new Set() ; 
mySet.add(1) ; 
mySet.add(2) ; 
mySet.add(3) ; 
mySet.add(2) ;  // khoog thuc thi vi no da ton tai

mySet.delete(1) ; 

console.log(mySet);
console.log(mySet.size);
console.log(mySet.has(1));
console.log(mySet.has(2));

const mySet2 = new Set([1,2,3,4,2,1]) ; 
console.log(mySet2);

const obj1 = {name:"Ford"};
const obj2 = {name:"Honda"}; 
const obj3 = {name:"Ford"};

const objSet = new Set() ; 
objSet.add(obj1) ; 
objSet.add(obj2) ; 
objSet.add(obj3) ;

console.log(objSet);

console.log("");
const traineeList  = [
    {
        name:"nguyen van a",
        id:1
    },
    {
        name:"nguyen van b",
        id:2
    },
    {
        name:"nguyen van c",
        id:3
    },
    {
        name:"nguyen van a",
        id:1
    }
]

//cach1
const setTrainee = new Set() ; 
var newArray = [] ; 
for(trainee of traineeList){
    if(!setTrainee.has(trainee.id)){
        setTrainee.add(trainee.id) ; 
        newArray.push(trainee) ; 
    }
}

console.log(setTrainee);
console.log(newArray);

// cach2 
const uniqueObject = [...new Set(traineeList.map((obj)=>{
    return JSON.stringify(obj)
}))].map((str)=>JSON.parse(str)) ; 
console.log(uniqueObject);

//cach3
const mark = new Array(50).fill(0) ; 
const result = [] ; 
for(item of traineeList){
    if(mark[item.id]===0){
        mark[item.id] = 1 ; 
        result.push(item) ; 
    }
}
console.log(result);

//