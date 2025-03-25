/* 
Create a form with a required name and email field.
Write JavaScript to:
- Prevent form submission if either field is empty.
- Display an error message if fields are missing. 
*/

const submitBtn = document.getElementById("submit");
const errMsg = document.getElementById("error_message");

const formValidate = (event) => {
  const name = document.getElementById("name").value;

  const email = document.getElementById("email").value;

  if (name === "" || email === "") {
    event.preventDefault();
  }
  if (name === "") {
    errMsg.textContent = `${name} is missing, fill this field.`;
  }
  if (email === "") {
    errMsg.textContent = `${email} is missing, fill this field.`;
  }
  return;
};

submitBtn.addEventListener("click", formValidate);
