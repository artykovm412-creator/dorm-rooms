const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");


// Добавление задачи
function addTask() {

    const taskText = taskInput.value.trim();

    // Если поле пустое
    if (taskText === "") {
        return;
    }

    // Создаём элемент списка
    const task = document.createElement("li");
    task.classList.add("task");

    // Создаём текст задачи
    const text = document.createElement("span");
    text.classList.add("task-text");
    text.textContent = taskText;

    // Нажатие на текст = выполнить задачу
    text.addEventListener("click", function () {
        text.classList.toggle("completed");
    });

    // Кнопка удаления
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Удалить";

    // Удаление задачи
    deleteButton.addEventListener("click", function () {
        task.remove();
        updateEmptyMessage();
    });

    // Добавляем элементы в задачу
    task.appendChild(text);
    task.appendChild(deleteButton);

    // Добавляем задачу в список
    taskList.appendChild(task);

    // Очищаем поле
    taskInput.value = "";

    // Обновляем сообщение
    updateEmptyMessage();
}


// Проверяем, есть ли задачи
function updateEmptyMessage() {

    if (taskList.children.length === 0) {
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
    }
}


// Кнопка "Добавить"
addButton.addEventListener("click", addTask);


// Добавление задачи клавишей Enter
taskInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        addTask();
    }

});


// При запуске сайта показываем сообщение
updateEmptyMessage();