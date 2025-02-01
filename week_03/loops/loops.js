// loops_01
/* 
Write a function named logOddNumbers:
- Use a loop to output all odd, positive numbers less than 100, starting from 1.
Example output in the console: 1, 3, 5, 7, ..., 99. 
*/

// const logOddNumbers = () => {
//   for (i = 1; i < 100; i++) {
//     if (i % 2 !== 0) {
//       console.log(i);
//     }
//   }
// };

// logOddNumbers();

// write for loop and log the number from 1 to 5
const logNumber = () => {
  for (i = 1; i <= 5; i++) {
    console.log(i);
  }
};
logNumber();

// create a while loop and log all number from 1 to 5

const logNumber1 = () => {
  let i = 1;
  while (i <= 5) {
    console.log(i);
    i++;
  }
};
logNumber1();

// loops_02
/* 
Write a function named logEvenNumbers:
- Use a loop to display all even numbers less than 100 in the pattern: 2, 98, 4, 96, ..., 50.
Display all numbers in a single line in the console.; 
*/

const logEvenNumbers = () => {
  for (i = 2; i < 100; i++) {
    if (i % 2 === 0) {
      console.log(i, 100 - i);
    }
  }
};

logEvenNumbers();

// loops_03
/* 
Write a function named calculateAverageSpeed:
- Continuously prompt the user to input distance (in kilometers) and time (in hours).
- After each input, calculate and log the average speed in the console.
- Stop asking for inputs when the user enters 0 for distance. 
*/

const calculateAverageSpeed = () => {
  let distance;
  let time;
  let speed;

  while (distance !== 0) {
    distance = Number(window.prompt("Please input distance (in kilometers) "));

    if (distance === 0) {
      break;
    }

    time = Number(window.prompt("Please input time (in hours) "));

    speed = distance / time;
    console.log("The average speed is:", speed);
  }
};
calculateAverageSpeed();

// loop_04
/* 
Write a function named countEvenNumbers:
- Prompt the user to input 20 numbers one by one.
- After all numbers are entered, log how many of them were even.
Display the result in the console. 
*/

const countEvenNumbers = () => {
  let number;
  let count = 0;
  let numberArr = [];

  while (count < 20) {
    number = prompt("Input a number");
    if (number % 2 === 0) {
      count = numberArr.push(number);
    }
    count++;
  }
  console.log(numberArr);
};
countEvenNumbers();

// Another way: use for loop

// loop_05
/* 
Write a function named calculateAverageUntilZero:
- Continuously prompt the user to input numbers.
- Stop asking for inputs when the user enters 0.
- Calculate and log the average of all entered numbers in the console once the loop ends.
 */

const calculateAverageUntilZero = () => {
  let sum = 0;
  let count = 0;
  let currentInputNumber;

  // use do...while loop
  //  do
  //   statement
  //   while (condition);

  // while (inputNumber !== 0) {
  //   inputNumber = Number(prompt("Please put a number"));
  //   sum += inputNumber;
  //   numArr.push(inputNumber);
  //   count++;
  //   console.log(numArr);

  //   if (inputNumber === 0) {
  //     averageNum = sum / (numArr.length - 1);
  //     console.log(averageNum);

  //     break;
  //   }
  // }

  do {
    currentInputNumber = Number(prompt("Please put a number"));
    sum += currentInputNumber;
    count++;
    console.log("current input:", currentInputNumber);
  } while (currentInputNumber !== 0);
  const averageNum = sum / count;
  console.log("averageNum: ", averageNum);
};
calculateAverageUntilZero();

// loop_06
/* 
Write a function named askToContinue:
- Prompt the user to enter a number.
- Then, ask: "Do you want to continue giving numbers? (y/n)".
- If the user answers "y", ask for another number.
- If the user answers "n", stop asking and log the average of all entered numbers in the console. 
*/

const askToContinue = () => {
  let answer = "y";
  let count = 0;
  let sum = 0;

  while (answer === "y") {
    const inputNumber = Number(prompt("Enter a number"));
    sum += inputNumber;
    count++;

    answer = prompt("Do you want to continue giving numbers? (y/n)");
  }
  console.log("count is", count);

  console.log("sum is", sum);

  const average = sum / count;
  console.log("average", average);
};

askToContinue();

// loop_07
/* 
Write a function named sumAndAverage:
- Ask the user to input ten numbers.
- Calculate and log:
    - The sum of the numbers.
    - The average of the numbers.
    - The smallest and largest numbers.
Display all results in the console.
*/

const sumAndAverage = () => {
  const timesOfInput = 10;
  let sum = 0;

  for (let count = 0; count < timesOfInput; count++) {
    const inputNumber = Number(prompt("Input 10 numbers"));
    console.log("Input numbers are: ", inputNumber);
    sum += inputNumber;
  }
  console.log(sum);
  const average = sum / timesOfInput;
  console.log(average);
};
sumAndAverage();

