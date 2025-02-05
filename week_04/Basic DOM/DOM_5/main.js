/*
Create an HTML file with:
- A <button> to change the background color.
- A <input> field for users to enter a color.
- A <p> element where the text color changes based on the input.

Write JavaScript to:
- Change the background color to a random color when the button is clicked.
- Update the paragraph’s text color to match the user’s input valu
*/

const btn = document.querySelector("button");

const changeBackgroundColorHandler = () => {
  // This code generates a random color . The toString(16) method is used to convert the random number to a hexadecimal string, which represents the color value.
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  document.body.style.background = randomColor;
};

btn.addEventListener("click", changeBackgroundColorHandler);

const para = document.querySelector("p");
const colorInput = document.querySelector("input");

const changeTextColorHandler = () => {
  para.style.color = colorInput.value;
};
colorInput.addEventListener("change", changeTextColorHandler);
