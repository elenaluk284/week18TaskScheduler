const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const clearListBtn = document.getElementById('clearListBtn');
const taskList = document.getElementById('taskList');
const emptyMsg = document.querySelector('.emptyMsg');

addTaskBtn.addEventListener('click', addTaskToList);
clearListBtn.addEventListener('click', clearTaskList);

function addTaskToList() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
    alert('Введите задачу');
    return;
    }
    
    const taskItem = document.createElement('div');
    taskItem.className = 'task';
    taskItem.innerHTML = `
    <input type="checkbox">
    <p>${taskText}</p>
    `;

    taskList.appendChild(taskItem);
    taskInput.value = '';

    updateTaskListStatus();
    }

function clearTaskList() {
    taskList.innerHTML = '';
    updateTaskListStatus();
    }

function updateTaskListStatus() {
    const tasks = taskList.querySelectorAll('.task');
    if (tasks.length > 0) {
    emptyMsg.style.display = 'none';
    clearListBtn.disabled = false;
    } else {
    emptyMsg.style.display = 'block';
    clearListBtn.disabled = true;
    }
    }

taskList.addEventListener('click', function(e) {
    if (e.target.type === 'checkbox') {
    const task = e.target.nextElementSibling;
    if (e.target.checked) {
        task.style.textDecoration = 'line-through';
    } else {
        task.style.textDecoration = 'none';
    }
    }
});