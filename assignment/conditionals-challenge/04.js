// You just need to implement the calculateGrade function
function calculateGrade(marks) {
    // Return grade based on the marks
  
    if(marks >= 90){
      return "A"
    } else if(marks >= 80 && marks <= 89){
      return "B"
    } else if(marks >= 70 && marks <= 79){
      return "C"
    } else if(marks >= 60 && marks <= 69 ){
      return "D"
    } else if(marks < 60){
      return "F"
    }
  }
  console.log(calculateGrade(90));
  