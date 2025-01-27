/* Declare three string variables using single quotes, double quotes, and backticks. For example:
'Single quoted string'
"Double quoted string"
`Template literal string`
Print all three strings using console.log(). */

const string1 = "cats";

const string2 = "dogs";

const string3 = `Both ${string1} and ${string2} are my favorite pets`;

console.log(string1);
console.log(string2);
console.log(string3);

/*
Declare a variable language and assign it the value "JavaScript".
Create a string using backticks to say: "I am learning JavaScript." by embedding the language variable into the string.
Print the resulting string using console.log(). 
*/
const language = "JavaScript";

const backtickString = `I am learning ${language}`;

console.log(backtickString);

/* Create a variable multiLine and assign it a multi-line string using backticks. Example:
This is line one.
This is line two.
This is line three.
Print the multiLine variable using console.log(). 
*/

const multiLine = `This is line one. 
This is line two. 
This is line three.`;

console.log(multiLine);

/* Declare a variable text and assign it the value "Hello, World!".
Use the .length property to find the length of the string and store it in a variable called textLength.
Print a message like: "The length of the text is 13." */

const text = "Hello, World!";

const textLength = text.length;

console.log(`The length of the text is ${textLength}.`);

/* Declare a variable word and assign it the value "JavaScript".
Use bracket notation to access:
The first character of the string.
The last character of the string.
Print messages like:
"The first character is J."
"The last character is t." */

const word = "JavaScript";

const firstCharacter = word[0];
const lastCharacter = word[word.length - 1];

console.log(`The first character is ${firstCharacter}.`);
console.log(`The last character is ${lastCharacter}.`);

/* Create a variable greeting and assign it the value "Hello, World!".
Convert the string to:
Uppercase using .toUpperCase().
Lowercase using .toLowerCase().
Print both results using console.log().
Example output:
"HELLO, WORLD!"
"hello, world!" */

const greeting = "Hello, World!";

const upperCaseGreeting = greeting.toUpperCase();
const lowerCaseGreeting = greeting.toLowerCase();

console.log(upperCaseGreeting);
console.log(lowerCaseGreeting);

/* Create a variable sentence and assign it the value "Learning JavaScript is fun!".
Use .substring() to extract the word "JavaScript" from the sentence.
Print the extracted word using console.log().
Example output:
"Extracted word: JavaScript" */
// Check again
const sentence = "Learning JavaScript is fun!";

const indexofJ = sentence.indexOf("J");
const indexofT = sentence.indexOf("t");
console.log(indexofJ);
console.log(indexofT);

// indexStart() : first char
// indexEnd()

const extractedWord = sentence.substring(indexofJ, indexofT + 1);

console.log(`Extracted word: ${extractedWord} `);

/* Create a variable word and assign it the value "JavaScript".
Use bracket notation ([]) to:
Print the first character of the string.
Print the last character of the string.
Print both results using console.log().
Example output:
"First character: J"
"Last character: t" */

const word2 = "JavaScript";

const firstCha = word2[0];
const lastCha = word2[word2.length - 1];
console.log(`The first character is: ${firstCha}.`);
console.log(`The last character is: ${lastCha}.`);

/* Create a variable messyString and assign it the value " Clean me up! ".
Use .trim() to remove the extra spaces at the beginning and end of the string.
Print the cleaned-up string using console.log().
Example output:
"Cleaned string: Clean me up!"
 */

const messyString = " Clean me up! ";

const cleanedUpString = messyString.trim();

console.log(`Cleaned string: ${cleanedUpString}`);

/* Create a variable phrase and assign it the value "JavaScript is versatile and powerful."
Use .includes() to check if the string contains the word "powerful".
Print the result using console.log().
Example output:
"Does the phrase include 'powerful'? true"
 */

const phrase = "JavaScript is versatile and powerful.";

const doesContain = phrase.includes("powerful");

console.log(doesContain);

console.log(`Does the phrase include 'powerful? ${doesContain}'`);

/* Create a variable text and assign it the value "I like apples.".
Use .replace() to change "apples" to "bananas".
Print the updated string using console.log().
Example output:
"I like bananas."
 */

const text2 = "I like apples.";

const replacedText = text2.replace("apples", "bananas");

console.log(`${replacedText}`);

/* Create a variable longText and assign it the value "The quick brown fox jumps over the lazy dog."
Use .slice() to extract "quick brown fox".
Print the sliced portion using console.log().
Example output:
"Sliced text: quick brown fox" */

const longText = "The quick brown fox jumps over the lazy dog.";

const startIndex = longText.indexOf("The");
const endIndex = longText.indexOf("fox" + 1);

console.log(startIndex, endIndex);

const extractedString = longText.slice(startIndex, endIndex);

console.log(extractedString);

/* Create a variable description and assign it the value " JavaScript is Fun and powerful! ".
Perform the following:
Trim the extra spaces using .trim().
Convert the string to lowercase.
Check if it includes the word "fun".
Replace "powerful" with "amazing".
Print the final string and whether it includes "fun" using console.log().
Example output:
"Final description: javascript is fun and amazing!"
"Does it include 'fun'? true"
 */

const description = " JavaScript is Fun and powerful! ";

const finalDescription = description
  .trim()
  .toLowerCase()
  .replace("powerful", "amazing");

console.log(`"Final description: ${finalDescription}!"
"Does it include 'fun'? ${doesInclude}"`);
