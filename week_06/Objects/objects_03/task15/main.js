/* Task 15
Create an object `foxTracker` with a `foxes` array.
Add an input field and button that allows users to add new foxes (with name and location) to the array.
Display the list of foxes dynamically in an HTML element.
*/

// Your code here
const addFoxBtn = document.getElementById("addFox");
const foxList = document.getElementById("foxList");

const nameInput = document.getElementById("name");
const locationInput = document.getElementById("location");

const foxTracker = {
  foxes: [],
};

const addFox = () => {
  foxTracker.foxes.push(nameInput.value, locationInput.value);

  console.log(foxTracker.foxes);

  const li = document.createElement("li");

  foxList.appendChild(li);
  li.textContent = `${nameInput.value} & ${locationInput.value}`;
};

addFoxBtn.addEventListener("click", addFox);
