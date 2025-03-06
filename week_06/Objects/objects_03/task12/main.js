/* Task 12
Create a constructor function `Employee` with `name`, `position`, and `salary`.
Add a method `increaseSalary(percent)` that increases the salary by a given percentage.
Create an employee and increase their salary dynamically.
*/

// Your code here

function Employee(name, position, salary) {
  this.name = name;
  this.position = position;

  this.increaseSalary = function (percent) {
    return (this.salary = (salary * percent) / 100 + salary);
  };
}

const employee = new Employee("Mei", "intern", 1000);

console.log(employee.increaseSalary(15));
console.log(employee.increaseSalary(5));
