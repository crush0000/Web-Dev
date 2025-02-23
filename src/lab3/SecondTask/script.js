// document.addEventListener("DOMContentLoaded", () => {
//   const taskInput = document.getElementById("taskInput");
//   const taskList = document.getElementById("taskList");
//
//   function addTask() {
//     const taskText = taskInput.value;
//     if (taskText === "") return;
//
//
//     const li = document.createElement("li");
//
//     const numspan = document.createElement("span");
//     numspan.classList.add("task-number");
//
//     const taskContent = document.createElement("div");
//     taskContent.classList.add("task-content");
//
//     const taskSpan = document.createElement("span");
//     taskSpan.textContent = taskText;
//
//     taskContent.appendChild(numspan);
//     taskContent.appendChild(taskSpan);
//
//     const taskAction = document.createElement("div");
//     taskAction.classList.add("task-action");
//
//     const checkbox = document.createElement("input");
//     checkbox.type = "checkbox";
//     checkbox.classList.add("checkbox");
//     checkbox.addEventListener("change", () => {
//       if (checkbox.checked) {
//         li.classList.add("completed");
//         deleteBTN.classList.add("completed");
//       } else {
//         li.classList.remove("completed");
//         deleteBTN.classList.remove("completed");
//       }
//     })
//     const deleteBTN = document.createElement("button");
//     deleteBTN.textContent = "DELETE";
//     deleteBTN.classList.add("delete-btn");
//     deleteBTN.addEventListener("click", () => {
//       taskList.removeChild(li)
//     })
//
//
//     taskAction.appendChild(deleteBTN);
//     taskAction.appendChild(checkbox);
//     li.appendChild(taskContent);
//     li.appendChild(taskAction);
//
//     taskList.appendChild(li);
//   }
//   document.querySelector("button").addEventListener("click", addTask);
//   taskInput.addEventListener("keypress", (event) => {
//     if (event.key === "Enter") {
//       addTask();
//     }
//   });
//
// });

document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add ="checkbox";
    checkbox.addEventListener("change",  ()=> {
      if(checkbox.checked){
        li.classList.add("completed");
      }
      else {
        li.classList.remove("completed");
      }
    })

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "DELETE";
    removeBtn.classList.add("remove-btn");
    removeBtn.addEventListener("click", () => {
      taskList.removeChild(li);
    });

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    taskInput.value = "";
  }

  document.querySelector("button").addEventListener("click", addTask);
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });
});