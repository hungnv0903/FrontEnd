var seclect = document.querySelector('select') ; 
var list = document.querySelector('.output ul') ; 
var output = document.querySelector('.output p') ; 
var input = document.querySelector('.output input') ; 
var button = document.querySelector('.output button') ;

var person = {
    id : 1 , 
    name : "Nguyen Van Hung",
    age : 24 , 
    email : "nguyenhung090399@gmail.com"
} ; 

var key = 'id' ; 
seclect = document.addEventListener("change" , function(even){
    // console.log("select even :  " , even);
    console.log("select even :  " , even.target.value);
    key = even.target.value ; 

}) ; 


button.addEventListener("click", function(){
    var newValue = input.value ; 

    console.log(key , person , newValue);

    person[key] = newValue ;

    output.textContent = JSON.stringify(person) ; 

}) ; 






var fptStudent = {
    age : 22
}

fptStudent.address = "17 duy tan" ; 
console.log(fptStudent);

var dataHeight = "180cm"

// them moi toi tuong vao doi tuong fptStudent
fptStudent["name"] = {} ;  //khoi tao mot doi tuong ben trong doi tuong fptStudent
fptStudent["name"].firstName = "nguyen" ; 
fptStudent["name"]["lastName"] = "Hung" ; 
fptStudent["name"]["height"] = dataHeight ; 


var objBracket = {
    points : 100,
    yearsOld : 20
}

var objProperty = {
    points : "points",
    age : "yearsOld"
}

console.log("Points : " , objBracket[`${objProperty["points"]}`]);
console.log("Age : " , objBracket[objProperty.age]);


var student = {
    firstName : "Nguyen",
    lasName : "Hung" , 
    age : "24",

    fullname : function(){
        return `${this.firstName} - ${this.lasName}` ; 
    },
    address : [{street : "DuyTan"} , {street : "Doi Can"}],
    class : "React Developer ",
    points : {
        math : 10 , 
        biology : 50,
    },

    isGraduate : function(){
        return student.age < 22 ? false : true ; 
    } 
}

var propertyName = "firstName" ; 
console.log(student);
console.log("FirstName : "  , student.firstName);
console.log("LastName : "  , student["lasName"]);
console.log("Age : " , student["age"]); 

console.log(`student[${propertyName}] : ` , student[`${propertyName}`] );
console.log(`Fullname : ` , student.fullname());

console.log(student.points["math"]);
console.log(student["points"]["math"]);
console.log(student.points.math);