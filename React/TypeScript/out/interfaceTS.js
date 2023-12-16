const printLabel = (labelObject) => {
    console.log(`Label : ${labelObject.label}- Size: ${labelObject.size}`);
};
let object = { size: 100, label: "Label Size 100" };
printLabel(object);
class Circle {
    constructor(color, radius) {
        this.color = color;
        this.radius = radius;
    }
    area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
let circleArea = new Circle("red", 10);
console.log(circleArea.area());
class ColoredCircle {
    constructor(color, radius) {
        this.color = color;
        this.radius = radius;
    }
    area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
let cirleArea = new ColoredCircle("red", 20);
console.log(circleArea.area());
let person1 = { name: "Minh", age: 27 };
let person2 = { name: "Huyen" };
