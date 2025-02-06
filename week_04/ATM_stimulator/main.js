const depoBtn = document.getElementById("depoBtn");
const withdrawBtn = document.getElementById("withdrawBtn");

const balance = document.getElementById("balance");
const depoInput = document.getElementById("depoInput");
const withdrawInput = document.getElementById("withdrawInput");

const message = document.getElementById("message");

let currentBalance = 0;

const checkBalance = () => {
  return currentBalance;
};
checkBalance();

const deposit = () => {
  const depositAmount = Number(depoInput.value);
  if (depositAmount > 0) {
    currentBalance += depositAmount;
    console.log("Current balance", currentBalance);
  } else {
    message.style.color = "red";
    return (message.innerText =
      "Invalid deposit amount! Please enter a positive number!");
  }
  balance.innerText = currentBalance;
  depoInput.value = "";
  message.innerText = "Deposit added sucessfully!";
  message.style.color = "darkgreen";
};

const withdraw = () => {
  const withdrawAmount = Number(withdrawInput.value);
  if (withdrawAmount <= currentBalance && withdrawAmount !== 0) {
    currentBalance -= withdrawAmount;
    console.log("Current balance", currentBalance);
  } else {
    message.style.color = "red";
    return (message.innerText = "Insufficient funds!!!");
  }
  balance.innerText = currentBalance;
  withdrawInput.value = "";
  message.innerText = "Withdraw sucessfully!";
  message.style.color = "darkgreen";
};

depoBtn.addEventListener("click", deposit);
withdrawBtn.addEventListener("click", withdraw);
