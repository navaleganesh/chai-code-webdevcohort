function writeLoveLetter(message, name) {
    // Add name at the start of the message and return updated array

    message.unshift(name)
    return message
}

let result = writeLoveLetter(["I","love","you"], "Ram")

console.log(result);
