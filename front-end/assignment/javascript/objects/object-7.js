function objectToArray(obj) {
    // Convert the object into an array of key-value pairs
    if(typeof obj !== 'object'){
      return 'Not a object'
    }
    return Object.entries(obj)
 
  }
  let result  = objectToArray({username:"Ganesh", password: 123});
  console.log(result);
  