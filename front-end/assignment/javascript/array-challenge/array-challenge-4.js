function removeStudent(bus) {
    // Remove the first student and return the updated bus list
    bus.shift()
    return bus;
}
let result = removeStudent(["Karna","Ram","Sita","Laxman","Hanuman"]);

console.log(result);

