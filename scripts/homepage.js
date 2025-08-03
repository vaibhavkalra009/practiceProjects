const addBtn = document.querySelector(".addBtn");
const taskBox = document.querySelector(".taskList");
const checkBox = document.querySelector(".checkbox");
const task = document.querySelector(".task");
const taskInput = document.querySelector(".taskInput");
const test = document.querySelector(".test");

const dailyTasks = document.querySelector(".dailyTasks");

addBtn.addEventListener("click", function () {
  const taskText = taskInput.value;
  if (taskText !== "" && /[^ ]/.test(taskText)) {
    const taskList = document.createElement("div");
    taskList.classList.add("taskList");

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.id = "check";

    const span = document.createElement("span");
    span.textContent = taskText;

    const removeDiv = document.createElement("div");
    removeDiv.classList.add("removeDiv");

    const delBtn = document.createElement("button");
    delBtn.textContent = "Remove";
    delBtn.classList.add("delBtn");

    checkBox.addEventListener("change", function () {
      if (this.checked) {
        taskList.classList.add("completed");
      } else {
        taskList.classList.remove("completed");
      }
    });

    delBtn.addEventListener("click", function () {
      taskList.remove();
      removeDiv.remove();
    });

    taskList.appendChild(checkBox);
    taskList.appendChild(span);
    removeDiv.appendChild(delBtn);

    test.appendChild(taskList);
    test.appendChild(removeDiv);
    dailyTasks.appendChild(test);

    taskInput.value = "";
  }
});
