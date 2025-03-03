/* Task 2
Modify Task 1: Use an ES6 `class` instead of a constructor function to define `User`.
Add a method `changeEmail(newEmail)` that updates the user's email.
*/

// Your code here

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
    this.changeEmail = function (newEmail) {
      this.email = newEmail;
    };
  }
}
