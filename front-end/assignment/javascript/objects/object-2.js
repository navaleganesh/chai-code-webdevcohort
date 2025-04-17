function addCarColor(car, color) {
    // Add color property to the car object
    if(typeof car !== "object" || typeof color !== "string" || color.length === 0){
        return "Invalid color";
    }
    car.color = color
    return car;
  }

let result  = addCarColor({brand:"Toyota", model:"Corolla"}, "red")
console.log(result);
