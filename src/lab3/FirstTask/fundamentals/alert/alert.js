document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const taskCount = document.getElementById("taskCount");

  function updateTaskCount() {
    const totalTasks = taskList.children.length;
    taskCount.textContent = `Всего задач: ${totalTasks}`;
  }

  function addTask() {
    const taskText = taskInput.value.trim();

    // Проверяем, содержит ли ввод только цифры
    if (!/^\d+$/.test(taskText)) {
      alert("Можно вводить только цифры!");
      taskInput.value = "";
      return;
    }

    const li = document.createElement("li");

    const numspan = document.createElement("span");
    numspan.classList.add("task-number");

    const taskContent = document.createElement("div");
    taskContent.classList.add("task-content");

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    taskContent.appendChild(numspan);
    taskContent.appendChild(taskSpan);

    const taskAction = document.createElement("div");
    taskAction.classList.add("task-action");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        taskContent.classList.add("completed");
        deleteBTN.classList.add("completed");
      } else {
        taskContent.classList.remove("completed");
        deleteBTN.classList.remove("completed");
      }
    });

    const deleteBTN = document.createElement("button");
    deleteBTN.textContent = "Delete";
    deleteBTN.classList.add("delete-btn");
    deleteBTN.addEventListener("click", () => {
      li.remove();
      updateTaskCount();
    });

    taskAction.appendChild(deleteBTN);
    taskAction.appendChild(checkbox);
    li.appendChild(taskContent);
    li.appendChild(taskAction);

    taskList.prepend(li);
    taskInput.value = "";

    updateTaskCount();
  }

  document.querySelector("button").addEventListener("click", addTask);
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });

  updateTaskCount();
});
