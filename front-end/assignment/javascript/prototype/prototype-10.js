// You need to implement the Product constructor function and its prototype methods

function Product(name, price, stock) {
    // Initialize name, price, and stock properties

    this.name = name;
    this.price = price;
    this.stock = stock;
}

// Define applyDiscount method on Product's prototype
Product.prototype.applyDiscount = function(percent){

    this.price = Math.round(this.price) - ((this.price/100) * percent)
}


// Define purchase method on Product's prototype
Product.prototype.purchase = function(quantity){
     
        if(this.stock >= quantity ){

           return this.stock-=quantity;
        }else {
            return "Not enough stock";
        }

}


let product1 = new Product('Laptop', 1000, 10)
let product2 = new Product('Phone', 500, 4)

product1.applyDiscount(10);



console.log(product1.price);
console.log(product2.purchase(6));

