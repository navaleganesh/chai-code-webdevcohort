
/**
 * Copy paste concept
 */
// First using variable 
// let p1 = "Ram";
// let p2 = "Laxman";

// console.log(p1);
// console.log(p2);

// p1 = p2
// console.log(p1);
// console.log(p2);


// Second using object
// let p1 = {
//     fName : "Krishna",
//     lName:"Yadav"
// }

// let p2 = p1
// console.log(p2);

//Change the name into the p2
// p2.fName = "Ram"
// p2.lName = "Raghu"
// console.log(p2);
// console.log(p1);



/**
 * Shallow copy concept
 */
// let p1 = {
//     fName : "Krishna",
//     lName:"Yadav",
// }
// let p2 = {
//    fName : p1.fName,
//    lName : p1.lName,

// }
// console.log(p1); //{ fName: 'Krishna', lName: 'Yadav' }
// console.log(p2); //{ fName: 'Krishna', lName: 'Yadav' }

// // Change the name into the p2 it's called "Shallow copy"
// p2.fName = "Radha";
// p2.lName = "RadhaRani"

// console.log(p1); //{ fName: 'Krishna', lName: 'Yadav' }
// console.log(p2); //{ fName: 'Radha', lName: 'RadhaRani' }




/**
 * There is an issue in a Shallow copy when we are trying to copy internal object(address:{}) of p1 = {} object then both address changed
 */


// let p1 = {
//     fName : "Krishna",
//     lName:"Yadav",
//     address : {
//         street: "Dwarka",
//     }
// }
// // let p2 = {
// //    fName : p1.fName,
// //    lName : p1.lName,
// //    address : p1.address
// // }

// /** OR */

// let p2 = {
//     ...p1 //Use the spread operator for access the p1 whole object.
//  }
// console.log(p1); //{ fName: 'Krishna', lName: 'Yadav', address: { street: 'Dwarka' } }
// console.log(p2); //{ fName: 'Krishna', lName: 'Yadav', address: { street: 'Dwarka' } }

// p2.fName = "Radha";
// p2.lName = "RadhaRani"
// p2.address.street = "GokulNagari";

// // Here p1 address also changed so it's not work as Shallow copy.
// console.log(p1); //{ fName: 'Krishna', lName: 'Yadav', address: { street: 'GokulNagari' } }
// console.log(p2); //{fName: 'Radha', lName: 'RadhaRani',address: { street: 'GokulNagari' } }


/**
 * Deep Copy concept here we need to copy the p1 object address in p2 object 
 */

let p1 = {
    fName : "Krishna",
    lName:"Yadav",
    address : {
        street: "Dwarka",
    }
}
let p1KaString = JSON.stringify(p1)  //Whole object ko String mai convert kiya
console.log(p1KaString); //'{"fName":"Krishna","lName":"Yadav","address":{"street":"Dwarka"}}'

let p2 = JSON.parse(p1KaString) //Again Stirng ko object mai convert kiya

console.log(p1); //{ fName: 'Krishna', lName: 'Yadav', address: { street: 'Dwarka' } }
console.log(p2); //{ fName: 'Krishna', lName: 'Yadav', address: { street: 'Dwarka' } }

p2.fName = "Radha";
p2.lName = "RadhaRani"
p2.address.street = "GokulNagari";

// Here p1 address changed so it's called Deep copy.
console.log(p1); //{ fName: 'Krishna', lName: 'Yadav', address: { street: 'GokulNagari' } }
console.log(p2); //{fName: 'Radha', lName: 'RadhaRani',address: { street: 'GokulNagari' } }
