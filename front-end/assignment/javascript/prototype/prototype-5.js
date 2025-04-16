// You need to implement the ShoppingCart constructor function and its prototype methods

function ShoppingCart() {
    // Initialize items property
    this.items = [];
}

// Define addItem method on ShoppingCart's prototype
ShoppingCart.prototype.addItem = function(price){

    this.items.push(price)
}


// Define getTotalPrice method on ShoppingCart's prototype
ShoppingCart.prototype.getTotalPrice = function(){

    return this.items.reduce((total,price)=> total + price, 0)
}

let cart = new ShoppingCart();
cart.addItem(10);
cart.addItem(20);
cart.addItem(30);

console.log(cart.getTotalPrice()); // Output: 60