//demo form event
const form = document.querySelector('form') ; 
const fname = document.getElementById('fname') 
const lname = document.getElementById('lname') 
const notify= document.querySelector('#warning') ;  

form.onsubmit = function(event){
    if(fname.value == "" || lname.value==""){
        alert("Submit error !") ; 
        event.preventDefault() ; //khong reload lai trang
        notify.textContent = " Submit error !" ; 
        notify.style.color = "red" ; 
    }else{
        alert("Submit success !") ; 
        // event.preventDefault() ; 
        // notify.textContent = " Submit success !" ; 
        // notify.style.color = "green" ; 
    }

} ; 

// window.addEventListener('contextmenu' , function(event){
//     event.preventDefault() ; 

//}) ; 

const btnVideo = document.getElementById("display-video") ; 
const videoBox=  document.getElementById("main-video") ; 
const video = document.querySelector("video") ;  

btnVideo.onclick = function(){
    videoBox.setAttribute("class" , "showing") ; 
}
video.onclick = function(event){
    event.stopPropagation() ; 
    video.play() ; 
}
videoBox.onclick = function(){
    videoBox.setAttribute("class" , "hidden") ; 
}