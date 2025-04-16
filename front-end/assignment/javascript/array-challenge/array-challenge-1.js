/* Create a function that adds a new guest list and returns the updated list
i/p: [] 
*/

function addGuest(guestList, newGuest) {
    // Add the newGuest to guestList and return the updated list

     guestList.push(newGuest)
     return guestList
}

let result = addGuest([],"Radhika");
console.log(result);