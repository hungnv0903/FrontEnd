let user = {
     name : "Doanh" , 
     age : 25 ,
     address : {
        street:"Duy Tan"
     }
}

function checkUser(user) {
    user.address = undefined ;
    return user ; 

}

user = checkUser(user) ; 
console.log(user.address?.street);
// if(user.address && user.address.street) {
//     console.log(user.address.street);
// }