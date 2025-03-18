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
const confirmOrderBtn = document.getElementById("confirmOrder");

const changeHandler = () => {
  const { basePrice, toppingsTotal, extraTotal, deliveryPrice } =
    calculateTotalPrice();

  displayPriceText({ basePrice, toppingsTotal, extraTotal, deliveryPrice });
};

const calculateTotalPrice = () => {
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

  return { basePrice, toppingsTotal, extraTotal, deliveryPrice };
};

const displayPriceText = ({
  basePrice,
  toppingsTotal,
  extraTotal,
  deliveryPrice,
}) => {
  const priceText = `${
    basePrice + toppingsTotal + extraTotal + deliveryPrice
  }€`;

  totalPriceDisplay.textContent = priceText;
  totalPriceBanner.textContent = priceText;
};

pancakeForm.addEventListener("change", changeHandler);

const getToppings = () => {
  const selectedToppings = document.querySelectorAll(".topping:checked");

  const toppingNameList = [];

  selectedToppings.forEach((element) => {
    toppingNameList.push(
      element.parentElement.innerText.trim().toLocaleLowerCase()
    );
  });
  return toppingNameList;
};

const getFormattedToppingsText = () => {
  const toppingNameList = getToppings();

  return toppingNameList.join(", ");
};

const getExtras = () => {
  const selectedExtras = document.querySelectorAll(".extra:checked");

  const extraNameList = [];

  selectedExtras.forEach((element) => {
    const [formattedExtra] = element.parentElement.innerText
      .trim()
      .toLocaleLowerCase()
      .split(" - ");
    extraNameList.push(formattedExtra);
  });

  return extraNameList;
};

const getFormattedExtrasText = () => {
  const extraList = getExtras();

  return extraList.join(", ");
};

const getDelivery = () => {
  const selectedDeliveryMethod = document.querySelector(".delivery:checked");

  const [formattedSelectedDeliveryMethod] =
    selectedDeliveryMethod.parentElement.innerText
      .trim()
      .toLowerCase()
      .split(" (");
  return formattedSelectedDeliveryMethod;
};

const getPancakeType = () => {
  const [formattedPancakeType] = pancakeType.value.split(" - ");
  return formattedPancakeType;
};

const seeOrderClickHandler = () => {
  const toppings = getFormattedToppingsText();
  const extras = getFormattedExtrasText();
  const deliveryMethod = getDelivery();

  const pancakeType = getPancakeType();

  summaryText.textContent = `Order created by ${customerName.value}: ${pancakeType} pancake with ${toppings} & ${extras}. Delivery method: ${deliveryMethod} `;
};

seeOrderBtn.addEventListener("click", seeOrderClickHandler);

const confirmOrderHandler = () => {
  const order = {
    id: Date.now(),
    customerName: customerName.value,
    pancakeType: getPancakeType(),
    toppings: getToppings(),
    extras: getExtras(),
    deliveryMethod: getDelivery(),
    // totalPrice: basePrice + toppingsTotal + extraTotal + deliveryPrice,
  };

  console.log(order);
};

confirmOrderBtn.addEventListener("click", confirmOrderHandler);
