/* Task 5
Create an object `product` with `name`, `price`, and `quantity`.
Add an input field in HTML where the user can enter a quantity to purchase.
Update the `quantity` property and display the total price dynamically.
*/

// Your code here

const product = {
  name: "egg",
  price: 4,
  quantity: null,
};

const quantityInput = document.getElementById("quantity_input");
const addQuantityBtn = document.getElementById("addQuantityBtn");
const totalPriceDisplay = document.getElementById("totalPriceDisplay");

const totalPriceChange = () => {
  quantityInput.value;

  product.quantity = Number(quantityInput.value);

  const totalPrice = product.quantity * product.price;

  totalPriceDisplay.textContent = totalPrice;

  console.log(quantityInput.value);
  console.log(totalPrice);
};

addQuantityBtn.addEventListener("click", totalPriceChange);
