// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Save to localStorage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Show tasks on screen
function showTasks() {
    const ul = document.getElementById("taskList");
    ul.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        // Task text
        const span = document.createElement("span");
        span.textContent = task;

        // Button group
        const btnGroup = document.createElement("div");
        btnGroup.className = "btn-group";

        // Edit button
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.onclick = () => editTask(index);

        // Delete button
        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.onclick = () => deleteTask(index);

        btnGroup.appendChild(editBtn);
        btnGroup.appendChild(delBtn);

        li.appendChild(span);
        li.appendChild(btnGroup);
        ul.appendChild(li);
    });
}

// Add task
document.getElementById("addBtn").addEventListener("click", () => {
    const input = document.getElementById("taskInput");
    const newTask = input.value.trim();

    if (newTask === "") return alert("Please enter a task!");

    tasks.push(newTask);
    saveTasks();
    showTasks();

    input.value = "";
});

// Edit task
function editTask(index) {
    const updated = prompt("Edit your task:", tasks[index]);
    if (updated && updated.trim() !== "") {
        tasks[index] = updated.trim();
        saveTasks();
        showTasks();
    }
}

// Delete task
function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    showTasks();
}

// Display tasks on page load
showTasks();
