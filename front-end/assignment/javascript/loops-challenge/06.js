function totalWater(waterAmounts) {
    let totalAmount = 0;
    for (let i = 0; i < waterAmounts.length; i++) {
         
        totalAmount = totalAmount + waterAmounts[i]  
    }
    return totalAmount
}

console.log(totalWater([7,2,3]));
