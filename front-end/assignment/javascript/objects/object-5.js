function countProperties(user) {
    // Return the number of properties in user
   if(typeof user !== 'object'){
     return 'Not a object'
   }
   return Object.keys(user).length

 }
 let result  = countProperties({username:"Ganesh", password: 123});
 console.log(result);
 