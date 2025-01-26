document.addEventListener('DOMContentLoaded', () => {
    // Sélection des éléments DOM
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Fonction pour ajouter une tâche
    function addTask() {
        const taskText = taskInput.value.trim();

        // Vérifier si le champ est vide
        if (taskText === '') {
            alert('Veuillez entrer une tâche.');
            return;
        }

        // Créer l'élément <li> et ajouter le texte
        const li = document.createElement('li');
        li.textContent = taskText;

        // Créer le bouton "Remove"
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Ajouter un événement pour supprimer la tâche
        removeButton.onclick = () => {
            taskList.removeChild(li);
        };

        // Ajouter le bouton au <li> et le <li> à la liste
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Effacer le champ de saisie
        taskInput.value = '';
    }

    // Ajouter un écouteur d'événement au bouton
    addButton.addEventListener('click', addTask);

    // Permettre l'ajout avec la touche "Enter"
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
