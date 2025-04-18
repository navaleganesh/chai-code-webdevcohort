
const taskInput = document.querySelector('#taskInput');

const addButton = document.querySelector('#addButton');
const taskList = document.querySelector('#taskList');
const emptyList = document.querySelector('.empty-list');
const totalTasks = document.querySelector('#totalTasks');
const completedTasks = document.querySelector('#completedTasks');


let totalTask = 0;
let completed = 0;

taskInput.addEventListener('input', function(e){

    if (taskInput.value.length === 1) {
        err.textContent =  ""
       
    } 
})

addButton.addEventListener('click', function (e) {

   
    if (taskInput.value === '') {
        err.textContent =  "Please enter minimum one character"
        e.preventDefault();
        
    } else {

        totalTasks.innerHTML = `Total tasks: ${++totalTask}`
    }
    addNewList();
    taskInput.value = '';


}, false)

function addNewList(){
    
    
    if (taskInput.value != '') {

        const randomId1 = Math.floor(Math.random() * 100) + 1;
        const randomId2 = Math.floor(Math.random() * 1000) + 1;


        const newLi = document.createElement('li');
        taskList.appendChild(newLi);
        newLi.setAttribute('class', 'inner-task-input');
        newLi.setAttribute('id', randomId1)
        // emptyList.replaceWith(newLi);

        emptyList.classList.add('d-none');
        emptyList.classList.remove('d-block');



        const leftDiv = document.createElement('div')
        const spanDiv = leftDiv.appendChild(document.createElement('span'))
        spanDiv.appendChild(document.createTextNode(taskInput.value));
        newLi.appendChild(leftDiv);
        leftDiv.setAttribute('class', "textDiv")

        const checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox')
        checkBox.setAttribute('name', 'check')
        checkBox.setAttribute('class', 'listCheck')
        checkBox.setAttribute('id', `my-${randomId1}`)
        leftDiv.appendChild(checkBox)

        const checker = document.getElementById(`my-${randomId1}`);
        console.log(checker);

        checker.addEventListener('change', function () {
            if (checker.checked) {
                checker.previousElementSibling.style.textDecoration = "line-through"
                completedTasks.innerHTML = `Completed: ${++completed}`
            } else {
               checker.previousElementSibling.style.textDecoration = "none"
               completedTasks.innerHTML = `Completed: ${--completed}`
            }
        });


        const deleteBtn = document.createElement('button');
        deleteBtn.appendChild(document.createTextNode('Delete'));
        newLi.appendChild(deleteBtn);
        deleteBtn.setAttribute('class', 'btn');
        deleteBtn.setAttribute('id', `delId-${randomId2}`);

        const deleteDiv = document.getElementById(`delId-${randomId2}`);

        deleteDiv.addEventListener('click', function(){

             if(totalTask <= 1){
                emptyList.classList.add('d-block');
                emptyList.classList.remove('d-none');
               }

                deleteDiv.parentElement.remove();
                totalTasks.innerHTML = `Total tasks: ${--totalTask}`
                
               
        })

    }
}

