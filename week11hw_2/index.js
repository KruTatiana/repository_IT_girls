const button = document.getElementById('greenButton');
const tasksInput = document.getElementById('tasksInput');
const taskList = document.querySelector('.list')

function createTask() {
        const newTask = document.createElement('li');
        newTask.textContent = tasksInput.value;
        taskList.append(newTask);
        tasksInput.value = '';
}

function checkTask(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('completed'); 
    }
};

button.addEventListener('click', createTask);
taskList.addEventListener('click', checkTask);
