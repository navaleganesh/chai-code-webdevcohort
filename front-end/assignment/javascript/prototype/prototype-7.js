function Employee(name, position, salary) {
    // Initialize name, position, and salary properties

    this.name = name
    this.position = position
    this.salary = salary
  
}

// Define applyBonus method on Employee's prototype
Employee.prototype.applyBonus = function(bonus){

  return this.salary = Math.round(this.salary) + Math.round(((this.salary / 100) * bonus));
 
}

let result  = new Employee("Ganesh", "Front end", "50000")

console.log(`Incremented salary is ${result.applyBonus(10)}`);
