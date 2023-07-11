// Global variables to select HTML elements
const addTaskBtn = document.querySelector("#add-task-btn");
const taskInput = document.querySelector("#task-input");
const tasksList = document.querySelector("#tasks-list");

// Function to create button
function createButton(text, func) {
  const button = document.createElement("button");
  button.textContent = text;
  button.type = "button";

  button.addEventListener("click", func);

  return button;
}

// Function to add a task (<li>) to a list (<ul>) using the value of the <input>
function addTask() {
  const task = taskInput.value;
  if (task.trim().length === 0) {
    return;
  }

  // Callback to remove the <li>
  function deleteBtn() {
    li.remove();
  }

  // Callback to update item by removing and setting it back to the <input>
  function updateBtn() {
    deleteBtn();
    taskInput.value = task;
  }

  // Creates a <li> item and adds the task
  const li = document.createElement("li");
  li.textContent = task;

  // Create delete and update button
  const deleteBtnElement = createButton("Detele", deleteBtn);
  const updateBtnElement = createButton("Update", updateBtn);

  // Append (add to the html) the elements to their parent
  li.append(updateBtnElement, deleteBtnElement);
  tasksList.append(li);

  // Reset the input field
  taskInput.value = "";
}

// Adding event listeners to elements
addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    addTask();
  }
});
