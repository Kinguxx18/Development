const taskInput = document.getElementById('task-input');

const newTaskButton = document.getElementById('new-task');
newTaskButton.addEventListener('click', () => {
    if(taskInput.value.trim() !== ''){
        newTask(taskInput);
        taskInput.value = '';
    }
});

function newTask(taskInput){

    const taskList = document.querySelector('.task-list');

    // Crear etiqueta li
    const task = document.createElement('li');
    task.classList.add('task');

    // Crear span
    const taskContent = document.createElement('span');
    taskContent.innerText = taskInput.value;
    taskContent.addEventListener('click', () => {
        task.classList.toggle('completed');
    });
    task.appendChild(taskContent);

    //Crear botón edit
    const editButton = document.createElement('button');
    editButton.textContent = '✏️';
    editButton.classList.add('edit-btn');
    editButton.addEventListener('click', () => {
        currentTask = task;
        const taskText = task.querySelector('span');
        editInput.value = taskText.innerText;
        modal.classList.remove('hidden');
    });
    
    task.appendChild(editButton);

    // Crear botón eliminar
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '🗑️';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', () => {
        deleteTask(task);
    });
    task.appendChild(deleteButton);

    // Agregar tarea a la lista
    taskList.appendChild(task);

    // Limpiar input
    taskInput.value = '';
}

//Si se presiona el boton de edit, arrow function para editar el contenido por medio de un modal
const modal = document.querySelector('.modal');
const editInput = document.querySelector('.edit-input');
const confirmBtn = document.querySelector('.confirm-btn');
const cancelBtn = document.querySelector('.cancel-btn');
let currentTask = null;

const editButtons = document.querySelectorAll('.edit-btn');

editButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        
        currentTask = e.target.closest('.task');
        const taskText = currentTask.querySelector('span');
        editInput.value = taskText.innerText;
        
        // mostrar modal
        modal.classList.remove('hidden');
    });
});

confirmBtn.addEventListener('click', () => {
    if(currentTask){
        const taskText = currentTask.querySelector('span');
        taskText.innerText = editInput.value;
    }
    modal.classList.add('hidden');
});

cancelBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
});



//Si presionan el boton de la x, arrow function para eliminar la tarea
function deleteTask(task){
    const taskList = document.querySelectorAll('.task-list');
    taskList.forEach(list => list.removeChild(task));
}

const deleteButtons = document.querySelectorAll('.delete-btn');
deleteButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const task = e.target.parentElement;
        deleteTask(task);
    });
});

