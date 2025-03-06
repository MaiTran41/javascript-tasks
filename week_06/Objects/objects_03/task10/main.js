/* Task 10
Create an object `shoppingList` with an array `items`.
Add an input field and button to allow users to add new items to `items` and display the updated list.
*/

// Your code here
const shoppingList = {
  items: [],
};

const itemInput = document.getElementById("item");
const addItemsBtn = document.getElementById("addItems");

const addItems = () => {
  shoppingList.items.push(itemInput);

  console.log();
};

addItemsBtn.addEventListener("click", addItems);
