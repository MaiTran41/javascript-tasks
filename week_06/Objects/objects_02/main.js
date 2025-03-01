/* Task 1
Create an object `weather` that contains properties `temperature`, `humidity`, and `condition` (e.g., "Sunny", "Rainy").
Write a function that logs `"Take an umbrella!"` if it's rainy.
*/

// Your code here
const weather = {
  temperature: "15°C",
  humidity: "89%",
  condition: "rainy",
};
const checkWeather = () => {
  if (weather.condition === "rainy") {
    console.log("Take an umbrella or you'll get wet outside!");
  }
};
checkWeather();

/* Task 2
Define an object named `shoppingCart` that contains an array of items.
Each item has `name`, `price`, and `quantity`.
Write a function that calculates the total price of all items in the cart.
*/

// Your code here
const shoppingCart = {
  items: [
    {
      name: "chocolates",
      price: 2.5,
      quantity: 1,
    },
    {
      name: "milk",
      price: 3,
      quantity: 2,
    },
    {
      name: "noodles",
      price: 1.5,
      quantity: 4,
    },
    {
      name: "coke",
      price: 3.7,
      quantity: 3,
    },
  ],
};

let totalCartPrice = 0;

const priceCalculate = () => {
  for (let i = 0; i < shoppingCart.items.length; i++) {
    const totalItemPrice =
      shoppingCart.items[i].price * shoppingCart.items[i].quantity;
    totalCartPrice += totalItemPrice;
  }
  console.log("Total Cart Price:", totalCartPrice);
};
priceCalculate();

/* Task 3
Create an array of objects named `restaurants`, each with properties `name`, `cuisineType`, and `rating`.
Write a function that returns only the restaurants with a rating of 4 or higher.
*/

// Your code here

const restaurants = [
  {
    name: "Boon Nam",
    cuisineType: "Asian",
    rating: 7.8,
  },
  {
    name: "Olo",
    cuisineType: "Finnish",
    rating: 8,
  },
  {
    name: "Burger King",
    cuisineType: "Western",
    rating: 3.5,
  },
];

const hightRatedResto = restaurants.filter(
  (restaurant) => restaurant.rating > 4
);
console.log(hightRatedResto);

/* Task 4
Define an object named `bankAccount` with properties `accountHolder`, `balance`, and `transactions` (an array of numbers).
Write a function that calculates the total balance after all transactions.
*/

// Your code here
const bankAccount = {
  accountHolder: "",
  balance: 120,
  transactions: [10, -8, 56, -37, 69],
};

const balanceCalculate = () => {
  let totalTransactions = 0;
  for (let i = 0; i < bankAccount.transactions.length; i++) {
    totalTransactions += bankAccount.transactions[i];
  }
  const totalBalance = totalTransactions + bankAccount.balance;
  console.log("Total balance: ", totalBalance);
};

balanceCalculate();

/* Task 5
Create an array `students` where each student has `name`, `scores` (array of numbers), and `averageScore` (initially null).
Write a function that calculates and updates each student's `averageScore`.
*/

// Your code here
const students = [
  {
    name: "Mei",
    score: [8, 9, 8.2, 7, 8],
    averageScore: null,
  },
  {
    name: "Jake",
    score: [5.6, 7.3, 9.8, 6.9],
    averageScore: null,
  },
  {
    name: "Paula",
    score: [5.3, 7.8, 9, 7.5],
    averageScore: null,
  },
  {
    name: "Peter",
    score: [5.6, 7.4, 6, 7.3],
    averageScore: null,
  },
];

console.log(students[1].score[0]);

// const scoresCalculate = () => {
//   let averageScore;

//   for (let i = 0; i < students[i].score.length; i++) {
//     let totalScore = 0;
//     totalScore += students[i].score[i];
//     averageScore = totalScore / students.score.length;
//   }
//   console.log(averageScore);
// };

// scoresCalculate();

/* Task 6
Define an array named `courses`, each containing `courseName`, `instructor`, and `studentsEnrolled`.
Write a function that logs the course name of any course with more than 30 students.
*/

// Your code here
const courses = [
  {
    courseName: "JavaScript",
    instructor: "Mei",
    studentsEnrolled: 35,
  },
  {
    courseName: "HTML",
    instructor: "Max",
    studentsEnrolled: 25,
  },
  {
    courseName: "CSS",
    instructor: "Martin",
    studentsEnrolled: 15,
  },
  {
    courseName: "REACT",
    instructor: "Margit",
    studentsEnrolled: 55,
  },
];
const studentsEnrolledCheck = (course) => {
  if (course.studentsEnrolled > 30) {
    console.log("Course name:", course.courseName);
  } else {
    return;
  }
};
courses.filter(studentsEnrolledCheck);

/* Task 7
Create an object `pet` with properties `species`, `name`, and `isVaccinated`.
Write a function that returns `"Vaccination required"` if the pet is not vaccinated.
*/

// Your code here
const pet = {
  species: "dog",
  name: "chowchow",
  isVaccinated: false,
};

const vaccineCheck = (obj) => {
  if (obj.isVaccinated) {
    console.log("Vaccination completed");
  } else {
    console.log("Vaccination required");
  }
};
vaccineCheck(pet);

/* Task 8
Define an object named `city` with properties `name`, `population`, and `landmark`.
Write a function that logs `"This is a big city!"` if the population exceeds 1,000,000.
*/

