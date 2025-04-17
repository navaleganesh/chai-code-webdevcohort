// You just need to implement the cleanObject function
function cleanObject(obj) {
    // Remove all properties with null or undefined values

    let cleanedObj = {};

    for(let key in obj){
        if(obj[key]!==null && obj[key]!==undefined){
            cleanedObj[key] = obj[key]
        }
    }
   return cleanedObj;
    
    
  }


  let result  = cleanObject({name:"Ganesh", job:undefined, age:25, temp:null });
  console.log(result);