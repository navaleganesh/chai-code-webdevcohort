// You just need to implement the countBoxes function
function countBoxes(totalBars, barsPerBox) {

    let count = 0;
    for (let i = totalBars; i >= barsPerBox;  i-=barsPerBox) { // 1, 2, 3, 4

        count++;

    }

    return count;
}

console.log(countBoxes(17, 5));
