const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const filterSelect = document.getElementById('filterSelect');

addBtn.addEventListener('click', addTask);
filterSelect.addEventListener('change', filterTasks);

function addTask() {
  const taskText = taskInput.value;
  if (taskText.trim() !== '') {
    const newTask = document.createElement('li');
    newTask.innerHTML = `<span>${taskText}</span>
                             <button class="delete-btn">Delete</button>
                             <button class="complete-btn">Complete</button>`;
    taskList.appendChild(newTask);
    taskInput.value = '';
  }
}

function filterTasks() {
  const tasks = taskList.querySelectorAll('li');
  const selectedValue = filterSelect.value;
  tasks.forEach(task => {
    switch (selectedValue) {
      case 'all':
        task.style.display = 'block';
        break;
      case 'todo':
        if (!task.querySelector('span').style.textDecoration.includes('line-through')) {
          task.style.display = 'block';
        } else {
          task.style.display = 'none';
        }
        break;
      case 'completed':
        if (task.querySelector('span').style.textDecoration.includes('line-through')) {
          task.style.display = 'block';
        } else {
          task.style.display = 'none';
        }
        break;
      default:
        task.style.display = 'block';
    }
  });
}