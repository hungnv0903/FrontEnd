class Menu {
    items:string[] ; 
    pages:number ; 
    counter:number ; 

    constructor(item_list:Array<string> , total_page:number){
        this.items = item_list ; 
        this.pages = total_page ; 
    }

    list():void {
        console.log("Today menu : ");
        for(let i = 0 ; i<this.items.length ; i++){
            console.log(this.items[i]);
        }
    }
}

var saturdayMenu = new Menu(["Pho" , "Bun Bo Hue" , "Banh My"] , 1) ;
console.log("Menu Item : " , saturdayMenu.items); 
saturdayMenu.list() ; 

class ChildMenu extends Menu {
    constructor(item_list:string[] , total_page:number){
        super(item_list , total_page) ; 
    }

    list(): void {
        console.log("Today children menu : ");
        this.items.forEach(item => {
            console.log(item);
        });
    }
}

var menuForChild = new ChildMenu(["Cake" , "Yogurt" , "Candies" ,"Chocolate"] , 2) ; 
menuForChild.list() ; 

//Ex2 
abstract class Animal{
    abstract makeSound():void  ; 
}

class Cat extends Animal {
    makeSound(): void {
        console.log("Meoz! meoz!");
    }
}

let myCat:Cat  = new Cat() ; 
myCat.makeSound() ; 