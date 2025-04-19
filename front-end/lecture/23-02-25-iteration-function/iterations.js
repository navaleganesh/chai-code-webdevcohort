/* Show the category with it's adding amount e.g. {Food: 30, Utilities:150  */
let expenses = [
    { description: "Groceroies", amount: 50, category: "Food" },
    { description: "Electricity Bill", amount: 100, category: "Utilities" },
    { description: "Dinner", amount: 30, category: "Food" },
    { description: "Internet Bill", amount: 50, category: "Utilities" },
]


let expenseReport = expenses.reduce((accum, expense)=>{
    // accum[expense.category] += expense.amount; //This is the first way 
     accum[expense.category] = (accum[expense.category] || 0) + expense.amount;  // This is the second way but dynamically right
     console.log(accum); //o/p: { Food: 50, Utilities: 0 } { Food: 50, Utilities: 100 } { Food: 80, Utilities: 100 } { Food: 80, Utilities: 150 }
     
     return accum;
}, {Food:0, Utilities:0})

console.log("Expense Report",expenseReport); //o/p: [ 'Expense Report', { Food: 80, Utilities: 150 } ]



/* Show the Uncompleted task with sequence */
let tasks = [
    { description: "Write Report", completed:false, priority:2},
    { description: "Send Email", completed:true, priority:3},
    { description: "Prepare presentation", completed:false, priority:1}
]


let result  = tasks.filter((item)=> !item.completed )
                   .sort((a,b)=> a.priority - b.priority)

console.log(result);



/* Average movie */
let movieRatings = [

    {title:"Movie A", ratings: [4, 5, 3]},
    {title:"Movie B", ratings: [5, 5, 4]},
    {title:"Movie C", ratings: [3, 4, 2]},
]

let avg = movieRatings.map((movie)=> {
     let total = movie.ratings.reduce((accum, item)=> (accum + item), 0)
     let avg = total / movie.ratings.length;

     return {"title": movie.title, "ratings": avg.toFixed(2)}
})

console.log(avg);
