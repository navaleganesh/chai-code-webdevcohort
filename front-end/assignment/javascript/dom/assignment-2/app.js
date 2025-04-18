/**
 * Write your challenge solution here
 */

let button = document.querySelectorAll('button');
let myHeading = document.getElementById('mainHeading');

function headingColorChange(bgcolor) {

    myHeading.style.color = bgcolor;
}

button.forEach((item) => {

    item.addEventListener('click', function (e) {

        let color = item.innerText;
        console.log(item);

        if (color === "Reset") {
            myHeading.style.color = ''
        } else {
            headingColorChange(color)
        }
    })
})