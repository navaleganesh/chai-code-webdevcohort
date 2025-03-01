// You just need to implement the convertTemperature function
function convertTemperature(value, scale) {
    // Convert temperature based on the scale ("C" to "F" or "F" to "C")
     // 0 C = 32 0 F
    // 32 F = 0 0 C
    // (0°C × 9/5) + 32 = 32°F

    switch(scale){

        case "C":
            return (value * (9/5)) + 32 + "ºF"
        case "F":
            return ((value - 32) * 5) / 9 + "ºC"
        default :
         return "Invalid scale"    
    }
  }
  
  console.log(convertTemperature(0, "C"));
  console.log(convertTemperature(32, "F"));