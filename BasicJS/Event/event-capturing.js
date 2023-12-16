const elems = document.querySelectorAll("*") ; 
console.log(elems);

for(i = 0 ; i<elems.length ; i++){
    elems[i].addEventListener('click' , function(){
        console.log("tagName : " , elems[i].tagName);
    }
    , true  //capturnig); 
}