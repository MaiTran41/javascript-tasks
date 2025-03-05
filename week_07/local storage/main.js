/* Task 1
Store a string `"Hello, LocalStorage!"` in LocalStorage under the key `"message"`.
Retrieve it and log it to the console.
*/

// Your code here
localStorage.setItem("message", "Hello, LocalStorage!");

const retrievedMessage = localStorage.getItem("message");
console.log(retrievedMessage);

/* Task 2
Create an object `userSettings` with:
- `theme` ("dark" or "light")
- `language` ("English", "Spanish", etc.)

Convert it to a JSON string and store it in LocalStorage.
Retrieve it, parse it, and log the `theme` property.
*/

// Your code here
const userSettings = {
  theme: "dark",
  language: "English",
};

const userSettingsStr = JSON.stringify(userSettings);

localStorage.setItem("userSettings", userSettingsStr);

const parseUSerSetting = JSON.parse(localStorage.getItem("userSettings"));
console.log(parseUSerSetting.theme);

/* Task 3
Define an array `favoriteBooks` with at least three book objects (`title` and `author`).
Store the array in LocalStorage.
Retrieve and parse it, then log the titles of all books.
*/

// Your code here
const favoriteBooks = [
  {
    title: "Murder on the Orient Express",
    author: " Agatha Christie",
  },
  {
    title: "The Beekeeper's Apprentices",
    author: "Laurie R. King",
  },
  {
    title: "Harry Porter",
    author: "Laurie R. King",
  },
];

const favoriteBookStr = JSON.stringify(favoriteBooks);

localStorage.setItem("favoriteBooks", favoriteBookStr);

const parsedFavoriteBook = JSON.parse(localStorage.getItem("favoriteBooks"));

console.log(parsedFavoriteBook.map((book) => book.title));

/* Task 4 
Write a function `saveToLocalStorage(key, object)` that:
- Converts an object to JSON.
- Stores it in LocalStorage under the provided key.
Test it by saving an object and retrieving it.
*/

// Your code here

const testObj = {
  name: "test",
};

const saveToLocalStorage = (key, object) => {
  const stringifiedObj = JSON.stringify(object);

  localStorage.setItem(key, stringifiedObj);

  console.log(JSON.parse(localStorage.getItem(key)));
};

saveToLocalStorage("user", testObj);

/* Task 5 - Not yet done
Write a function `getFromLocalStorage(key)` that:
- Retrieves a value from LocalStorage.
- Parses it if it's JSON.
- Logs the retrieved value.
*/

// Your code here

const getFromLocalStorage = (key) => {
  const retrievedItem = localStorage.getItem(key);

  if (retrievedItem === null) {
    return;
  }
  try {
    const parsedItem = JSON.parse(retrievedItem);
    console.log(parsedItem);
  } catch (e) {
    console.log("Value is not JSON ");
  }
};

getFromLocalStorage("message");

/* Task 6
Create an object `userProfile` with:
- `username`
- `email`
- `preferences` (an object with `theme` and `notifications`)

Save it to LocalStorage.
Retrieve and update the `theme` property to `"dark mode"`, then log the updated object.
*/

// Your code here
const userProfile = {
  username: "Meimei",
  email: "email",
  preferences: {
    theme: "light mode",
    notifications: "yes",
  },
};

const userProfileJSON = JSON.stringify(userProfile);

localStorage.setItem("userProfile", userProfileJSON);

const retrievedUserProfile = JSON.parse(localStorage.getItem("userProfile"));

retrievedUserProfile.preferences.theme = "dark mode";

console.log(retrievedUserProfile);

/* Task 7
Define an object `shoppingList` with an array `items` (strings).
Save it to LocalStorage.
Write a function `addItemToList(item)` that:
- Retrieves `shoppingList` from LocalStorage.
- Adds a new item.
- Saves the updated list back to LocalStorage.
- Logs the updated list.
*/

// Your code here
const shoppingList = {
  items: ["tomato", "egg", "milk", "soft drink"],
};

const shoppingListJSON = JSON.stringify(shoppingList);

localStorage.setItem("shoppingList", shoppingListJSON);

const retrievedShoppingList = JSON.parse(localStorage.getItem("shoppingList"));

retrievedShoppingList.items.push("chicken");

const retrievedShoppingListJSON = JSON.stringify(retrievedShoppingList);

localStorage.setItem("updatedShoppingList", retrievedShoppingListJSON);

console.log(
  JSON.parse(
    localStorage.getItem("updatedShoppingList", retrievedShoppingListJSON)
  )
);

/* Task 8
Create a counter object with:
- `count` (starting at 0)
Store it in LocalStorage.
Write a function `incrementCounter()` that:
- Retrieves the counter.
- Increases `count` by 1.
- Saves the updated counter.
- Logs the new count.
*/

// Your code here
const counter = {
  count: 0,
};

const counterJSON = JSON.stringify(counter);

localStorage.setItem("counter", counterJSON);

const incrementCounter = () => {
  const retrievedCounter = JSON.parse(localStorage.getItem("counter"));
  retrievedCounter.count++;
  console.log(retrievedCounter.count);
};

incrementCounter();

/* Task 9
Create an array `tasks`, where each task is an object (`id`, `description`, `completed`).
Save it to LocalStorage.
Write a function `markTaskComplete(taskId)` that:
- Retrieves `tasks` from LocalStorage.
- Finds the task with the given ID and sets `completed` to `true`.
- Saves the updated tasks.
- Logs the updated list.
*/

// Your code here
const tasks = [
  {
    id: 67167,
    description: "Javascript",
    completed: false,
  },
  {
    id: 45346,
    description: "Javascript",
    completed: false,
  },
  {
    id: 7865,
    description: "Javascript",
    completed: false,
  },
];

const stringifiedTasks = JSON.stringify(tasks);

localStorage.setItem("tasks", stringifiedTasks);

const markTaskComplete = (taskId) => {
  const retrievedTasks = JSON.parse(localStorage.getItem("tasks"));

  const updatedTasks = retrievedTasks.map((task) =>
    task.id === taskId ? { ...task, completed: true } : task
  );

  localStorage.setItem("tasks", JSON.stringify(updatedTasks));

  console.log(JSON.parse(localStorage.getItem("tasks")));
};

markTaskComplete(7865);

/* Task 10
Write a function `clearLocalStorage()` that removes all data stored in LocalStorage.
Call it and confirm LocalStorage is empty.
*/

// Your code here

const clearLocalStorage = () => {
  localStorage.clear();

  if (localStorage.length === 0) {
    console.log("LocalStorage is empty!!!");
  }
};
clearLocalStorage();
