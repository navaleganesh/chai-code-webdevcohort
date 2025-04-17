// You just need to implement the hasDiscount function
function hasDiscount(product) {
    // Check if product has discount property

    if(typeof product !== "object" || product.discount === "") {

        return false
    
    }
    return true;
}
   
    

 
  let result  = hasDiscount({name:"Laptop", price: 1000, discount:10});

  console.log(result);
  