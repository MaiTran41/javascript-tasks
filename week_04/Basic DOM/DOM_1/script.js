/* 
Use an HTML file with a <p> element that has the ID content.
Write JavaScript to select this element using getElementById.
Create a function that changes its text to "Hello, World!" when a button is clicked.
*/

const content = document.getElementById("content");
console.log(content.textContent);

const changeTextBtn = () => {
  console.log("Button was clicked");

  content.textContent = "Hello, World!";
};

const heading = document.getElementById("heading");
const changeHeadingBtn = () => {
  console.log("Button was clicked");

  heading.textContent = "The new heading";
};
