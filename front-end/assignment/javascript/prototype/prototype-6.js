
function BankAccount(balance) {
    // Initialize balance and transactions properties

    this.balance = balance;
    this.transaction = [];
}

// Define deposit method on BankAccount's prototype
BankAccount.prototype.deposite = function(amount){
    this.balance += amount;
    this.transaction.push(`Deposited ${amount}`);

}
// Define withdraw method on BankAccount's prototype
BankAccount.prototype.withdraw = function(amount){

        if(this.balance - amount < 0 ){

            this.transaction.push("Insufficient balance");
        } else {
            this.balance -= amount;
            this.transaction.push(`Withdrew ${amount}`);
        }

}

// Define getTransactionHistory method on BankAccount's prototype
BankAccount.prototype.getTransactionHistory = function(){

     return this.transaction   
}



let account  = new BankAccount(100);

account.deposite(50);
account.withdraw(30);
account.withdraw(200)
console.log(account.getTransactionHistory());
