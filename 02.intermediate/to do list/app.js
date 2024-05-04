  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  let tasks = [];
  document.addEventListener("DOMContentLoaded", function () {
    taskInput.focus();
  });
  function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
      const li = document.createElement('li');
      li.className = task.completed ? 'completed' : '';
      li.innerHTML = `
              <span>${task.text}</span>
              <button onclick="toggleComplete(${index})">✔</button>
              <button onclick="deleteTask(${index})">✘</button>
          `;
      taskList.appendChild(li);
    });
  }

  function addTask() {
    const taskText = taskInput.value;
    if (taskText !== '') {
      tasks.push({ text: taskText, completed: false });
      taskInput.value = '';
      renderTasks();
    }
  }

  function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
  }

  function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
  }

  function filterTasks(type) {
    if (type === 'completed') {
      const completedTasks = tasks.filter(task => task.completed);
      taskList.innerHTML = '';
      completedTasks.forEach(task => {
        const li = document.createElement('li');
        li.className = 'completed';
        li.innerText = task.text;
        taskList.appendChild(li);
      });
    } else if (type === 'incomplete') {
      const incompleteTasks = tasks.filter(task => !task.completed);
      taskList.innerHTML = '';
      incompleteTasks.forEach(task => {
        const li = document.createElement('li');
        li.innerText = task.text;
        taskList.appendChild(li);
      });
    } else if (type === 'all') {
      renderTasks();
    }
  }

  function clearCompleted() {
    tasks = tasks.filter(task => !task.completed);
    renderTasks();
  } 