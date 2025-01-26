document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Vérification des éléments
  if (!addButton || !taskInput || !taskList) {
    console.error('Un des éléments HTML (addButton, taskInput ou taskList) est introuvable.');
    return;
  }

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
      console.warn('Le champ de saisie est vide.');
      return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = () => {
      taskList.removeChild(li);
      console.log('Tâche supprimée :', taskText);
    };

    li.appendChild(removeButton);
    taskList.appendChild(li);

    taskInput.value = '';
    console.log('Tâche ajoutée :', taskText);
  }

  addButton.addEventListener('click', addTask);
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
