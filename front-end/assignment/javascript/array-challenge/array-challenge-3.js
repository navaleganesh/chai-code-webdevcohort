function addPuppy(queue, puppyName) {
    // Add puppyName at the beginning of queue and return updated queue

    queue.unshift(puppyName)
    return queue
}
let result = addPuppy(["Tom", "Jerry","Spike"], "Max")

console.log(result);
