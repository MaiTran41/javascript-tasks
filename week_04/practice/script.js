const textExample = document.querySelector("p");
const textExample2 = document.querySelectorAll(".myClass");
const textExample3 = document.querySelector("#myID");
console.log(textExample);
console.log(textExample2[1].textContent);
console.log(textExample3);

// const insertBtn = document.getElementById("insertBtn");

// const input = document.getElementById("input");
// const paragraph = document.getElementById("paragraph");

// const handleClick = () => {
//   paragraph.textContent = `User entered: ${input.value}`;
//   // Empty the input after submitting
//   input.value = "";
// };

// insertBtn.addEventListener("click", handleClick);

// const circle = document.getElementById("alert");
// console.log(circle);

// const paragraph = document.getElementsByTagName("p");
// console.log(paragraph);

// const alertSomething = () => {
//   alert("Some cool text inside");
// };

// // alertSomething();

// const doNotClick = () => {
//   alert("Ughhhh, I told you not to click the button!");
// };
