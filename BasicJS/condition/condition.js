// ex4
var selectTheme = document.querySelector("#theme") ; 
selectTheme.addEventListener("change" , setTheme) ; 
const html = document.querySelector("html") ; 
function setTheme(){
    let bgColor = selectTheme.value === "pink" ? "pink" : "black" ; 
    let textcolor = selectTheme.value !== "pink" ? "pink" : "black" ; 
    console.log("bgColor : " , bgColor);
    html.style.backgroundColor = bgColor ; 
    html.style.color = textcolor ; 
}



// ex3
var selectWeather = document.querySelector("#weather") ; 
var weatherText = document.querySelector("#weatherText") ; 
selectWeather.addEventListener("change" , setWeather) ;

function setWeather() {
    var temperature = 30 ; 
    let choice = selectWeather.value ; 
    console.log("choice : " , choice);
    switch (choice) {
        case "sunny":
            weatherText.textContent = " It's nice and sunny outside today" ; 
            weatherText.style.color = "orange" ;     
            break;
        
        case "rainy" : 
            weatherText.textContent = "Rainy's  falling outside" ;
            weatherText.style.color = "blue" ; 

        case "snowing" : 
            weatherText.textContent = "The snow is coming down" ;
            weatherText.style.color = "squamarine" ;  

        case "overcast" : 
            weatherText.textContent = "It's  raining , but the sky is grey and  gloomy" ;
            weatherText.style.color = "gray" ; 
        default:
            weatherText.textContent = "" ; 
            break;
    }

    // if(choice === "sunny" && temperature < 40 ){
    //     weatherText.textContent = " It's nice and sunny outside today" ; 
    //     weatherText.style.color = "orange" ; 
    // }else if(choice === "rainy") {
    //     weatherText.textContent = "Rainy's  falling outside" ;
    //     weatherText.style.color = "blue" ;  
    // }else if(choice === "snowing") {
    //     weatherText.textContent = "The snow is coming down" ;
    //     weatherText.style.color = "squamarine" ;  
    // }else if(choice === "overcast") {
    //     weatherText.textContent = "It's  raining , but the sky is grey and  gloomy" ;
    //     weatherText.style.color = "gray" ;  
    // }else{
    //     weatherText.textContent = "" ; 
    // }


}





//ex2
var checkBox = document.querySelector("#shoppingCheck") ; 
var shoppingText = document.querySelector("#shoppingText") ; 
var shoppingDone = false ; 

checkBox.addEventListener("change" , function(){
    shoppingDone = !shoppingDone ; 
    updateAllowance() ; 
}) ;


function updateAllowance(){
    if(shoppingDone){
        var childsAllowance = 10 ; 

    }else {
        childsAllowance = 5 ; 
    }

    shoppingText.textContent = `Child has earned $ ${childsAllowance} this week` ; 
}

// updateAllowance() ; 

// ex1
var hour  = new Date().getHours() ; 
console.log("now" , hour);
// hour = 20 ; 
if(hour>=18) {
    document.getElementById("demo").innerHTML = "Afternoon" ; 
}else {
    document.getElementById("demo").innerHTML = "Morning" ; 
}