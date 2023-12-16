// Practice 
// var li = document.getElementsByTagName("li") ;
var ul = document.querySelector("ul") ; 
console.log(ul);
var li = ul.getElementsByTagName('li')[0].innerHTML = "TEST" ;  
console.log(li);
// li[0].innerHTML = "TEST" ; 

var style_li = document.getElementsByTagName("li") ; 
console.log(style_li);
for(i = 0 ; i<style_li.length ; i++){
    if((i+1)%2==0) style_li[i].style.backgroundColor = "blue" ; 
    else style_li[i].style.backgroundColor = "pink" ; 
}

// Demo3
var nodeList = document.querySelectorAll("h2 , h4 , p") ; 
for(i = 0 ;  i<nodeList.length ; i++){
    nodeList[i].style.backgroundColor = 'yellow' ; 
    nodeList[i].classList.add("text-red") ; 
}

// Demo2
var button = document.getElementsByTagName("button")[0] ; 

button.addEventListener("click" , function(){
    console.log(window.location.href);
// navigate
    // window.location.href = "https://dantri.com.vn" ; 
//Reload page using JS 
    //window.location.reload() ; 
//ScrollTop
    //window.scrollTo(0,0) ; 

    window.scrollTo({
        top:0 ,
        left:0,
        behavior: "smooth"
    }); 


}) ; 

// Demo1
var paragraphs = document.getElementsByTagName('p') ; 
console.log(paragraphs);
paragraphs[1].textContent = "Fpt academy" ; 