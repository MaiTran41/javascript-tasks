/* Task 8
Create a constructor function `Car` that takes `brand`, `model`, and `year`.
In the constructor, add a method `age()` that calculates the car’s age.
Instantiate a new `Car` and display its age on the webpage.
*/

// Your code here
function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.age = function age() {
    return (carAge = 2025 - this.year);
  };
}
const car = new Car("BMW", "X5", 2020);

const carAgeDisplay = document.createElement("p");
carAgeDisplay.textContent = "The car age is: " + car.age();

document.body.appendChild(carAgeDisplay);
