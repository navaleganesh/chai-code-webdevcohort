//Problem: Create an object representing a type of tea with properties for name, type and caffeine content.

const teas = {
    name:"Lemon tea",
    type:"Green",
    caffine:"low"
}

//Problem: Access and print the name and type properites of the tea object.
console.log("Tea name", teas.name);
console.log("Tea type", teas["type"]);

//Problem: Add a new property origin to the tea object.
teas.origin = "China"

//Problem: Change the caffeine level of the tea object to "Medium"
teas.caffine = "Medium"

//Problem: Remove the type property from the tea object.
delete teas.type

//Problem: Check if the tea object has a propery origin
console.log("origin" in teas);

//Problem: Use a for...in loop to print all properties of the tea object.

for(let key in teas){
    console.log(`${key} + ": " + ${teas[key]}`);
}

//Problem: Create a nested object representing different types of teas and their properties
const myTeas = {
    greenTea:{
        name:"Green Tea"
    },
    blackTea :{
        name:"Black Tea"
    }
}

//Problem: Create a copy of the tea object.
const teaCopy = {
        ...teas
}

//Problem: Add a custom method describe to the tea object that returns a description string.

teas.address = function(){
     return "Pune";
    
}
 console.log(teas);
 

//Problem: Merge two objects representing different teas into one