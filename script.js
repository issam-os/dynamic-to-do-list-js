// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const taskInput = document.getElementById('task-input');
    const addButton = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get input value and trim whitespace

        // Check if input is empty
        if (taskText === "") {
            alert("Please enter a task."); // Alert user
            return;
        }

        // Create a new list item (li) element
        const listItem = document.createElement('li');
        listItem.textContent = taskText; // Set the task text

        // Create a Remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove"; // Set button text
        removeButton.className = 'remove-btn'; // Add class for styling

        // Assign onclick event to remove the task
        removeButton.onclick = function () {
            taskList.removeChild(listItem); // Remove the task from the list
        };

        // Append the button to the list item
        listItem.appendChild(removeButton);

        // Add the task (list item) to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = "";
    }

    // Event listener for the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Event listener for pressing "Enter" in the input field
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
