/* Task 1
Create a JavaScript array named `library` that represents a collection of books.
Each book should have properties for `title`, `author`, and `yearPublished`.
Add at least two book objects to this collection.
*/

// Your code here

const library = [
  {
    title: "Murder on the Orient Express",
    author: " Agatha Christie",
    yearPublished: 1934,
  },
  {
    title: "The Beekeeper's Apprentices",
    author: "Laurie R. King",
    yearPublished: 1994,
  },
];

/* Task 2
Access the `title` of the first book in the `library` collection and log it to the console.
Modify the `yearPublished` for the second book in the collection to a new year, then log the updated book object to the console.
*/

// Your code here

console.log(library[0].title);

library[1].yearPublished = 2001;

console.log(library[1]);

/* Task 3
Use dot notation to add a new property `genres` (an array of strings) to the first book in the `library`.
Use bracket notation to add a boolean property `isAvailable` to the same book, indicating its availability.
*/

// Your code here

library[0].genres = [];
library[0].isAvailable = true;

/* Task 4
Define a constructor function named `Book` that can create new book objects with properties for `title`, `author`, `yearPublished`, and `genres`.
Using the `Book` constructor, create a new book object with the provided input values and add it to the `library` collection.
*/

// Your code here

class Book {
  constructor(title, author, yearPublished, genres) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
    this.genres = genres;
  }
}
library.push(
  new Book("In the Woods", "Tana French", 2007, ["mystery", "fiction", "crime"])
);
console.log(library);

/* Task 5
Write a function named `createBook` that takes parameters for `title`, `author`, `yearPublished`, and `genres` (an array).
The function should return a new book object with these properties.
Test `createBook` by creating a new book object with user-provided input and logging the new book object to the console.
*/

// Your code here
// Change the function name to uppercase

function createBook(title, author, yearPublished, genres) {
  return new Book(title, author, yearPublished, genres);
}

const testCreateBook = () => {
  const title = prompt("Add book title: ");
  const author = prompt("Add book author: ");
  const yearPublished = prompt("Add year published:: ");

  const genres = [];

  let shouldAskGenre = true;

  while (shouldAskGenre) {
    genres.push(prompt("Add book genre:"));

    let shouldAskUserToContinue = true;

    while (shouldAskUserToContinue) {
      const userWantsToContinue = prompt(
        "Do you want to continue adding genres? (y/n)"
      );

      if (userWantsToContinue === "n") {
        shouldAskUserToContinue = false;
        shouldAskGenre = false;
        continue;
      }

      if (userWantsToContinue === "y") {
        shouldAskUserToContinue = false;
        continue;
      }
    }
  }

  const book = createBook(title, author, yearPublished, genres);
  console.log(book);
};

testCreateBook();

/* Task 6
Convert the `library` collection to a JSON string and log it to the console.
Parse the JSON string back into a JavaScript object and log the first book's title to the console.
*/

// Your code here
const jsonString = JSON.stringify(library);
console.log(jsonString);

const obj = JSON.parse(jsonString);
console.log(obj[0].title);

/* Task 7
Create an array named `students`, where each student has a `name`, `age`, and `grade`.
Log the name of any student who has a grade higher than 90.
*/

// Your code here
const students = [
  { name: "Sarah", age: 19, grade: 88 },
  { name: "Mike", age: 19, grade: 96 },
  { name: "John", age: 19, grade: 102 },
];

const studentGrade = students.filter((student) => student.grade > 90);

console.log(studentGrade);

/* Task 8
Define an object named `car` with properties for `brand`, `model`, `year`, and `isElectric`.
Use a function to check if the car is electric. If it is, log `"This car is eco-friendly!"`. Otherwise, log `"This car runs on fuel."`
*/

// Your code here
const car = {
  brand: "BMW",
  model: "M440i",
  year: 2025,
  isElectric: false,
};
const checkElectric = () => {
  if (car.isElectric) {
    console.log("This car is eco-friendly!");
  } else {
    console.log("This car runs on fuel.");
  }
};

/* Task 9
Create a `movies` array where each movie is an object with properties for `title`, `director`, and `rating`.
Write a loop that logs all movie titles with a rating higher than 8.
*/

