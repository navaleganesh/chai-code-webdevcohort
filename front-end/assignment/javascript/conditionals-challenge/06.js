// You just need to implement the trafficLightAction function
function trafficLightAction(color) {
    // Return "Stop", "Slow Down", or "Go" based on the traffic light color
  
    switch(color.toLowerCase()){
      case "red":
         return "Stop"
         break;
      case "yellow":
        return "Slow Down"
        break;
        case "green":
        return "Go"
        break;
        default:
        return "Invalid Color"   
    }
  }
  console.log(trafficLightAction("red"));
  