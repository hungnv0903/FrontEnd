function getRandomElement(items) {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
let number = [1, 5, 3, 6, 7, 8, 9];
let color = ["red", "green", "blue", "yellow"];
let numberArr = [1, 2, 3, 4, 5, "Blue"];
let booleanArr = [true, false, true, false];
console.log(getRandomElement(number));
console.log(getRandomElement(color));
console.log(getRandomElement(numberArr));
console.log(getRandomElement(booleanArr));
//Runing by  rice 
function getRandomStringElement(items) {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
function getRandomNumberElement(items) {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
function getRandomBooleanElement(items) {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
