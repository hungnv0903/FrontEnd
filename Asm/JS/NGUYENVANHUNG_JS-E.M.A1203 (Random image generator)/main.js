var theImages = [
    {
    src: "images/image1.jpg",
    width: "300",
    height: "300",
    },
    {
    src: "images/image2.jpg",
    width: "300",
    height: "300",
    },
    {
    src: "images/image3.jpg",
    width: "300",
    height: "300",
    },
    {
    src: "images/image4.jpg",
    width: "300",
    height: "300",
    },
    {
    src: "images/image5.jpg",
    width: "300",
    height: "300",
    },
    {
    src: "images/image6.jpg",
    width: "300",
    height: "300",
    },
    
 ];
 const listImage = document.querySelector('.list-image') ; 
 console.log(listImage);
 const btn = document.querySelector('.btn') ; 

 
function check(arr , x){
    let ok = 1 ; 
    for(let i = 0 ; i<arr.length ; i++){
        if(x==arr[i]){
            ok=0 ; 
        }
    }
    if(ok==1){
        return true ; 
    }else{
        return false ; 
    }
}


function list_Img(theImages , result){
    listImage.innerHTML = "" ; 
    for(let i = 0 ; i<result.length ; i++){
        const img = document.createElement('img') ; 
        img.src = theImages[result[i]].src ; 
        img.style.width = theImages[result[i]].width + "px" ; 
        img.style.height = theImages[result[i]].height + "px" ;
        listImage.appendChild(img) ; 
    }
}

btn.addEventListener('click' ,function(){
    var result = [] ; 
    var index = 0 ; 
    while(index<3){
        var rand = Math.floor(Math.random()*theImages.length) ;
        if(result.length==0 || check(result,rand)==true){
            result.push(rand) ; 
        }else{
            index-- ; 
        }
        index++ ; 
    }
    console.log("result : ",result);
    list_Img(theImages , result) ; 
}) ; 
