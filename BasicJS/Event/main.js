
var button = document.getElementById('button') ;
console.log(button);

function random(number){
    return Math.floor(Math.random()*number) ; 
}

function bgChange(){
    console.log(2);  
    const rgbColor = `rgb(${random(255)},${random(255)},${random(255)})` ;
    document.body.style.backgroundColor = rgbColor ;
}

function colorButton(){
    console.log(3);  
    const rgbColor = `rgb(${random(255)},${random(255)},${random(255)})` ;
    button.style.color = rgbColor ;
}

button.addEventListener('click' , function(){
    console.log(1);
    bgChange() ; 
    
}) ;

button.onfocus = function(){
    colorButton() ; 
}
button.onmousemove = function(){
    colorButton() ; 
}
function colorDiv(){
    console.log(3);  
    const rgbColor = `rgb(${random(255)},${random(255)},${random(255)})` ;
    return rgbColor ; 
}

for(index = 1 ; index<=16 ; index++){
    const currenDiv = document.createElement('div') ; 
    document.body.appendChild(currenDiv) ; 
}

var divArray = document.querySelectorAll('div') ; 
for(index = 0 ; index<divArray.length ; index++){
    divArray[index].onclick = function(even){
        even.target.style.backgroundColor = colorDiv() ; 
    }
}