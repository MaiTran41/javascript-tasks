"use strict";

/* Task 1: Try-Catch for Debugging
/*
Task: Wrap the code inside a `try-catch` block.
      Simulate an error by calling an undefined function.

Test cases:
task1(); // Should log: "Error caught: function is not defined"
*/

function task1() {
  // Your code here
  try {
    testingFunc();
  } catch (error) {
    console.error(`Error caught: ${error.message}`);
  }
}
task1();

/* Task 2: Handle ReferenceError
/*
Task: Try using a variable that hasn’t been declared.
      Catch the error and log: "ReferenceError caught: [error message]"

Test cases:
task2(); // Should log: "ReferenceError caught: myVariable is not defined"
*/

function task2() {
  // Your code here
  try {
    age = 19;
  } catch (error) {
    console.error(`ReferenceError caught: ${error.message}`);
  }
}
task2();

/* Task 3: Using Finally
/*
Task: Simulate an error, log it, and ensure "Task completed." always runs.

Test cases:
task3(); // Should log an error message and "Task completed."
*/

function task3() {
  // Your code here
  try {
    someFunction();
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log("Task completed.");
  }
}
task3();

/* Task 4: Fix JSON Parsing Error
/*
Task: Try to parse invalid JSON. If it fails, log `"Invalid JSON format"`

Test cases:
parseJSON('{"name": "Alice", "age": 25}'); // Should return object
parseJSON("Invalid JSON text"); // Should log an error and return null
*/

function parseJSON(jsonString) {
  // Your code here

  try {
    const formattedString = JSON.parse(jsonString);
    console.log(formattedString);
  } catch (err) {
    console.error(err.message);
  }
}
parseJSON('{"name": "Alice", "age": 25}');
parseJSON("Invalid JSON text");

/* Task 5: Throwing a Custom Error
/*
Task: If age is below 18, throw `"You must be at least 18."`

Test cases:
checkAge(20); // Should log: "Access granted."
checkAge(16); // Should log: "Error: You must be at least 18."
*/

function checkAge(age) {
  // Your code here
  if (age < 18) {
    throw new Error("You must be at least 18.");
  }
  console.log("Access granted");
}

try {
  checkAge(20);
  checkAge(16);
} catch (err) {
  console.error(err.message);
}

/* Task 6: Save and Retrieve from LocalStorage
/*
Task: Write a function to store an object in **LocalStorage**.
      Then retrieve it and handle errors if JSON is invalid.

Test cases:
saveUser({ name: "Alice", age: 25 }); // Should save user
console.log(getUser()); // Should return saved user object
localStorage.setItem("user", "{ invalid JSON }"); // Simulate corruption
console.log(getUser()); // Should log an error and return null
*/

function saveUser(user) {
  // Your code here
  const userStr = JSON.stringify(user);
  localStorage.setItem("user", userStr);
}

function getUser() {
  // Your code here
  try {
    const formattedUserObj = JSON.parse(localStorage.getItem("user"));

    console.log(formattedUserObj);
  } catch (err) {
    console.error(err.message);
    return null;
  }
}

/* Task 7: Check if Object Property Exists
/*
Task: If a property is missing, log `"Property not found"`

Test cases:
checkProperty({ name: "Bob", age: 30 }, "name"); // Should log value
checkProperty({ name: "Bob", age: 30 }, "email"); // Should log "Property not found"
*/

function checkProperty(obj, key) {
  // Your code here
  if (obj.hasOwnProperty(key)) {
    console.log(obj[key]);
  } else {
    throw new Error("Property not found");
  }
}

try {
  checkProperty({ name: "Bob", age: 30 }, "name");
} catch (err) {
  console.error(err.message);
}

try {
  checkProperty({ name: "Bob", age: 30 }, "email");
} catch (err) {
  console.error(err.message);
}

/* Task 8: Fetch API Error Handling
/*
Task: Use `fetch()` to get data, handle errors properly.

Test cases:
fetchData("https://jsonplaceholder.typicode.com/users"); // Should log API data
fetchData("invalid-url"); // Should log network error
*/

async function fetchData(url) {
  // Your code here

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse and return the JSON data
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error.message);
    return null;
  }
}

/* Task 9: Fix a URI Error
/*
Task: Try decoding a broken URI string.

Test cases:
task9("https%3A%2F%2Fexample.com"); // Should decode properly
task9("%"); // Should log URIError
*/

function task9(malformedURI) {
  // Your code here
  try {
    console.log(decodeURI(malformedURI));
  } catch (err) {
    console.error(err.message);
  }
}

task9("https%3A%2F%2Fexample.com");
task9("%");

/* Task 10: Clear LocalStorage
/*
Task: Ensure LocalStorage is cleared safely.

Test cases:
clearStorage(); // Should log "LocalStorage cleared."
*/

function clearStorage() {
  // Your code here
  try {
    localStorage.length === 0;
    console.log("LocalStorage cleared.");
  } catch (err) {
    console.error(err.message);
  }
}
clearStorage();
