function addVIP(queue, vipGuest) {
    // Add name at the start of the message and return updated array

    queue.unshift(vipGuest)
    return queue
}

let result = addVIP(["Ram","Sita","Laxman","Hanuman"], "Krishna")

console.log(result);
