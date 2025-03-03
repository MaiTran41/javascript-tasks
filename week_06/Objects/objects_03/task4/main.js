/* Task 4
Create an object `counter` with a `value` property.
Add two buttons in HTML: one to increase `value`, another to decrease it.
Display `value` in an HTML element and update it dynamically when buttons are clicked.
*/

// Your code here
const counter = {
  value: 0,
};

const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const number = document.createElement("p");

document.body.appendChild(number);
number.textContent = 0;

const increase = () => {
  counter.value++;
  number.textContent = counter.value;
};

const decrease = () => {
  if (number.textContent > 0) {
    counter.value--;
    number.textContent = counter.value;
  }
  return;
};

increaseBtn.addEventListener("click", increase);
decreaseBtn.addEventListener("click", decrease);
