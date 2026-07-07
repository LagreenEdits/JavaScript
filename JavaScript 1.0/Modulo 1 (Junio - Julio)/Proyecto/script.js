// Selección de elementos
const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Función para agregar tarea
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Por favor escribe una tarea. 😞");
        return;
    }

    // Crear elemento li
    const li = document.createElement('li');
    li.textContent = taskText;

    // Botón completar
    const completeBtn = document.createElement('button');
    completeBtn.textContent = "✓";
    completeBtn.style.marginRight = "10px";
    completeBtn.style.width = "40px";
    completeBtn.style.height = "40px";
    completeBtn.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    // Botón eliminar
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "X";
    deleteBtn.style.scrollMarginLeft = "10px";
    deleteBtn.style.width = "40px";
    deleteBtn.style.height = "40px";
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(li);
    });

    li.prepend(completeBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Limpiar input
    taskInput.value = "";
}

// Evento click
addBtn.addEventListener('click', addTask);

// Evento Enter
taskInput.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});