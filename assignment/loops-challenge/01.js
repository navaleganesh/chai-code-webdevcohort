// You just need to implement the distributeGifts function
function distributeGifts(totalGifts, friends) {
    // write your code here
    let count = 0;
           
    for(let i=0; i < friends; i++){
            
      if(totalGifts > 0  ){
        count++;
        totalGifts--
      } 
    
    }
    return count
  }
  console.log(distributeGifts(2, 4));
  