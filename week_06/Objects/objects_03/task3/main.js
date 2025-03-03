/* Task 3
Create an object `theme` with properties `name` (light or dark) and `isActive`.
Add a button in HTML. When clicked, toggle the theme between light and dark, updating the `isActive` property.
*/

// Your code here
const theme = {
  name: "light",
  isActive: true,
};

const toggleBtn = document.getElementById("toggleBtn");

const themeColorChange = () => {
  console.log(" btn clicked ");

  if ((theme.isActive = true)) {
    theme.isActive = false;
    document.body.style.backgroundColor = "black";
  }
  if (theme.isActive === false) {
    theme.isActive = true;
    document.body.style.backgroundColor = "white";
  }
};

toggleBtn.addEventListener("click", themeColorChange);
