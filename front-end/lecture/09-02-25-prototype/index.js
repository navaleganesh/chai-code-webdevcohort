
/* forEach prototype */
// const arr = [1,2,3,4,5]

// Array.prototype.chai = function(){

//     console.log("Welcome in chai");
    
// }

// console.log(arr.chai);



//  arr.forEach((value, index)=>{
     
//     console.log(value);
         
// })



// forEach prototype 

// if(!Array.prototype.myForEach) {

//     Array.prototype.myForEach = function(userFn){

//         for(let i=0; i< this.length; i++){
//             userFn(this[i])
            
//         }
//     }
// }


// const arr = [1,2,3,4,5]; 

// arr.myForEach(function (value) {
     
//     console.log(value);
         
// })






/* map prototype */
// const arrMap = [1,2,3,4,5]; 

// let rt = arrMap.map((value)=>{
     
//     return value*2
         
// })

// console.log(arrMap);
// console.log(rt);


// map prototype 

// if(!Array.prototype.myMap) {

//     Array.prototype.myMap = function(userFn){

//         let newArr = [];
//         for(let i=0; i< this.length; i++){
//             newArr.push(userFn(this[i]))
            
//         }
//         return newArr;
//     }
// }

// let rt = arrMap.myMap((value)=>{
     
//     return value * 2
         
// })
// console.log(arrMap);
// console.log(rt);





/* filter prototype */


 let arrFil = [1,2,3,4,5,6,7,8,9,10];

// let rt = arrFil.filter((value,index)=>{

//     return value % 2 == 0
// })

// console.log(rt);


if(!Array.prototype.myFilter){

    Array.prototype.myFilter = function(userFn){

        const newArr = [];

        for(let i=0; i < this.length; i++){

            if(userFn(this[i])){

                newArr.push(this[i])
            }

        }

        return newArr;
    }
}

let rt = arrFil.myFilter((value)=>{
    
    return value % 2 == 0;
    
})

console.log(rt);
