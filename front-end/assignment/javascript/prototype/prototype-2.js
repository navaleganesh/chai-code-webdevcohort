/* You are designing a simple robot system. Each robot has name and a batteryLevel. The robot should have a method charge() that increase the battery level by 20, but it cannot exceed 100. */

function Robot(name, batteryLevel) {
    // Initialize name and batteryLevel properties

    this.name = name;
    this.batteryLevel = batteryLevel;
}

Robot.prototype.charge = function(){

    this.batteryLevel = Math.min(this.batteryLevel + 20,  100);
    console.log(`${this.name} charged to ${this.batteryLevel}%`);
}

// Create an instance
let Robot1 = new Robot("Leo", 40);

Robot1.charge(); // Output: RoboX charged to 80%
Robot1.charge(); // Output: RoboX charged to 100%
Robot1.charge(); // Output: RoboX charged to 100% (stays capped)

 