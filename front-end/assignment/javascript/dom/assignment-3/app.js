/**
 * Write your challenge solution here
 */


// let nameInput = document.getElementById('nameInput');
// let jobInput = document.getElementById('jobInput');
// let ageInput = document.getElementById('ageInput');
// let bioInput = document.getElementById('bioInput');

 

// nameInput.addEventListener('input', function(e){

//     nameDisplay.innerText = e.target.value;
//     jobInput.innerText = e.target.value;
//     ageInput.innerText = e.target.value;
//     bioInput.innerText = e.target.value;

// })



['name', 'job', 'age', 'bio'].forEach((field) => {
    const input = document.getElementById(`${field}Input`);
    const display = document.getElementById(`${field}Display`);

    input.addEventListener('input', (e) => {
        display.innerText = `${e.target.value}`;
    });
});