/**
 * Write your challenge solution here
 */

const toggleButton = document.getElementById('toggleButton');
const bulb = document.getElementById('bulb');
let statuss = document.getElementById('status');

let bulbStatus = false;


toggleButton.addEventListener('click', toggleFun);

function toggleFun() {
 
    bulbStatus = !bulbStatus;
    console.log("Bulb status is", bulbStatus);
    
        
    if( bulbStatus ){
        bulb.classList.remove('off')
        toggleButton.innerText = 'Turn Off'
        document.body.classList.add('dark-mode')
        statuss.innerText = "Status: On"
    } else {
        bulb.classList.add('off')
        toggleButton.innerText = 'Turn On'
        document.body.classList.remove('dark-mode')
        statuss.innerText = "Status: Off"
    }
}