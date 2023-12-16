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

const getDataPromise = (url) => {
    return new Promise(function (resolve, reject) {
        getData(url, function (error, data) {
            if (error) {
                reject(error);
            }
            resolve(data);
        });
    });
}

//Ex2
const keywords = ['h','e','l','l','0'] ; 
const p = keywords.map((world)=>
    getDataPromise( `https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&format=json&formatversion=2&search=${world}&namespace=0&limit=10`,)
)

console.log(p);
Promise.all(p).then((data)=>{
    console.log(data);
})

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
input.addEventListener('keyup', function (event){
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
                ul.innerHTML += `<li><a href = "${data[3][index]}" target="_blank">${item}</a></li>`;
            }) ; 
        }
    )
    .catch((error)=>console.log(error))
    .then(()=>{
        return getDataPromise(
            `https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&format=json&formatversion=2&search=fa&namespace=0&limit=10`,
        ) ; 
    })
    .then((data)=>{
        console.log(data);
        return getDataPromise(
            `https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&format=json&formatversion=2&search=${data[1][1]}&namespace=0&limit=10`,
        )
    })
}, 500);


//Promise.any
Promise.any([
    Promise.reject("V 1"),
    Promise.reject("V 2"),
    Promise.reject("V 3"),
    Promise.reject("V 4"),
])
    .then((value) => console.log("You win at life", value))
    .catch((error) => console.log("You loose the life"));

//Promise.race
const promiseRacking = [
    new Promise((resolve, reject) => setTimeout(reject, 1000, "Tao xanh #1")),
    new Promise((resolve, reject) => setTimeout(resolve, 1000, "Tao do #2")),
    new Promise((resolve, reject) => setTimeout(resolve, 1000, "Tao xanh #3")),
]

Promise.race(promiseRacking)
    .then((value) => console.log(`The winner is: ${value}`))
    .catch((error) => console.log(`The looser is : ${error} `))


//Promise.allSettled : để sử lý một arrPromise để trả về một promise mới
//Các promise mới tất cả được resolve hoặc reject

//Ex2
const promiseWithTwoRejecred = [
    Promise.resolve("Tao do #1"),
    new Promise((_, reject) => setTimeout(reject, 1000, "Tao vang #2")),
    "Tao do #3",
    new Promise((_, reject) => setTimeout(reject, 3000, "Tao vang #4"))
]

Promise.allSettled(promiseWithTwoRejecred).then((apples) => {
    console.log(apples);
    const redApples = apples.filter((apple) => apple.status === "fulfilled").map((apple) => apple.value);
    const greenApples = apples.filter((apple) => apple.status === "rejected").map((apple) => apple.reason)
    console.log(redApples, greenApples);
})


//EX1
const promiseAS1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 AS resolve");
    }, 2000);
});

const promiseAS2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 AS resolve");
    }, 4000);
});
const promiseAS3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 3 AS resolve");
    }, 1000);
});

Promise.allSettled([promiseAS1, promiseAS2, promiseAS3])
    .then((result) => {
        console.log("All promise ", result);
    })
    .catch(() => {
        console.log("Error", error);
    });



//Promse.all()
//Promise without reject
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 resolved");
    }, 2000);
})
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 resolved");
    }, 3000);
})
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 3 resolved");
    }, 1000);
})

Promise.all([promise1, promise2, promise3]) //.all de xu ly mot array promise
    .then((result) => {
        console.log("All promise resolve", result);
    })
    .catch((error) => {
        console.log("Error", error);
    })

//EX2 : Promise with one reject
const promiseWithOneReject = [
    Promise.resolve("#1"),
    "#2",
    new Promise((resolve, reject) =>
        setTimeout(reject, 1000, "#3")),
]

Promise.all(promiseWithOneReject)
    .then((text) => console.log("All promise resolved", text))
    .catch((error) => console.log("Bad", error));

// let promise = new Promise(function(resolve , reject){
//     setTimeout(()=>resolve("OK! Man"),2000);
// });

// promise.then(
//     (result)=>alert(result),
//     (error)=>alert(error)
// )

const doawnloadFile = (url) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.responseText);
            } else {
                reject(new Error(xhr.statusText));
            }
        };
        xhr.onerror = () => {
            reject(new Error("Network error"));
        };
        xhr.send();
    });
}

doawnloadFile("https://abc.com/file.jpg")
    .then((data) => {
        console.log("File downloaded!", data);
    })
    .catch((error) => console.error("Error --- downloading file!", error));

})