// Your code here
const city = {
  name: "Paris",
  population: 12000000,
  landmark: "Eiffel Tower",
};

const populationCheck = (obj) => {
  if (obj.population > 1000000) {
    console.log("This is a big city!");
  } else {
    console.log("This is a small city!");
  }
};
populationCheck(city);

/* Task 9
Create an array `transactions`, where each transaction is an object with `type` ("credit" or "debit") and `amount`.
Write a function that calculates the total balance after processing all transactions.
*/

// Your code here
const transactions = [
  {
    type: "credit",
    amount: 1500,
  },
  {
    type: "debit",
    amount: 2500,
  },
  {
    type: "credit",
    amount: 3500,
  },
  {
    type: "credit",
    amount: 4000,
  },
];
const totalTransactions = () => {
  let totalTransactions = 0;
  for (let i = 0; i < transactions.length; i++) {
    totalTransactions += transactions[i].amount;
  }
  console.log(totalTransactions);
};

totalTransactions();

/* Task 10
Define an object named `foxPack` containing an array of fox objects.
Each fox has `name`, `age`, and `furColor`.
Write a function that filters out only the foxes that are younger than 2.
*/

// Your code here
const foxPack = {
  fox: [
    {
      name: "grey fox",
      age: 2,
      furColor: "grey",
    },
    {
      name: "arctic fox",
      age: 1,
      furColor: "white",
    },
    {
      name: "red fox",
      age: 3,
      furColor: "red",
    },
  ],
};

/* Task 11
Create an object `gameCharacter` with properties `name`, `level`, `health`, and `inventory` (an array).
Write a function that logs all items in the character’s inventory.
*/

// Your code here
const gameCharacter = {
  name: "Mario",
  level: 1,
  health: "Good",
  inventory: ["a", "b", "c", "d"],
};
const inventoryCheck = () => {
  const inventoryArr = gameCharacter.inventory;
  for (let i = 0; i < inventoryArr.length; i++) {
    console.log(inventoryArr[i]);
  }
};
inventoryCheck();

/* Task 12
Define an array named `employees`, where each employee has a `name`, `role`, and `workingHours`.
Write a function that finds and logs employees who work more than 40 hours.
*/

// Your code here
const employees = [
  {
    name: "Mei",
    role: "employee",
    workingHours: 38,
  },
  {
    name: "Mike",
    role: "employee",
    workingHours: 45,
  },
  {
    name: "Max",
    role: "employee",
    workingHours: 41,
  },
  {
    name: "Jake",
    role: "employee",
    workingHours: 43,
  },
];

const workingHourCheck = () => {
  for (let i = 0; i < employees.length; i++) {
    const employeeWorkingHours = employees[i].workingHours;
    if (employeeWorkingHours > 40) {
      console.log(
        `Employee: ${employees[i].name}, working hour:  ${employeeWorkingHours}`
      );
    }
  }
};
workingHourCheck();

/* Task 13
Create an array `musicAlbums` where each album has `title`, `artist`, and `releaseYear`.
Write a function that logs albums released after 2000.
*/

// Your code here
const musicAlbums = [
  {
    title: "Short & Sweet",
    artist: "Sabrina Carpenter",
    releaseYear: 2024,
  },
  {
    title: "GNX",
    artist: "Kendrick Lamar",
    releaseYear: 2024,
  },
  {
    title: "Hit Me Hard and Soft",
    artist: "Billie Eilish",
    releaseYear: 2024,
  },
  {
    title: "The Slim Shady LP",
    artist: "Eminem",
    releaseYear: 1999,
  },
];

const releasedYearCheck = () => {
  for (let i = 0; i < musicAlbums.length; i++) {
    if (musicAlbums[i].releaseYear > 2000) {
      console.log(`Album released after 2000: ${musicAlbums[i].title}`);
    }
  }
};
releasedYearCheck();

/* Task 14
Define an array named `cars`, each containing `brand`, `model`, and `horsepower`.
Write a function that finds and returns the car with the highest horsepower.
*/

// Your code here
const cars = [
  {
    brand: "Toyota",
    model: "GR Corolla",
    horsepower: 300,
  },
  {
    brand: "Ford Mustang",
    model: "EcoBoost Fastback",
    horsepower: 315,
  },
  {
    brand: "Hyundai",
    model: "Ioniq 5 AWD ",
    horsepower: 320,
  },
  {
    brand: "BMW",
    model: "335i Coupe (E92) ",
    horsepower: 300,
  },
];
/* Lesson learned: 
- Check empty array => array.length
- the 1st thing to do when dealing with reduce: think of what happen in the 1st loop
*/

const horsepowerCheck = () => {
  const highestHpCars = cars.reduce((accumulator, currentValue) => {
    if (accumulator.length === 0) {
      accumulator.push(currentValue);
      return accumulator;
    }

    const currHighestHpCar = accumulator[0];

    if (currentValue.horsepower > currHighestHpCar.horsepower) {
      accumulator = [currentValue];
      return accumulator;
    }

    if (currentValue.horsepower === currHighestHpCar.horsepower) {
      accumulator.push(currentValue);
      return accumulator;
    }

    // Last case: currentValue.horsepower < currHighestHpCar.horsepower
    return accumulator;
  }, []);

  console.log(highestHpCars);
};

horsepowerCheck();

/* Task 15
Create an array of `airports`, where each airport has `name`, `country`, and `flightsPerDay`.
Write a function that finds the airport with the most daily flights.
*/

// Your code here
