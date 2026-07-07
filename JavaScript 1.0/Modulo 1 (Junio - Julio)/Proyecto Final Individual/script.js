// Obtiene el input donde el usuario escribe la tarea usando su id
const taskInput = document.getElementById("taskInput");

// Obtiene el botón "Agregar" usando su id
const addTaskBtn = document.getElementById("addTaskBtn");

// Obtiene la lista (ul) donde se van a insertar las tareas
const taskList = document.getElementById("taskList");

// Asocia el evento click del botón "Agregar" a la función addTask
addTaskBtn.addEventListener("click", addTask);

// Función principal que se ejecuta cuando se agrega una tarea
function addTask() {

    // Obtiene el texto del input y elimina espacios al inicio y al final
    const taskText = taskInput.value.trim();

    // Validación: si el campo está vacío, se muestra una alerta
    // y se detiene la ejecución de la función
    if (taskText === "") {
        alert("Campo vacío. Por favor ingrese una tarea.");
        return;
    }

    // Crea un elemento <li> que representará una tarea
    const li = document.createElement("li");

    // ===== TEXTO DE LA TAREA =====

    // Crea un <span> para mostrar el texto de la tarea
    const span = document.createElement("span");

    // Asigna el texto ingresado por el usuario al span
    span.textContent = taskText;

    // Agrega una clase CSS para aplicar estilos al texto
    span.classList.add("task-text");

    // ===== CONTENEDOR DE BOTONES =====

    // Crea un <div> que contendrá los botones de acción
    const buttonsDiv = document.createElement("div");

    // Agrega una clase para alinear y estilizar los botones
    buttonsDiv.classList.add("task-buttons");

    // ===== BOTÓN COMPLETAR =====

    // Crea un <span> que actuará como botón para completar la tarea
    const completeBtn = document.createElement("span");

    // Asigna el ícono de check como contenido del botón
    completeBtn.textContent = "✅";

    // Agrega una clase CSS específica para el botón completar
    completeBtn.classList.add("complete-btn");

    // Evento click: alterna la clase "completed" en el texto
    // Esto permite tachar o destachar la tarea
    completeBtn.addEventListener("click", () => {
        span.classList.toggle("completed");
    });

    // ===== BOTÓN ELIMINAR =====

    // Crea un <span> que actuará como botón para eliminar la tarea
    const deleteBtn = document.createElement("span");

    // Asigna el ícono de cruz como contenido del botón
    deleteBtn.textContent = "❌";

    // Agrega una clase CSS específica para el botón eliminar
    deleteBtn.classList.add("delete-btn");

    // Evento click: elimina completamente el elemento <li> del DOM
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    // ===== ENSAMBLADO DE LA TAREA =====

    // Agrega el botón completar al contenedor de botones
    buttonsDiv.appendChild(completeBtn);

    // Agrega el botón eliminar al contenedor de botones
    buttonsDiv.appendChild(deleteBtn);

    // Agrega el texto de la tarea al <li>
    li.appendChild(span);

    // Agrega el contenedor de botones al <li>
    li.appendChild(buttonsDiv);

    // Agrega la tarea completa a la lista de tareas (ul)
    taskList.appendChild(li);

    // Limpia el input después de agregar la tarea
    taskInput.value = "";
}