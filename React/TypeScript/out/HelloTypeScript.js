"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloTypeScript = void 0;
var HelloTypeScript;
(function (HelloTypeScript) {
    var burger = "Hamburger", calories = 500, tasty = true, brand, price, promotion, counstries = ['VietNam', "Lao", "China"], counstriesV2 = ["VietNam", "Lao", "China"], isPromote = [true, false, false], priceEscalate = [100, 200, 300], mixArray = [1, 2, 3, "VietNam", true], mixArray2 = ['Lao', 1, true], tuple = ["Vietnam", 5000, true], 
    //Object
    object = { key: "Value" }, person = { name: "Fsoft", age: 35 };
    //Enum
    let YesOrNo;
    (function (YesOrNo) {
        YesOrNo[YesOrNo["Thinking"] = 1] = "Thinking";
        YesOrNo[YesOrNo["Yes"] = 4] = "Yes";
        YesOrNo[YesOrNo["No"] = 10] = "No";
        YesOrNo[YesOrNo["Never"] = 11] = "Never";
    })(YesOrNo || (YesOrNo = {}));
    console.log(YesOrNo.Thinking, YesOrNo.Yes, YesOrNo.No, YesOrNo.Never);
    let Color;
    (function (Color) {
        Color["Red"] = "Red";
        Color["Green"] = "Green";
        Color["Blue"] = "Blue";
    })(Color || (Color = {}));
    let answer = YesOrNo.Never;
    console.log(answer);
    function doYouLoveMe(question) {
        switch (question) {
            case YesOrNo.No: return "Good luck man!";
            case YesOrNo.Thinking: return "I'm busy";
            case YesOrNo.Yes: return "OK man!";
        }
    }
    console.log(doYouLoveMe(YesOrNo.No));
    //Ex1
    let variable = 10;
    variable = "Hello";
    variable = true;
    console.log(variable);
    //Ex2 
    function speak(food, energy, tasty) {
        console.log(`You are eating ${food} with ${energy} calories`);
    }
    speak(burger, calories, tasty);
    //HOF
    function add(a, b) {
        return a + b;
    }
    const mul = (a, b) => {
        return a * b;
    };
    console.log(add(1, 2));
    console.log(mul(add(1, 2), 3));
})(HelloTypeScript || (exports.HelloTypeScript = HelloTypeScript = {}));
