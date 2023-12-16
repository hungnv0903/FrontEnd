// Ex4 while



//Ex3
const outputNumber = document.querySelector('#outputNumber') ; 
const inputNumber = document.querySelector("#number") ; 
const btnNumber = document.querySelector("#btnNumber") ; 

btnNumber.addEventListener('click' , function(){
    outputNumber.textContent = "Output : " ; 
    let number = inputNumber.value

    for(i = 1 ; i<=number ; i++){
        if(Math.floor(Math.sqrt(i)) == Math.sqrt(i)){
            // continue ;
            outputNumber.textContent += i + " "  ;  
        }
        // outputNumber.textContent += i + " "  ; 
    }
}) ; 



//Ex2
const contact = [
    "thuyet:1234",
    "nam:3456",
    "minh:5678",
    "huyen:6789",
    "hung:2345"
]

const searchResult = document.querySelector('#search-result') ; 
const inputSearch = document.querySelector('#search') ; 
const btnSearch = document.querySelector('#search-contact') ; 

const listResult = document.querySelector('ul') ; 

btnSearch.addEventListener('click' , function(){
    const searchValue = inputSearch.value.trim().toUpperCase() ;  //lay cac gia tri nhap vao
    console.log("searchValue : " , searchValue);

    for(let i = 0 ; i < contact.length ; i++){

        var splitContact = contact[i].split(":") ; 
        console.log("splitContact : " , splitContact);

        // if(searchValue==splitContact[0].trim().toUpperCase()){
        //     searchResult.textContent = contact[i] + "." ; 
        //     break ; 
        // }else {
        //     searchResult.textContent = "contact not found !!!" ; 
        // }
        if(contact[i].trim().toUpperCase().indexOf(searchValue) != -1){
            var list_item = document.createElement('li') ; 
            list_item.textContent = contact[i];
            listResult.appendChild(list_item) ;  
        }
    }
    
}) ; 


var colors = ['red' , 'green' , 'blue' , 'orange'] ; 
var colorText  = "My favorite color : " ; 
var colorEle = document.querySelector('#favorColor') ; 
for(var idx = 0  ; idx < colors.length ; idx++){
    colorText+=colors[idx] + " " + (idx==colors.length-1 ? '.' : ',') ;
    console.log("idx : " , idx ,  colors[idx]); 
}
colorEle.textContent = colorText ; 

