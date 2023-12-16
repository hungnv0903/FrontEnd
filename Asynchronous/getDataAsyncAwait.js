var USERS_URL =  `https://jsonplaceholder.typicode.com/todos/`; 
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

//Ex3 
function delay(ms){
    return new Promise((resolve)=> setTimeout(resolve,ms)) ; 
}
async function sequentialDelay(){
    const delays = [3000,1000,2000] ; 
    for(const delayTime of delays){
        console.log(`Start delay for ${delayTime} ms`);
        await delay(delayTime) ; 
        console.log(`End delay for ${delayTime} ms`);
    }
}

sequentialDelay() ; 

//Ex2
async function fetchData(){
    try {
        const [data1,data2,data3] = await Promise.all([
            fetch(USERS_URL + 1),
            fetch(USERS_URL + 2),
            fetch(USERS_URL + 3),
        ]);
        const result1 = await data1.json() ; 
        const result2 = await data2.json() ; 
        const result3 = await data3.json() ; 
        console.log(result1,result2,result3);
    } catch (error) {
        console.log(error);
    }
}

fetchData() ; 

//Ex1
async function main(){
    console.log("Before");
    var t = await getDataPromise(USERS_URL+1) ; 
    console.log(t);
    console.log("After");
}
main() ; 
console.log("End");