function Animal(name) {
    // Initialize name property
    this.name = name;
}

//Define makeSound method on Animal prototype
Animal.prototype.makeSound = function(){

    return "Some generic sound"
}


// Create an instance
let animal1 = new Animal("Leo");

// Call makeSound and print the result
console.log(animal1.makeSound());