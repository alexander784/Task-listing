document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.ariaValueMax.trim();

        if(taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-button">Delete</button>
            `;

            taskList.appendChild(li);

            taskInput.value = "";

            li.querySelector(".delete-button").addEventListener("click", function () {
                taskList.removeChild(li);
            });


        }
    })

});
