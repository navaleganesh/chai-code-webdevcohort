const user = {

    name : "hitesh",
    age : 40,
    password : '123'
}


// const proxyUser = new Proxy(user, {
        
//     get(target, prop){
//          console.log(target); //o/p: { name: 'hitesh', age: 40, password: '123' }
//          console.log(prop); // o/p: 'password'

//         return target[prop]
//     },

//     set(target, prop, value){}

// })

// console.log(proxyUser.password); //o/p '123'



// const proxyUser = new Proxy(user, {
        
//     get(target, prop){
//          console.log(target); //o/p: { name: 'hitesh', age: 40, password: '123' }
//          console.log(prop); // o/p: 'password'
//         if(prop === 'password')        {
//             throw new Error('Access Denied') //o/p Access Denied
//         }
//         return target[prop]
//     },

//     set(target, prop, value){}

// })

// console.log(proxyUser.password); //o/p Access Denied


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr[-1]); // o/p: undefined


function negativeIndex(arr){
   return new Proxy(arr, {
    get(target, prop){
        const index = Number(prop);
        console.log(index); // o/p -1
        if(index < 0){
            return target[target.length + index]
        }
        return target[index]
    },
    set(target, prop, value){

        const index = Number(prop)
        if(index < 0){
            target[target.length + index] = value
        } else {
            target[index] = value
        }
        return true
    }
   })
}

let newArr = negativeIndex(arr)

console.log(arr[-1]) // o/p: undefined
console.log(newArr[-1]); // o/p: 10
newArr[-1] = 22;
console.log(newArr); //o/p: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 22 ]
console.log(arr); //o/p: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 22 ]

