// Print shinydiamond shape 2n-1

/*
input - 3
    *
  * * *
 * * * * *
  * * *
    * 
*/
// function shinyDiamondRug(n) {

//     let diamond = '';

//     //Upper part of the diamond (including the middle line)
//     for (i = 1; i <= n; i++) {

//         for (let j = 1; j <= n - 1; j++) {

//             diamond = diamond + ' '; //space before the stars

//         }
//         for (let k = 1; k <= (2 * i - 1); k++) {

//             diamond = diamond + '*'; //Stars on each line

//         }
//         diamond = diamond + '\n' //Move to the next line after each row

//     }

//     //Lower part of the diamond (after the middle line)
//     for (i = n - 1; i >= 1; i--) {

//         for (let j = 1; j <= n - 1; j++) {

//             diamond = diamond + ' '; //space before the stars

//         }
//         for (let k = 1; k <= (2 * i - 1); k++) {

//             diamond = diamond + '*'; //Stars on each line

//         }
//         diamond = diamond + '\n' //Move to the next line after each row

//     }

//     return diamond;
// }

// let result = shinyDiamondRug(3)

// console.log(result);





