function eatCandy(candyJar) {
    // Remove the last candy from the jar and return the updated jar

    candyJar.pop()
    return candyJar
}

let result = eatCandy(["Lollypop","Gum","Chocolate"])
console.log(result);
