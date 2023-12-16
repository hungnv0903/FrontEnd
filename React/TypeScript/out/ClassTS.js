class Menu {
    constructor(item_list, total_page) {
        this.items = item_list;
        this.pages = total_page;
    }
    list() {
        console.log("Today menu : ");
        for (let i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    }
}
var saturdayMenu = new Menu(["Pho", "Bun Bo Hue", "Banh My"], 1);
console.log("Menu Item : ", saturdayMenu.items);
saturdayMenu.list();
class ChildMenu extends Menu {
    constructor(item_list, total_page) {
        super(item_list, total_page);
    }
    list() {
        console.log("Today children menu : ");
        this.items.forEach(item => {
            console.log(item);
        });
    }
}
var menuForChild = new ChildMenu(["Cake", "Yogurt", "Candies", "Chocolate"], 2);
menuForChild.list();
//Ex2 
class Animal {
}
class Cat extends Animal {
    makeSound() {
        console.log("Meoz! meoz!");
    }
}
let myCat = new Cat();
myCat.makeSound();
