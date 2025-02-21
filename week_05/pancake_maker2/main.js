const typeSelect = document.getElementById("type");
const totalPriceDisplay = document.getElementById("totalPriceDisplay");
const totalPriceBanner = document.getElementById("totalPrice");
const toppingOptions = document.querySelectorAll(".topping");
const extraOptions = document.querySelectorAll(".extra");

// default value for typePrice
let typePrice = Number(typeSelect.value);
let toppingPrice = 0;
let extraPrice = 0;

const updateTotalPriceDisplay = () => {
  const totalPrice = typePrice + toppingPrice + extraPrice;
  totalPriceDisplay.textContent = totalPrice;
  totalPriceBanner.textContent = totalPrice;
};

const typeSelectChangeHandler = (e) => {
  typePrice = Number(e.target.value);

  updateTotalPriceDisplay();
};

typeSelect.addEventListener("change", typeSelectChangeHandler);

// set up event listener for 'topping' checkboxes
const toppingChangeHandler = (e) => {
  const formattedVal = Number(e.target.value);

  if (e.target.checked) {
    toppingPrice += formattedVal;
  } else {
    toppingPrice -= formattedVal;
  }
  updateTotalPriceDisplay();
};

for (let i = 0; i < toppingOptions.length; i++) {
  toppingOptions[i].addEventListener("change", toppingChangeHandler);
}

// set up event listener for 'extras' checkboxes
const extraChangeHandler = (e) => {
  const formattedVal = Number(e.target.value);

  if (e.target.checked) {
    extraPrice += formattedVal;
  } else {
    extraPrice -= formattedVal;
  }
  updateTotalPriceDisplay();
};

for (let i = 0; i < extraOptions.length; i++) {
  extraOptions[i].addEventListener("change", extraChangeHandler);
}
