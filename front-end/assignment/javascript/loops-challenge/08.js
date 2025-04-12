// You just need to implement the totalPrice function
function totalPrice(prices) {
  
    let totalCost = 0;
    for (let i = 0; i < prices.length; i++) {
         
        totalCost = totalCost + prices[i]  
    }
    return totalCost

}
console.log(totalPrice([1.5, 2.3, 3.7]));

