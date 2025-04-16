function BankAccount(accountNumber, holderName, balance) {
    // Initialize accountNumber, holderName, and balance properties
    this.accountNumber = accountNumber
    this.holderName = holderName
    this.balance = balance
}

// Define deposit method on BankAccount's prototype
BankAccount.prototype.deposit = function(amount){
      
  return this.balance += amount
    
    
}
// Define withdraw method on BankAccount's prototype
BankAccount.prototype.withdraw = function(amount){
       
    if(this.balance >= amount) {
        this.balance -= amount;
    }
}
// Define transfer method on BankAccount's prototype
BankAccount.prototype.transfer = function(amount, targetAccount){
       
    if(this.balance >= amount) {
        this.balance -= amount;
        targetAccount.deposit(amount)
    }
}

let person1  = new BankAccount(101, "Ram", 1000)
let person2  = new BankAccount(102, "Ram", 2000)
 




person1.transfer(500, person2)
 
console.log(`Person 1 Balance: ₹${person1.balance}`); 
console.log(`Person 2 Balance: ₹${person2.balance}`);
