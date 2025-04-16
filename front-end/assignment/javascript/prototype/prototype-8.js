function Library() {
    // Initialize books property

    this.books = []
}

// Define addBook method on Library's prototype
Library.prototype.addBook = function(book){

    this.books.push(book)

}

// Define findBook method on Library's prototype

Library.prototype.findBook = function(title){

    if(this.books.includes(title)){
        return "Book found"
    } else {
        return "Book not found"
    }
  
    
}

let result  = new Library();

result.addBook("Chava")
result.addBook("Shreemanyogi")
result.addBook("Mrutunjay")
result.addBook("Rich Dad Poor Dad")
result.addBook("Bermuda Traingle")

console.log(result.findBook("Chava"));
