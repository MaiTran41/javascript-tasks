/*
1. Create a variable called age and assign it a number (e.g., 25).
2. Create a variable called name and assign it a string (e.g., "John").
3. Create a variable called isStudent and assign it a boolean value (true or false).
4. Create a variable called hobbies and assign it an array with a few strings (e.g., ["reading", "coding", "running"]).
5. Create an object called info with two properties:
    schoolName (a string, e.g., "Business College Helsinki")
    groupName (a number, e.g., REACT25K)
6. Use console.log() to print each variable to the console.
7. Use the typeof operator to check and print the data type of each variable.
*/

let age = 25;

const name = "John";

const isStudent = true;

const hobbies = ["watching TV", "cooking", "traveling"];

// to do curly braces, use shift + option + 8 {}
const info = {
  schoolname: "Business College Helsinki",
  groupName: "REACT25K",
};

// To show the console.log in the terminal, change directory to the folder we want, and use `node fileName.js`

console.log(age);
console.log(name);
console.log(isStudent);
console.log(hobbies);
console.log(info.schoolname);
console.log(info.groupName);

console.log(typeof age);
console.log(typeof name);
console.log(typeof isStudent);
console.log(typeof hobbies);
console.log(typeof info.schoolname);
console.log(typeof info.groupName);
