// Javascripts is fun!
/* 
Create two variables:
numString1 with the value "42".
numString2 with the value "3.14".
Use parseInt() to convert numString1 into an integer.
Use parseFloat() to convert numString2 into a floating-point number.
Print the results using console.log() with messages:
"The integer is 42."
"The floating-point number is 3.14."
*/
let numString1 = "42";
let numString2 = "3.14";

let integer1 = parseInt(numString1);
let integer2 = Number.parseInt(numString1);

let float1 = parseFloat(numString2);
// Same w the 1st one, just more proper syntax cox parseFloat() belongs to `Number`object
let float2 = Number.parseFloat(numString2);

console.log("The integer is " + integer1);
console.log("The floating-point number " + integer2);

/* Create a variable price and assign it the value 19.56789.
Use .toFixed() to:
Round the price to 2 decimal places.
Round the price to no decimal places.
Print both results using console.log() with messages:
"Price with 2 decimals: 19.57"
"Price with no decimals: 20"
 */

let price = 19.56789;

const priceTwoDecimal = price.toFixed(2);
const priceNoDecimal = price.toFixed(0);

console.log("Price with 2 decimals: " + priceTwoDecimal);

console.log(`Price with 2 decimals: ${priceTwoDecimal}`);
console.log("Price with no decimals: " + priceNoDecimal);

/* 

Create two variables:
num1 with the value "10".
num2 with the value "notANumber".
Convert num1 and num2 using parseFloat().
Print the sum of num1 and num2 using console.log().
(Note: If one value is NaN, the result will be NaN, which will be printed automatically.)
Example output:
NaN (if the addition involves invalid input).
10 (if both inputs are valid numbers).

*/

let num1 = "10";
let num2 = "notANumber";

let convertedNum1 = parseFloat(num1);
let convertedNum2 = parseFloat(num2);

let sumNum = convertedNum1 + convertedNum2;

console.log(`The sum is ${sumNum}`);

/* Create a variable userInput and assign it the value "25.75 apples".
Use parseFloat() to extract the numeric part from the input.
Use .toFixed() to round the number to 1 decimal place.
Print the result using console.log().
(If userInput doesn't start with a number, the result will be NaN.)
Example outputs:
"25.8" (if the input starts with a valid number).
"NaN" (if the input is invalid).

 */

let userInput = "25.75 apples";
const userInputInterger = parseFloat(userInput);

console.log(userInputInterger.toFixed(1));

/* 
1. Create a variable num and assign it the value 5.67.
2. Use the Math.round() method to round num to the nearest whole number.
3. Use the Math.floor() method to round it down to the nearest whole number.
4. Use the Math.ceil() method to round it up to the nearest whole number.
5. Print the results using console.log() with messages like: "The rounded value is 6." 
*/

let num = 5.67;

let roundedNum = Math.round(num);

let floorNum = Math.floor(num);

let ceilNum = Math.ceil(num);

console.log("The rounded number is", roundedNum);
console.log("The floor number is " + floorNum);
console.log("The ceil number is " + ceilNum);
/* 
1. Use the Math.random() method to generate a random number between 0 and 1.
2. Multiply the result by 10 and use Math.floor() to round it down to the nearest whole number.
3. Print the random number using console.log() with a message like: "Your random number is 4." 
*/

let randomNum = Math.random();

let roundedRandomNum = Math.floor(randomNum * 10);
console.log("Your random number is", roundedRandomNum);

/* 
1. Create three variables: a = 12, b = 7, and c = 20.
2. Use the Math.max() method to find the largest number among a, b, and c.
3. Use the Math.min() method to find the smallest number among them.
4. Print the results using console.log() with messages like:
"The largest number is 20."
"The smallest number is 7." 

*/

let a = 12;
let b = 7;
let c = 20;

let maxNum = Math.max(a, b, c);
let minNum = Math.min(a, b, c);

console.log("The largest number is", maxNum);
console.log("The smallest number is", minNum);
