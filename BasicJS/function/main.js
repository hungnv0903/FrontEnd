// Practice2 de quy tim min max cua mang

var mark = [1 ,3 ,2 ,10 , 100] ; 




function min(array){
    // var min = array[0] ; 
    // for(i = 0 ; i<array.length ; i++){
    //     if(min>array[i]){
    //         min=array[i] ; 
    //     }
    // }

    // return min ; 

    // Dequy

    if(array.length >0 ){
        const curenValue = array[array.length-1] ; 
        const nextValue = min(array.slice(0,-1)) ; 

        return curenValue < nextValue ? curenValue : nextValue ; 
    }

    return 0 ;

}
 
function max(array){
    // var max = array[0] ; 
    // for(i = 0 ; i<array.length ; i++){
    //     if(max<array[i]){
    //         max=array[i] ; 
    //     }
    // }

    // return max ; 

    if(array.length>0){
        const curenValue = array[array.length-1] ; 
        const nextValue = max(array.slice(0,-1)) ; 
        

        return curenValue >nextValue ? curenValue :nextValue
    }

    return 0 ; 

}

console.log("Min : " , min(mark));
console.log("Max : " , max(mark));



// Ex9 dequy

function loop(i){
    if(i>10) return ; 
    console.log(i);
    loop(i+1) ; 
}

loop(0) ; 
// Ex8
function _product(x , y){
    console.log("product function");
    return x*y ; 
}
function sum(x , y) {
    console.log("sum function");
    return x+y ; 
}

function calc(c , d , e , f){
    console.log("calc function");
    return sum(c , d)+ sum(e,f) ;  
}

function start(){
    
    var a = sum(1,2) ;  
    var b = calc(10 , 20 , 30 , 40) ; 
    return _product(a,b);//product(a,b , return a*b)
}

console.log(start());

// Ex7

function add(){
    console.log("Inside add function");
}

function _average(){
    add() ; 
    console.log("Inside average ");
}


function main(){
    _average() ; 
    console.log("Inside Main function ");
}

main() ; 


// Practice1 tinh tich/tbcong cua mang

var mark = [1,2,3,4,5] ; 
function product(array){
    var result = 1 ; 
    for(var i = 0 ; i<array.length ; i++){
        result*=array[i] ; 
    }
    return result ; 
}

function average(array){
    var sum = 0 ; 
    for(var i = 0 ; i<array.length ; i++){
        sum+=array[i] ; 
    }

    return sum/(array.length) ; 
}

// var a = product(array) ; 
console.log("product : " , product(mark));
console.log("average : " , average(mark));


// Ex6
const factorial = function fac(n){
    return n<2 ? 1 : n*fac(n-1) ;  
}

console.log(factorial(10));

// Ex5

const square = function(number){
    return (number*number) ; 
}

console.log(square(12));

// Ex4

var mark = [1,2,3,4,5] ; 
function addMark(array , a) {
    array.push(a) ; 
}
addMark(mark , 6) ; 
console.log(mark);


// Ex3
var person = {
    fullname : "Nguyen Thi Huyen" , 
    age : 24      
}

function changePersonInfo(obj){
    obj.age  = 23 ; 
}

changePersonInfo(person) ; 
console.log(person);

// Ex2
var num1 = 99 , num2 = 1000 ; 
console.log("before: " , num1 , num2);
function swap(num1  ,num2){
    var tmp  = num1 ; 
    num1 = num2 ; 
    num2 = tmp ; 

    console.log("Inside : " , num1 , num2);
}

swap(num1 , num2) ; 

// Ex1
var arr1 = [1,2,3,4,5] ; 
var arr2 = [10 , 20 , 30 , 99] ; 
// var sumArray = 0 ; 
function process(array){
    var sum = 0 ; 
    for(i = 0 ; i < array.length ; i++){
        sum+=array[i] ; 
    }

    return sum ; 
}
var sumArray = [] ; 
sumArray.push(arr1 , arr2) ; 
console.log(sumArray);

for(i = 0 ; i<sumArray.length ; i++){
    
}
console.log(process(arr1));
console.log(process(arr2));
