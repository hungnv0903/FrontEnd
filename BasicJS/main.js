var a = [1,4,3,5,6,10,9] ; 
var max = a[0] ; 
var index ; 
for(i = 1 ; i<a.length ; i++){
    if(a[i]>max){
        max = a[i] ;
        index = i ;  
    }
}
console.log(max) ;
console.log("index : " , index) ;

var gt = 1 ; 
gt = "nguyenvanhung" 
console.log(gt) ; 
var str = "a"+(10+5) ;
console.log(str); 
console.log(typeof(str)) ; 

var decimal = 1.12345678  ;
console.log(decimal.toFixed(2));

var numberStr = "3000" ;  
number = Number(numberStr) ; 
console.log(typeof(number));

str = number.toString() ; 
console.log(typeof(str)) ;

var firstName = "Nguyen" , lastName = "Van Hung" , space = " " ; 
document.write(firstName + space + lastName) ; 

var fname = "Nguyen" ; 
var lname = 'Hung' ; 
var fullname = `${fname} van ${lname} age : ${20+4}` ; 
console.log(fullname);

var loremStr = "Lorem" ; 

var nomalLorem = `  ${loremStr} ipsum dolor sit, amet consectetur adipisicing elit.
                    ${loremStr} ipsum dolor sit, amet consectetur adipisicing elit.
                    ${loremStr} ipsum dolor sit, amet consectetur adipisicing elit.
                    ${loremStr} ipsum dolor sit, amet consectetur adipisicing elit.
                    ${loremStr} ipsum dolor sit, amet consectetur adipisicing elit.
                    ${loremStr} ipsum dolor sit, amet consectetur adipisicing elit.`