// Your code here
const movies = [
  {
    title: "Exhuma",
    director: "Jang Jae-hyun",
    rating: 6.9,
  },
  {
    title: " Dune: Part Two",
    director: "Denis Villeneuve",
    rating: 8.5,
  },
  {
    title: "Anora",
    director: "Sean Baker",
    rating: 9.0,
  },
];

const checkRating = movies.filter((movie) => movie.rating > 8.0);
console.log(checkRating);

/* Task 10
Write a function `findOldestCar` that takes an array of car objects and returns the car with the earliest `year`.
*/

// Your code here

const cars = [
  {
    brand: "BMW",
    model: "M440i",
    year: 2025,
  },
  {
    brand: "Porsche",
    model: "981",
    year: 2012,
  },
  {
    brand: "Ferrari",
    model: "Monza SP",
    year: 2019,
  },
];

// const findOldestCar = (array) => {
//   const oldestCar = Math.min(array[year]);
//   console.log(oldestCar);
// };
// findOldestCar(cars);

/* Task 11
Define a `userProfiles` array containing objects representing users.
Each user should have a `username`, `email`, and `isAdmin` property.
Write a function that filters and returns only the users who are administrators.
*/

// Your code here
const userProfiles = [
  {
    username: "Mei",
    email: "mail1@gmaiil.com",
    isAdmin: true,
  },
  {
    username: "Layla",
    email: "mail2@gmaiil.com",
    isAdmin: false,
  },
  {
    username: "Leo",
    email: "mail3@gmaiil.com",
    isAdmin: false,
  },
  {
    username: "Mike",
    email: "mail4@gmaiil.com",
    isAdmin: true,
  },
];

const adminCheck = userProfiles.filter((user) => user.isAdmin);
console.log("Admins are:", adminCheck);

/* Task 12
Define an array named `orders`, where each order contains `orderId`, `customerName`, `totalAmount`, and `status` (either "pending" or "completed").
Write a function that returns only the completed orders.
*/

// Your code here
const orders = [
  {
    orderId: "7337r",
    customerName: "Mei",
    totalAmount: "89€",
    status: "completed",
  },
  {
    orderId: "73y4rt",
    customerName: "John",
    totalAmount: "124€",
    status: "pending",
  },
  {
    orderId: "y73ty3",
    customerName: "Neo",
    totalAmount: "83€",
    status: "completed",
  },
  {
    orderId: "u31y8er",
    customerName: "Harper",
    totalAmountfavoriteBook: "37€",
    status: "pending",
  },
];

const completedOrder = orders.filter((order) => order.status === "completed");
console.log(completedOrder);

/* Task 13
Create an object named `smartphone` with properties for `brand`, `model`, `batteryLife`, and `is5GEnabled`.
Write a function that logs `"This phone supports 5G!"` if `is5GEnabled` is `true`, otherwise logs `"This phone does not support 5G."`
*/

// Your code here

const smartphone = {
  brand: "Samsung",
  model: "s24",
  batteryLife: 16,
  is5GEnabled: true,
};
const is5GCheck = () => {
  if (smartphone.is5GEnabled) {
    console.log("This phone supports 5G!");
  } else {
    console.log("This phone does not support 5G.");
  }
};
is5GCheck();

/* Task 14
Define an object named `fox` with properties `name`, `age`, and `habitat`.
Write a function that logs `"This fox is young"` if its age is under 3, `"This fox is an adult"` if 3 or older.
*/

// Your code here
const fox = {
  name: "Arctic fox",
  age: 5,
  habitat: "Arctic regions",
};
const foxAgeCheck = () => {
  if (fox.age < 3) {
    console.log("This fox is young.");
  } else {
    console.log("This fox is an adult");
  }
};

foxAgeCheck();

/* Task 15
Define an array named `employees`, where each employee has `name`, `position`, and `salary`.
Write a function that calculates the total salary of all employees in the company.
*/

// Your code here
const employees = [
  {
    name: "Mei",
    position: "developer",
    salary: 2200,
  },
  {
    name: "Max",
    position: "developer",
    salary: 2000,
  },
  {
    name: "Hazel",
    position: "secretary",
    salary: 1200,
  },
  {
    name: "Jake",
    position: "senior developer",
    salary: 4200,
  },
];

let totalSalary = 0;

for (let i = 0; i < employees.length; i++) {
  totalSalary += employees[i].salary;
}
console.log("Total salary:", totalSalary);
