/* 
Create an HTML file with a button and a counter display.
Write JavaScript to count and display the number of times the button is clicked. 
*/

const counterDisplay = document.getElementById("counterDisplay");
const countBtn = document.getElementById("count-btn");

const countClickDisplay = () => {
  return counterDisplay.textContent++;
};

countBtn.addEventListener("click", countClickDisplay);
