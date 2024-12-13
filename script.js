// Select elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add task function
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const listItem = document.createElement('li');
  listItem.textContent = taskText;

  // Mark task as completed
  listItem.addEventListener('click', () => {
    listItem.classList.toggle('completed');
  });

  // Add delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(listItem);
  });
  listItem.appendChild(deleteBtn);

  taskList.appendChild(listItem);
  taskInput.value = '';
}

// Event listener for add button
addTaskBtn.addEventListener('click', addTask);

// Allow pressing Enter to add task
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTask();
});
