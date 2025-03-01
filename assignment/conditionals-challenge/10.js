// You just need to implement the calculator function
function calculator(num1, num2, operator) {
    // Perform basic arithmetic operations using switch case
    switch(operator){
    
        case '+':
          return num1 + num2
          break;
        case '-':
          return num1 - num2
          break;
        case '*':
          return num1 * num2
          break;
        case '/':
          if(num2 === 0){
              return "Cannot divide by zero"
          } else {
              return num1 / num2
          }
          break;  
        default:
          return "Invalid operator"      
      }
  }
 