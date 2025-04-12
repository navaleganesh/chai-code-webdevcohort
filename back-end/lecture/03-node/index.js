const fs = require('fs');
const add = require('./math')
fs.writeFile('./test.txt', 'Hello World', ()=>{});

console.log({__filename, __dirname});
// console.log(math.ganesh);

//Named exports
// console.log(math.add(2,5));
// console.log(math.mul(2,5));

//Default exports
console.log(math());



// function require(moduleId){  //Module ki Id batao mai tumhe  bataunga

// }


function __require(id){
    //... agar id . se shuru hua toh user ki dir mei code ko dhundo
    //.. khud ke internal module mei dhundo
}