/* Task 6
Define a `Task` constructor that takes `title`, `description`, and `completed`.
Add a button in HTML that, when clicked, adds a new `Task` object to a `tasks` array and displays it on the page.
*/

// Your code here

function Task(title, description, completed) {
  this.title = title;
  this.description = description;
  this.completed = completed;
}

const addTaskBtn = document.getElementById("addTaskBtn");

const taskDisplay = () => {
  const task = new Task("Coding", "Object exercises", "completed");

  const tasks = [];

  tasks.push(task);

  const li = document.createElement("li");

  document.body.appendChild(li);

  li.textContent = `Task: ${tasks[0].title}, description: ${tasks[0].description},  ${tasks[0].completed}`;
};

addTaskBtn.addEventListener("click", taskDisplay);
