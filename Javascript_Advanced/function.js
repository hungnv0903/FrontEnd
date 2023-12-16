function check_1(a , b){
    if(typeof(a)==="string" && typeof(b)==="string"){
        return a+b ; 
    }else{
        return false
    }
}
var a = "acjskc" ; 
var b = 1 ; 
if(!check_1(a,b)){
    console.log("error") ; 
}else{
    console.log(check_1(a,b));
}

console.log("----------");
var arr = [1,2,3,1,3,2,10] ;//1,2,3,10
function max(arr){
    var max = arr[0] ; 
    for(let i = 1 ; i<arr.length ; i++){
        if(max<arr[i]){
            max = arr[i] ; 
        }
    }
    return max ; 
} 

// console.log(max(arr));
var mark = new Array(max(arr)+1).fill(0) ; 
for(let i = 0 ; i<arr.length ; i++){
    if(mark[arr[i]]==0){
        mark[arr[i]]=1 ; 
        console.log(arr[i]);
    }
}
console.log("-----------");



function higherOrderfunction(callback){
    console.log(typeof callback);
    callback() ; 
    return function(name){
        console.log(`Return function called : ${name}`);
    }
}

function callbackFunction(){
    console.log("This is callback function!");
}

const returnfuction = higherOrderfunction(callbackFunction) ; 
returnfuction("FA") ; 
console.log("--------");
//map 

var array = [1,2,3,4,5] ; 
var newArray = array.map(function(value , index ,array ){
    return value*2 ; ;
}) ; 
console.log(newArray);
console.log("--------");

function calculate(number){
    return number*number ; 
}
var newArr = array.map(calculate) ;
console.log(newArr); 
console.log("------");

//filter() ; 
var arrayOrigin = [2,4,5,7,9,10,100] ; 
var newArrFilter = arrayOrigin.filter(function(value , index , array){
    return value>5 && value % 2==0 ; 
})

var newArrayFilter_1 = arrayOrigin.filter(
    (value , index) => value%2 ===0 && value <100 && index>0 
) ; 

console.log("newArrayFilter : " , newArrFilter);
console.log("newArrayFilter_1 : " , newArrayFilter_1);
console.log("------");

//filter and map 
var arrayCombine = [1 , 2 , 3 , 4 , 5 , 100 , 99 , 55] ; 
var arrayCombined = arrayCombine.filter(function(value){
    return value%2===0 ; 
}).map(function(value){
    return value*value*value ; 
})
console.log("arraycombined : " , arrayCombined);
console.log("-------");

//reduce 
var arrayReduce = [1,2,3,4,5,6,8,9,10] ; 
var totalReduce = arrayReduce.reduce(function(total , value){
    return total+value ; 
});
console.log("totalReduce : " , totalReduce);
//reduce - fillter
var personArray = [
    {name : "thuyet" , age : "23" , yearOfEx : 2},
    {name : "phu" , age : "23" , yearOfEx : 3},
    {name : "huyen" , age : "23" , yearOfEx : 5},
    {name : "minh" , age : "23" , yearOfEx : 1}
]

var totalAge = personArray.reduce(function(total , currentValue){
    return total+ Number(currentValue.age) ; 
},0) ; 

console.log("totalAge" , totalAge);

var filteredReduce = personArray.reduce(function(filtered , person){
    if(person.age < 30){
        let newPerson = {
            name:person.name,
            age:person.age,
            yearOfEx:person.yearOfEx
        }

        filtered.push(newPerson) ; 
    }

    return filtered ; 
},[]) ;     

console.log("filteredReduce : " , filteredReduce);

console.log("------");
//combine map() & filter() & reduce()
var numberArray = [1,2,3,4,5,6,7,8,9,10] ; 
var numberCombine = numberArray.filter(function(value){
    return value%2==0 ; 
}).map(function(value){
    return value**2 ;
}).reduce(function( total , value){
    return total + value ; 
},0) ;

console.log("numberComnine : " , numberCombine);

//sort string 
var fruits = ['banana' , "lemon" , "Apple" , "orange" , "Mango"]; 
// fruits.sort() ; 
fruits.sort(function(a,b){
    return b.localeCompare(a) ; 
});
console.log(fruits);

console.log("-------");
//sort number

var numbers = [2,4,6,8,1,3,5,7,9,10,19] ;
// numbers.sort() ; 
numbers.sort(function(a,b){
    // return a-b ; 
    return b-a ; 
});

console.log(numbers);

var personSort = [
    {name : "thuyet" , age : "23" , yearOfEx : 2},
    {name : "phu" , age : "34" , yearOfEx : 3},
    {name : "huyen" , age : "24" , yearOfEx : 5},
    {name : "minh" , age : "27" , yearOfEx : 1}
]

var personSort_2 = personSort ; 
personSort.sort(function(a,b){
    if(a.name>b.name){
        return 1 ; 
    }else if(a.name <b.name){
        return -1
    }else{
        return 0 ; 
    }
});

console.log(personSort);
console.log(personSort_2);



//