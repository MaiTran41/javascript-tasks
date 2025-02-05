/*
Use an HTML file with an <input> field, a <button>, and a <ul> list with the ID fruitList.
Write JavaScript to:
- Retrieve the value from the input field when the button is clicked.
- Create a new <li> element and set its text content to the input field's value.
- Append the <li> element to the list.
- Clear the input field after adding the fruit.
*/

const fruitInput = document.querySelector("#fruitInput");
const fruitList = document.querySelector("#fruitList");
const addFruitBtn = document.querySelector("#addFruitBtn");

const addFruit = () => {
  const newInput = document.createElement("li");
  newInput.textContent = fruitInput.value;

  fruitList.appendChild(newInput);

  fruitInput.value = "";
};

addFruitBtn.addEventListener("click", addFruit);
