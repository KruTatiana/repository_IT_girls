const buttonAdd = document.querySelector('.form_button');
const emptyText = document.querySelector('.tasks_empty');
const list = document.querySelector('.tasks_list');
const buttonClean = document.querySelector('.tasks_button');


function getSavedList() {
  let newArray = window.localStorage.getItem("tasksArray");
  newArray = newArray ? JSON.parse(newArray) : [];
  newArray.forEach(function(item) {
  const newTask = document.createElement('li');
  newTask.textContent = item;
  list.append(newTask);
if (item) {
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type','checkbox');
  checkbox.setAttribute('class','tasks_checkbox');
  newTask.append(checkbox);
}
})
if (newArray.length>0) {
  emptyText.style.display = 'none';
  buttonClean.removeAttribute('disabled');
}
}
getSavedList();

function getTaskList() {
  const input = document.getElementById('form_task');
  let x = input.value;
  if(x.trim() !== ''){
    let tasksArray = window.localStorage.getItem("tasksArray");
    tasksArray = tasksArray ? JSON.parse(tasksArray) : [];
    tasksArray.push(input.value);
    window.localStorage.setItem("tasksArray",JSON.stringify(tasksArray));
  }
  list.innerHTML = '';
  getSavedList();
  input.value = '';
}

buttonAdd.addEventListener('click', getTaskList);
buttonClean.addEventListener('click', () => {
  list.innerHTML = '';
  window.localStorage.clear();
  emptyText.style.display = 'block';
  buttonClean.setAttribute('disabled','disabled');
})