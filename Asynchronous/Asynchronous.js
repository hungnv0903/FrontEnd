//Ex1
// console.log("Start");
// setTimeout(()=>{
//     setTimeout(()=>{
//         console.log("TimeOut3");
//     },10);
//     console.log("TimeOut1");
// },20) ; 
// setTimeout(()=>{
//     console.log("TimeOut2");
// },5) ; 
// console.log("Running"); 
// console.log("End"); 
//Ex2 
// console.log("");
// console.log("Start");
// const saySomething = ()=>{
//     console.log("Something...");
//     // alert("Something....") ; 
// }

// setInterval(saySomething , 3000) ; 
// clearInterval(saySomething) ;

//Ex3  Typewrite effect
// const text = "Hello, Javascript!!!" ; 
// let index = 0 ; 
// const typingEffect = ()=>{
//     const element = document.getElementById('typing-effect') ; 
//     element.textContent += text[index]
//     index++ ; 
//     if(index>=text.length){
//         console.log("Typing done!");
//         clearInterval(interval) ; 
//     }
// }
// const interval = setInterval(typingEffect , 100) ; 

//Ex4 : Callback
const doSomething = (callback) => {
    console.log('execute');
    callback();
};

const callbackFunction = () => {
    console.log("Task completed");
}

doSomething(callbackFunction);

//ex5


const getData = (url, callback) => {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                callback(undefined, JSON.parse(xhr.responseText));
            } else {
                callback(new Error(xhr.responseText));
            }
        }
    };

    xhr.open("GET", url, true);
    xhr.send();
}

var url = "https://jsonplaceholder.typicode.com/todos/";
getData(url + 1, function (error, value) {
    if (error) {
        return console.log(error);
    }
    console.log(value);
});