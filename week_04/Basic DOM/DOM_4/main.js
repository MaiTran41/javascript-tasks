/*
Create an HTML file with a <p> element and a button.
Write JavaScript to toggle the visibility of the paragraph each time the button is clicked.
 */

const btn = document.querySelector("btn");

const toggleBtn = () => {
  const para = document.querySelector("p");
  if (para.style.display === "none") {
    // default style display of <p> is 'block'
    para.style.display = "block";
  } else {
    para.style.display = "none";
  }
};

btn.addEventListener("toggle", toggleBtn);
