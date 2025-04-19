// console.log("Hello", Age);
// var Age = 35;
// console.log("Hello", Age);

/* 
Above program output is
Hello undefined
Hello : 35
*/


// console.log("Hello", Age);
// var Age = 35;

/*
Above programme output is:
Hello undefined    // Here is no Temoreal Dead Zone(TDZ)
*/


// test();
// console.log("Hello", Age);
// var Age = 35;
// function test(){
//     console.log("I am test");
   
// }
// console.log("Hello", Age);

/*
Above programme output is:
I am test
Hello  35
*/




// test();
// console.log("Hello", Age);
// var Age = 35;
// var test = function() {
//     console.log("I am test");
   
// }
// console.log("Hello", Age);

/*
Above programme output is:
Getting error 
TypeError: test is not a function
*/


 
// console.log("Hello", Age);
/*
Above programme output is:
ReferenceError: Age is not defined
*/




// console.log("Hello", Age);
// let Age = 35;  // DEAD Zone
/*
Above programme output is:
ReferenceError: Cannot access 'Age' before initialization
*/


/* let & const hoisting hote hai magar access nahi kar paate due to Temporal Dead Zone(TDZ) */



