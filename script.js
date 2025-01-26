// Function to add a task
function addTask() {
  // Retrieve and trim the input value
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');
  const taskText = taskInput.value.trim();

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
  };

  // Append the button to the <li> and the <li> to the list
  li.appendChild(removeButton);
  taskList.appendChild(li);

  // Clear the input field
  taskInput.value = '';
}

// Wait for the DOM to load before attaching event listeners
document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');

  // Event listener for the "Add Task" button
  addButton.addEventListener('click', addTask);

  // Event listener for pressing "Enter" in the input field
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
