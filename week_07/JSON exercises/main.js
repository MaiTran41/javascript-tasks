/* Task 1
Create a JavaScript object named `student` with properties:
- `name`
- `age`
- `grade`
Convert the object into a JSON string and log it to the console.
*/

// Your code here
const student = {
  name: "Mei",
  age: 18,
  grade: 8,
};
const studentStr = JSON.stringify(student);
console.log(studentStr);

/* Task 2
Take the JSON string from Task 1 and convert it back into a JavaScript object.
Log the `name` property of the converted object.
*/

// Your code here

const newStudentObj = JSON.parse(studentStr);
console.log(newStudentObj);

/* Task 3
Create an array named `classroom`, where each element is an object representing a student.
Each student object should have properties for `name`, `age`, and `grade`.
Convert the array into a JSON string and log it to the console.
*/

// Your code here
const classroom = [
  {
    name: "Mei",
    age: 18,
    grade: 8,
  },
  {
    name: "Mike",
    age: 18,
    grade: 7,
  },
  {
    name: "Max",
    age: 18,
    grade: 6,
  },
];

const classroomStr = JSON.stringify(classroom);
console.log(classroomStr);

/* Task 4
Take the JSON string from Task 3, convert it back into a JavaScript array,
and log the names of all students in the classroom.
*/

// Your code here
const newClassroomArr = JSON.parse(classroomStr);
console.log(newClassroomArr);

/* Task 5
Create an object named `weatherReport` with the following properties:
- `temperature`
- `humidity`
- `conditions` (e.g., "Sunny", "Rainy")

Convert the object into a JSON string and store it in a variable named `weatherJSON`.
Then, parse the JSON string back into an object and log the `conditions` property.
*/

// Your code here

const weatherReport = {
  temperature: 18,
  humidity: "80%",
  conditions: "sunny",
};
const weatherReportStr = JSON.stringify(weatherReport);

const newWeatherReportObj = JSON.parse(weatherReportStr);
console.log(newWeatherReportObj.conditions);

/* Task 6
Define an array named `movies`, where each movie has:
- `title`
- `director`
- `rating`

Convert this array into a JSON string, then parse it back into a JavaScript object.
Log all movie titles with a rating higher than 8.
*/

// Your code here
const movies = [
  {
    title: "A Quiet Place",
    director: "Christopher A.",
    rating: 7,
  },
  {
    title: "A Trauma code",
    director: "Christopher B.",
    rating: 8.5,
  },
  {
    title: "Parasite",
    director: "Christopher A.",
    rating: 9,
  },
  {
    title: "Dr. romantic",
    director: "Christopher A.",
    rating: 8,
  },
];
const moviesStr = JSON.stringify(movies);
const newMoviesArr = JSON.parse(moviesStr);

const filteredMovies = newMoviesArr.filter((movie) => movie.rating > 8);

console.log(filteredMovies);

/* Task 7
Write a function `filterHighRatedMovies(jsonString)` that:
- Takes a JSON string representing an array of movie objects.
- Converts it into a JavaScript array.
- Returns a new array containing only movies with a rating higher than 8.
*/

// Your code here
const filterHighRatedMovies = (jsonString) => {
  const newMoiesArr = JSON.parse(jsonString);
  const filteredMoviesArr = newMoiesArr.filter((movie) => movie.rating > 8);
  console.log(filteredMoviesArr);
};

filterHighRatedMovies(moviesStr);

/* Task 8
Define an object named `shoppingCart` with:
- `items` (an array of product objects, each with `name` and `price`)
Convert `shoppingCart` into a JSON string and log it to the console.
*/

// Your code here
const shoppingCart = {
  items: [
    {
      name: "Tomato",
      price: 8,
    },
  ],
};

const shoppingCartStr = JSON.stringify(shoppingCart);
console.log(shoppingCartStr);

/* Task 9
Write a function `totalCartValue(jsonString)` that:
- Takes a JSON string representing a shopping cart.
- Converts it into a JavaScript object.
- Returns the total price of all items in the cart.
*/

// Your code here

const shoppingCart1 = {
  items: [
    {
      name: "Tomato",
      price: 8,
    },
    {
      name: "Potato",
      price: 2,
    },
    {
      name: "Egg",
      price: 5,
    },
  ],
};

const shoppingCart1Str = JSON.stringify(shoppingCart);

const totalCartValue = (jsonString) => {
  const newShoppingCartObj = JSON.parse(jsonString);

  console.log(newShoppingCartObj);

  let totalCartPrice = 0;

  for (let i = 0; i < newShoppingCartObj.items[i].length; i++) {
    totalCartPrice += newShoppingCartObj.items[i].price;
  }
  console.log(totalCartPrice);
};

totalCartValue(shoppingCart1Str);
/* Task 10
Create an object named `gameProgress` with:
- `level`
- `score`
- `livesRemaining`

Convert the object into a JSON string and log it.
Parse the JSON back into an object and update the `score` property by adding 100 points.
Log the updated object.
*/

// Your code here
const gameProgress = {
  level: 5,
  score: 166,
  livesRemaining: 2,
};
const gameProgressStr = JSON.stringify(gameProgress);

const newGameProgressObj = JSON.parse(gameProgressStr);

newGameProgressObj.score += 100;

console.log(newGameProgressObj);
