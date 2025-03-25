const pancakeType = document.querySelector("#type");
const toppings = document.querySelectorAll(".topping");
const extras = document.querySelectorAll(".extra");
const totalPriceDisplay = document.querySelector("#totalPriceDisplay");
const totalPriceBanner = document.querySelector("#totalPrice");
const pancakeForm = document.getElementById("pancakeForm");
const delivery = document.querySelectorAll(".delivery");
const seeOrderBtn = document.getElementById("seeOrder");
const customerName = document.getElementById("customerName");
const summaryText = document.getElementById("summaryText");

const changeHandler = () => {
  const basePrice = parseFloat(
    document.getElementById("type").selectedOptions[0].dataset.price
  );

  const toppingsTotal = [
    ...document.querySelectorAll(".topping:checked"),
  ].reduce((sum, topping) => sum + parseFloat(topping.dataset.price), 0);

  const extraTotal = [...document.querySelectorAll(".extra:checked")].reduce(
    (sum, extra) => sum + parseFloat(extra.dataset.price),
    0
  );

  const deliveryPrice = [
    ...document.querySelectorAll(".delivery:checked"),
  ].reduce((sum, delivery) => sum + parseFloat(delivery.dataset.price), 0);

  totalPriceDisplay.textContent = `${
    basePrice + toppingsTotal + extraTotal + deliveryPrice
  }€`;
  totalPriceBanner.textContent = `${
    basePrice + toppingsTotal + extraTotal + deliveryPrice
  }€`;
};
pancakeForm.addEventListener("change", changeHandler);

const getToppings = () => {
  const selectedToppings = document.querySelectorAll(".topping:checked");

  const toppingList = [];

  selectedToppings.forEach((element) => {
    toppingList.push(
      element.parentElement.innerText.trim().toLocaleLowerCase()
    );
  });
  return toppingList.join(", ");
};
const getExtras = () => {
  const selectedExtras = document.querySelectorAll(".extra:checked");

  const extraList = [];

  selectedExtras.forEach((element) => {
    extraList.push(element.parentElement.innerText.trim().toLocaleLowerCase());
  });

  return extraList.join(", ");
};

// Check this
const seeOrderClickHandler = () => {
  const toppings = getToppings();
  const extras = getExtras();

  // array destructuring
  const [formattedPancakeType] = pancakeType.value.split(" - ");

  // Example: "Order created by Mei: Blueberries pancake  with [nuts, syrup] & cream. Delivery fee is 5e"
  summaryText.textContent = `Order created by ${customerName.value}: ${formattedPancakeType} pancake with ${toppings} & ${extras}. Delivery method is  `;
};

seeOrderBtn.addEventListener("click", seeOrderClickHandler);
