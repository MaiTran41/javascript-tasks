/* Create a function named add that:
Takes two parameters, a and b.
Returns the sum of a and b.
Call the function with the arguments 10 and 5.
Print the result using console.log(). 

Bonus: Call the function multiple times with different arguments and print all the results.
*/

const add = (a, b) => {
  return a + b;
};
console.log(add(5, 10));
console.log(add(25, 30));
console.log(add(5, 50));

/* Create a function named isEven that:
  Takes one parameter, num.
  Returns true if num is even, otherwise returns false.
  Call the function with the arguments 4 and 7.
  Print the results using console.log().
  
  Bonus: Modify the function to use implicit return. 
  */

const isEven = (num) => {
  return num % 2 == 0 ? true : false;
};

console.log(isEven(4));
console.log(isEven(7));

/* Create a function named getLength that:
  Takes one parameter, str.
  Returns the length of str using .length.
  Call the function with the string "JavaScript".
  Print the result using console.log().
  
  */
const getLength = (str) => {
  return str.length;
};

console.log(getLength("JavaScript"));

/* Create a function named capitalize that:
  Takes one parameter, str.
  Returns the string with the first character in uppercase and the rest in lowercase.
  Call the function with the string "javascript".
  Print the result using console.log().
  
  Hint: Use str[0].toUpperCase() and str.slice(1).toLowerCase().
  
  */

const capitalize = (str) => {
  const firstLetter = str[0].toUpperCase();
  const remainingLetters = str.slice(1).toLowerCase();
  const newStr = firstLetter + remainingLetters;
  console.log(newStr);
};
capitalize("javascript");
capitalize("vietnam");

// console.log(capitalize("javascript"));

/* Create a function named generateRandomNumber that:
  Takes two parameters, min and max.
  Returns a random integer between min and max (inclusive).
  Call the function with the arguments 1 and 10.
  Print the result using console.log().
  
  Hint: Use Math.random(), Math.floor(), and simple math.
  
  */

function generateRandomNumber(min, max) {
  const randomNum = Math.random() * 10;
  const interger = Math.floor(randomNum);
  return interger;
}

console.log(generateRandomNumber(1, 5));

/* Create a function named replaceWord that:
  Takes three parameters, sentence, oldWord, and newWord.
  Returns the sentence with oldWord replaced by newWord.
  Call the function with the sentence "I like apples.", oldWord as "apples", and newWord as "bananas".
  Print the result using console.log(). 
  
  */

function replaceWord(sentence, oldWord, newWord) {
  return (newSentence = sentence.replace(oldWord, newWord));
}

console.log(replaceWord("I like apples.", "apples", "bananas"));
console.log(replaceWord("I like apples.", "apples", "durian"));
console.log(replaceWord("I like apples.", "apples", "jackfruit"));

/* Create a function named containsWord that:
  Takes two parameters, sentence and word.
  Returns true if sentence includes word, otherwise false.
  Call the function with the sentence "JavaScript is fun!" and the word "fun".
  Print the result using console.log().
  
  Bonus: Modify the function to use implicit return. 
  
  */
function containsWord(sentence, word) {
  return sentence.includes(word) ? true : false;
}

console.log(containsWord("JavaScript is fun!", "fun"));
console.log(containsWord("JavaScript is fun!", "awesome"));

/* Create a function named roundNumber that:
  Takes two parameters, num and precision.
  Returns the number rounded to the specified precision (number of decimal places).
  Call the function with 19.56789 and 2.
  Print the result using console.log().
  
  Hint: Use .toFixed().
  
  */

function roundNumber(num, precision) {
  return (roundedNum = num.toFixed(precision));
}

console.log(roundNumber(19.56789, 2));
console.log(roundNumber(22.7372, 1));

/* Create a function named findMax that:
  Takes three parameters, a, b, and c.
  Returns the largest of the three numbers.
  Call the function with the arguments 12, 7, and 20.
  Print the result using console.log().
  
  Hint: Use Math.max(). 
  */

function findMax(a, b, c) {
  return (maxNum = Math.max(a, b, c));
}
console.log(findMax(12, 7, 20));

//  Create a function named cleanAndTransform that:
// Takes one parameter, str.
// Trims whitespace, converts the string to lowercase, and replaces "powerful" with "amazing".
// Returns the transformed string.
// Call the function with " JavaScript is powerful! ".
// Print the result using console.log().

function cleanAndTransform(str) {
  return (transformedString = str
    .trim()
    .toLowerCase(str)
    .replace("powerful", "amazing"));
}
console.log(cleanAndTransform(" JavaScript is powerful! "));
