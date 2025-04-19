function greet(name){
    console.log(`Hello ${name}`);
}

// greet("Ram")
// greet("Laxman")


let globalVar = "I am global"
function modifyGlobal(){
    globalVar = "I am modified"
    let blockScopeVar = "I am blocked-scoped"
    // console.log(blockScopeVar);     // o/p: I am blocked-scoped
}

modifyGlobal()

// IIFE Function(Immediate invoked function)
let config = function(){
    let settings = {
        theme: "dark"
    }
    return settings;
}();



let person1 = {
    name: "ravi",
    greet:function(){
        console.log(`Hello ${this.name}`);   //Here is a 'this' keyword is called "Context"
    }
}

console.log(person1.greet); // o/p: [Function: greet]
console.log(person1.greet()); // o/p: Hello hitesh



let person2 = {
    name: 'hitesh',
}

// person1.greet.call(person2)  //o/p: Hello hitesh  //call acutally call karta hai sidha. But Bind return a new function

person1.greet.bind(person2) // No output
const bindGreet = person1.greet.bind(person2); //Here bind() return new function
console.log(bindGreet); // o/p: [Function: bound greet]
console.log(bindGreet()); // o/p: Hello hitesh


