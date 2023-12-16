
var image = ['images/img1.jpg' , 'images/img2.png' , 'images/img3.png'] ; 
var index = 0 ; 

// Task 1
var imageContainer = document.querySelector('.img-container') ; 
console.log(imageContainer);

var backBtn = document.querySelector('.back') ;
console.log(backBtn);

var nextBtn = document.querySelector('.next') ; 
console.log(nextBtn);

// Task 2
function renderImage(){
    var imgElement = document.createElement('img') ; 
    imgElement.src = image[index] ; 
    imageContainer.innerHTML = "" ; 
    imageContainer.appendChild(imgElement) ; 
}

renderImage() ; 

// Task 3

backBtn.addEventListener('click' , function(){
    index-- ; 
    if(index<0) index = 0 ; 
    renderImage() ; 
}) ; 

nextBtn.addEventListener('click' , function(){
    index++ ; 
    if(index >= image.length) index = image.length-1 ; 
    renderImage() ; 
});


