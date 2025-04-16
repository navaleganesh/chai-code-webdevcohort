function filterHealthy(foodList) {
    // Remove unhealthy food and return updated list

   return  foodList.filter((item)=>{

        return item !== "Burger"
         
    })
    
}

let result = filterHealthy(["Salad","Burger","Apple","Pizza","Banana"]);
console.log(result);



