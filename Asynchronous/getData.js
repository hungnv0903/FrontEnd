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
};

const input = document.querySelector('input')
const button = document.querySelector('button')
const ul = document.querySelector('ul')
const span = document.querySelector('span')

const chars = ["L","Lo","Loa","Load","Loadi","Loadin", "Loading", "Loading!"];
let i = 0;

setInterval(function(){
    span.textContent = chars[i] ; 
    i++ ; 
    i%=11; 
},100);

let timer;
input.addEventListener('keyup', function (event) {
    const query = event.target.value;
    if (!query) {
        ul.innerHTML = "Type to search";
        return;
    }

    if (timer) {
        clearTimeout(timer)
    }
    //debounce

    timer = setTimeout(function () {
        getData(
            `https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&format=json&formatversion=2&search=${query}&namespace=0&limit=10`,
            function (error, data) {
                if (error) {
                    console.log(error);
                    return;

                }

                console.log(data);
                ul.innerHTML = "";
                data[1].forEach((item, index) => {
                    ul.innerHTML += `<li><a href = ${data[3][index]}>${item}</a></li>`;
                })
            }
        )
    }, 500);
});


