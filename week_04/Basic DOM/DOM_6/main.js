/* 
Create a form with a required name and email field.
Write JavaScript to:
- Prevent form submission if either field is empty.
- Display an error message if fields are missing. 
*/

const formValidate = (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
};
