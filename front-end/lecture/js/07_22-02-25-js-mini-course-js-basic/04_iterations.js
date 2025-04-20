let salesData = [
    { product: "Laptop" , price: 1200},
    { product: "Smartphones" , price: 800},
    { product: "Headphones" , price: 150},
    { product: "Keyboard" , price: 80},
]


let totalSales =  salesData.reduce((acc, sale)=> acc + sale.price, 0)
console.log(totalSales);




/*################################## */
//IMP: Build your own pipe (It's means "ganesh".toUpperCase)
const pipe =
  (...functions) =>
  (initialValue) =>
    functions.reduce((acc, fn) => fn(acc), initialValue);

// Building blocks to use for composition
const double = (x) => 2 * x;
const triple = (x) => 3 * x;
const quadruple = (x) => 4 * x;

// Composed functions for multiplication of specific values
const multiply6 = pipe(double, triple);
const multiply9 = pipe(triple, triple);
const multiply16 = pipe(quadruple, quadruple);
const multiply24 = pipe(double, triple, quadruple);

// Usage
multiply6(6); // 36
multiply9(9); // 81
multiply16(16); // 256
multiply24(10); // 240
/*################################## */









let inventory = [
    { name : "Widget A", stock:30 },
    { name : "Widget B", stock:120 },
    { name : "Widget C", stock:45 },
    { name : "Widget D", stock:70 },
];

let lowstockInventory = inventory.filter((item)=> item.stock <  50)
console.log(lowstockInventory);


let userActivity = [
    { user: "Alice", activityCount : 45},
    { user: "Bob", activityCount : 72},
    { user: "Charlie", activityCount : 33},
];



//IMP: Interview question

//find most active user using reduce
let mostActiveUser  = userActivity.reduce((maxUser,user) => user.activityCount > maxUser.activityCount ? user : maxUser)

console.log(mostActiveUser);