// loop_08
/* 
Write a function named findMinMax:
- Ask the user how many numbers they want to input.
- Then prompt them to enter that many numbers.
- Once all numbers are entered, determine and log:
- The smallest number.
- The largest number.
Display the results in the console. 
*/

// Use array & array methods
// const findMinMax = () => {
//   let count = 0;
//   let inputNumArr = [];

//   const inputCount = Number(prompt("How many numbers do you want to input?"));
//   console.log("inputCount", inputCount);

//   do {
//     const inputNum = Number(prompt("Enter a number"));
//     count++;
//     inputNumArr.push(inputNum);
//   } while (count < inputCount);

//   const minNum = Number(Math.min(...inputNumArr));
//   const maxNum = Number(Math.max(...inputNumArr));

//   console.log("min", minNum);
//   console.log("max", maxNum);
// };
// findMinMax();

// Use non-array approach
const findMinMax = () => {
  let count = 0;
  let min, max;
  let inputCount;

  do {
    inputCount = Number(prompt("How many numbers do you want to input?"));

    if (inputCount === 0) {
      console.log("0 is an invalid input");
    }
    console.log("inputCount", inputCount);
  } while (inputCount === 0);

  while (count < inputCount) {
    const currInputNum = Number(prompt("Enter a number"));
    count++;

    if (min === undefined) {
      min = currInputNum;
      if (inputCount === 1) {
        max = currInputNum;
      }
      continue;
    }
    if (currInputNum >= min) {
      max = currInputNum;
      continue;
    }
    if (currInputNum < min) {
      if (max === undefined) {
        max = min;
      }
      min = currInputNum;

      continue;
    }
    if (currInputNum > max) {
      max = currInputNum;
      continue;
    }
  }
  console.log("min", min);
  console.log("max", max);
};
findMinMax();

// loop_09
/* 
Write a function named sumFromOneToHundred:
- Use a loop to calculate the sum of all numbers from 1 to 100.
Log the final sum in the console.
*/

const sumFromOneToHundred = () => {
  let sum = 0;

  for (let count = 1; count <= 100; count++) {
    sum += count;
  }
  console.log("sum", sum);
};

sumFromOneToHundred();

// loop_10
/* 
Write a function named countdownTimer:
- Take a number (e.g., 10) as input and simulate a countdown in the console.
Log each number in descending order until 0, and then log: "Time's up!".
 */

const countdownTimer = (input) => {
  for (let count = input; count >= 0; count--) {
    console.log("counting down...", count);
  }
  console.log("Time is up!");
};
countdownTimer(5);

// loop_11
/* 

Write a function named generateMultiplicationTable:
- Take a number (e.g., 5) as input.
- Use a loop to generate the multiplication table for that number.
Log the table in the console.

Example for 5:

5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50
 */

const generateMultiplicationTable = (input) => {
  let multiplication = 0;
  for (let count = 1; count <= 10; count++) {
    multiplication = input * count;
    console.log(`${input} x ${count} = ${multiplication}`);
  }
};

generateMultiplicationTable(3);

// Loop_12
/* 
Write a function named buildGroceryList:
- Prompt the user to input grocery items one by one.
- Stop when the user types "done".
Log the complete grocery list in the console.
 */

const buildGroceryList = () => {
  let groceryList = "";

  // do {
  //   itemInput = prompt("Input grocery items here");
  //   if (itemInput === "done") {
  //     groceryList = groceryList.trim();
  //     break;
  //   }
  //   groceryList += itemInput;
  //   groceryList += " ";
  //   console.log(itemInput);
  //   } while (itemInput !== "done");

  do {
    const itemInput = prompt("Input grocery items here");
    if (itemInput === "done") {
      groceryList = groceryList.trim();
      break;
    }
    groceryList += itemInput;
    groceryList += " ";
    console.log(itemInput);
  } while (true);

  console.log(groceryList);
};
buildGroceryList();

// loop_13
/* 
Write a function named validatePassword:
- Use a loop to allow the user to input a password.
- If the password is "correct123", log: "Access granted!" and exit the loop.
- If incorrect, prompt the user again with: "Try again!".
 */

const validatePassword = () => {
  let passwordInput;
  const validPassword = "correct123";

  passwordInput = prompt("Input a password!");

  while (passwordInput !== validPassword) {
    passwordInput = prompt("Try again!");
  }
  console.log("Access granted!");
};
validatePassword();

// Loop_14
/* 
Write a function named createWordPyramid:
- Take a word (e.g., "code") as input.
- Use a loop to build a pyramid pattern:
    Example for "code":
    c
    co
    cod
    code
 */

const createWordPyramid = (input) => {
  let row = "";

  for (let count = 0; count < input.length; count++) {
    row += input[count];
    console.log(row);
  }
};

createWordPyramid("code");
