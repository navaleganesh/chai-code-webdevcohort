// You just need to implement the workingDays function
let days = ["Monday","Tuesday","Saturday"]

function workingDays(days) {
    // your code here
    
    return days.filter((item, index) => {
    
        if(item !== "Sunday" && item !== "Saturday"){
            return item
        } 
        
     }
    )
    
  }


const filterDay = workingDays(days)
console.log(filterDay.length);
