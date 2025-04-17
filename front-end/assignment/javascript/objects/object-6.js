
function mergeObjects(obj1, obj2) {
    // Merge obj1 and obj2 into a single object
    if(typeof obj1 !== "object" || typeof obj2 !== "object"){
      return 'Invalide objects'
    }
    if(obj1 === ""){
      return obj2
    }
    if(obj2 === ""){
      return obj1
    }
    if(obj1=== "" && obj2 === ""){
      return {}
    }
  
    return {...obj1, ...obj2}
    
  }
  let result  = mergeObjects({}, {name:"Ram", age: 126});
  console.log(result);