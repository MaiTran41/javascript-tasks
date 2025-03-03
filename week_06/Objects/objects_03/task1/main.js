/* Task 1
Create a constructor function `User` that takes `username` and `email` as parameters.
It should create an object with these properties and a method `showInfo` that logs user details.
Instantiate a new user and call `showInfo()`.
*/

// Your code here
function User(username, email) {
  this.username = username;
  this.email = email;
  this.showInfo = function () {
    console.log(this.username, this.email);
  };
}

const user = new User("username1", "mail@gmail.com");

console.log(user);
