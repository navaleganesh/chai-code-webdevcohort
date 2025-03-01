// You just need to implement the findLargest function
function findLargest(a, b, c) {
    // Return the largest among a, b, and c
    if(a >= b && a >= c){
        return a
      } else if(b >= a && b >= c){
          return b
      } else if(c >= a && c >= b){
          return c
      }
  }
  console.log(findLargest(10,50,41));
  