function prepareChai(type) {

    if (type === "") {
        console.log("Please enter value");

    } else if (type.toLowerCase() === "masala chai") {
        console.log("Adding spices to the chai");
    } else {
        console.log("Repairing regular chai");

    }
}

// prepareChai("")
// prepareChai("Masala Chai")
prepareChai("Ginger Chai")



/*
Ek online store mein, agar customer ka total bill amount 1000 se zyada hai, toh 10% discount milta hai. Nahi toh, full amount pay karna padta hai.
*/


function calculateTotal(amt){
    // convert to number
     let amount = Number(amt)
    // if(amount > 1000){
    //    return (amount - ((amount /100) * 10))
    // } 
    // return amount

    return amount > 1000 ? amount * 0.9 : amount
  
}

let finalBill = calculateTotal("1100")
console.log(`Your bill is ${finalBill}`);




function checktruthyValue(value){
    if(value){
        console.log("Truthy");
        
    } else {
        console.log("Falsy");
        
    }
}

checktruthyValue(1)
checktruthyValue(0)
checktruthyValue("ganesh")
checktruthyValue("")
checktruthyValue([])
checktruthyValue([1, 2, 3])


function login(username, password, loginIp){

    if(username === "admin" && (password === "1234" || loginIp === "127")){
        console.log("Login successful");
        
    } else {
        console.log("Invalid credentials");
        
    }
}