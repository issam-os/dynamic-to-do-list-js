// Function to load tasks from Local Storage and display them in the list
function loadTasks() {
  const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  storedTasks.forEach(taskText => addTask(taskText, false)); // Avoid saving to Local Storage again
}

// Function to add a task
function addTask(taskText, save = true) {
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // If no taskText is passed, use the input value
  if (!taskText) {
    taskText = taskInput.value.trim();
  }

  // Check if the task is empty
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create a new list item
  const li = document.createElement('li');
  li.textContent = taskText;

  // Create a remove button
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.className = 'remove-btn';

  // Assign the onclick event to remove the task
  removeButton.onclick = () => {
    taskList.removeChild(li); // Remove the <li> from the list

    // Update Local Storage
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const updatedTasks = storedTasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  // Append the button to the <li> and the <li> to the list
  li.appendChild(removeButton);
  taskList.appendChild(li);

  // Clear the input field
  taskInput.value = '';

  // Save the task to Local Storage if needed
  if (save) {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
  }
}

// Wait for the DOM to load before attaching event listeners
document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');

  // Load tasks from Local Storage
  loadTasks();

  // Event listener for the "Add Task" button
  addButton.addEventListener('click', () => addTask());

  // Event listener for pressing "Enter" in the input field
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
