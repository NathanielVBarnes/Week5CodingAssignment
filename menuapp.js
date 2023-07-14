class StoreMenu { // creating my class StoreMenu  with name and price as menu items
    constructor(name, price) { 
        this.name = name;  //this executes name and price as code
        this.price = price;
    }// making these menu items equal to price allows use to put in the name and price later
}
class Menu {  // created Menu class that has methods to add items to menu
    constructor(){ 
        this.item = []; // created a blank array to push items into the Menu class
    }
    addItem(item) {_ 
    this.items.push(item);
}
viewMenu() { // here is where we view/print the menu 
    console.log ("Here is the menu:")
    for(let item of this.items) {
        console.log (item.name + ": $" + item.price); // printing item's name and price
    }
}
deletItem(itemname){ // deleting items
    this.items = this.items.filter( item => item.name !== itemName);
}
}

const menu = new Menu(); // defining the unchangable variable Menu

menu.addItem(new StoreMenu("Pepperoni Pizza", 15));  // adding several items to the StoreMenu class; Plugging the name and price 
menu.addItem(new StoreMenu("Coca Cola" , 2));
menu.addItem(new StoreMenu("Caesar Salad" , 10));

menu.viewMenu();  // viewing the menu 

menu.deleteItem("Caesar Salad"); // deleting the value Caesar Salad 

menu.viewMenu(); // viewing menu after deleting Caesar Salad