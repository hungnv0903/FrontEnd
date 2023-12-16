function getRandomElement<T>(items: T[]): T {
    let randomIndex = Math.floor(Math.random()*items.length) ; 
    return items[randomIndex] ; 
}

let number = [1,5,3,6,7,8,9] ; 
let color = ["red" , "green" , "blue" , "yellow"] ; 
let numberArr = [1,2,3,4,5,"Blue"] ; 
let booleanArr = [true , false , true , false] ; 

console.log(getRandomElement<number>(number));
console.log(getRandomElement<string>(color));
console.log(getRandomElement<any>(numberArr));
console.log(getRandomElement<boolean>(booleanArr));
//Runing by  rice 
function getRandomStringElement(items: string[]): string {
    let randomIndex = Math.floor(Math.random()*items.length) ; 
    return items[randomIndex] ; 
}
function getRandomNumberElement(items: number[]): number {
    let randomIndex = Math.floor(Math.random()*items.length) ; 
    return items[randomIndex] ; 
}
function getRandomBooleanElement(items: boolean[]): boolean {
    let randomIndex = Math.floor(Math.random()*items.length) ; 
    return items[randomIndex] ; 
}