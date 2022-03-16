var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {
  event.preventDefault();

  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEl.appendChild(listItemEl);
  };

  formEl.addEventListener("submit", createTaskHandler);

// To summarize: Created a new task item.
// Style the new task item.
// Add the text.
// Append this element to the task list. 