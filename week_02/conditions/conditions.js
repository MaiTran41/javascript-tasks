/* 
Write a function named checkAdult:
Take an age as a parameter.
If age is 18 or older, return "You are an adult."
Otherwise, return nothing.
Call the function with different ages and print the result.
 */

const checkAdult = (age) => {
  return age >= 18 ? "You are an adult." : "";
};

console.log(checkAdult(20));
console.log(checkAdult(17));

/* 
  Write a function named checkForFox:
  Take a boolean parameter hasFox.
  If hasFox is true, return "You have a fox as a pet!"
  Otherwise, return "No fox detected!"
  Call the function with true and false and print the result. 
  */

const checkForFox = (hasFox) => {
  return hasFox ? "You have a fox as a pet!" : "No fox detected!";
};

console.log(checkForFox(true));
console.log(checkForFox(false));
/* 
  Write a function named getGrade:
  Take a score as a parameter.
  If score is 90 or higher, return "Grade A".
  If score is between 80 and 89, return "Grade B".
  For any other score, return "Grade C".
  Call the function with scores like 85 and 75 and print the result. 
  */

const getGrade = (score) => {
  if (score >= 90) {
    return "Grade A";
  } else if (score >= 80 && score < 89) {
    return "Grade B";
  } else {
    return "Grade C";
  }
};

console.log(getGrade(85));
console.log(getGrade(75));

/* 
  Write a function named canEat:
  Take two parameters: isHungry and hasFood.
  If both are true, return "Time to eat!".
  If either is false, return "You need to find food!"
  Call the function with different combinations of isHungry and hasFood. 
  */

const canEat = (isHungry, hasFood) => {
  if (isHungry && hasFood) {
    return "Time to eat!";
  }
  return "You need to find food!";
};

console.log(canEat(true, true));
console.log(canEat(true, false));
console.log(canEat(false, true));
console.log(canEat(false, false));

/* 
  Write a function named checkAnimal:
  Take a parameter animalType.
  Use a ternary operator to return:
  "You have a clever companion!" if animalType is "fox".
  "Not a fox, but still cool!" otherwise.
  Call the function with values like "fox" and "cat". 
  */

const checkAnimal = (animalType) => {
  return animalType === "fox"
    ? "You have a clever companion!"
    : "Not a fox, but still cool!";
};
console.log(checkAnimal("fox"));
console.log(checkAnimal("cat"));

/*
  Write a function named isEven:
  Take a number as a parameter.
  Return true if the number is even, or false if it’s odd.
  Call the function with numbers like 4 and 7, and print "The number is even!" or "The number is odd!" based on the result. 
  */

const isEven = (number) => {
  return number % 2 === 0 ? true : false;
};

console.log(isEven(4));
console.log(isEven(7));

/* 
  Write a function named getAnimalDescription:
  Take a parameter favoriteAnimal.
  Use a switch statement to:
  If "fox", return "Foxes are sly and smart!"
  If "dog", return "Dogs are loyal friends."
  If "cat", return "Cats are curious and independent."
  For any other animal, return "All animals are awesome!"
  Call the function with different animal names. 
  */

const getAnimalDescription = (favoriteAnimal) => {
  switch ((favoriteAnimal = "")) {
    case "fox ":
      return "Foxes are sly and smart!";
      break;
    case "dog ":
      return "Dogs are loyal friends.";
      break;
    case "cat ":
      return "Cats are curious and independent.";
      break;
    default:
      return "All animals are awesome!";
  }
};
console.log(getAnimalDescription("fox"));
console.log(getAnimalDescription("cat"));
console.log(getAnimalDescription("dog"));
console.log(getAnimalDescription("bear"));
console.log(getAnimalDescription("cappybaras"));

/*
  Write a function named canVote:
  Take an age as a parameter.
  Return true if the age is 18 or older, otherwise false.
  Print "Eligible to vote" or "Not eligible to vote" based on the result of the function. 
  */

const canVote = (age) => {
  return age >= 18 ? "Eligible to vote" : "Not eligible to vote";
};

console.log(canVote(17));
console.log(canVote(46));

/* 
  Write a function named canEnterEvent:
  Take two parameters: age and hasID.
  If age is 18 or older AND hasID is true, return "You can enter the event."
  Otherwise, return "You cannot enter."
  Call the function with different combinations of age and hasID. 
  */

const canEnterEvent = (age, hasID) => {
  return age >= 18 && hasID ? "You can enter the event." : "You cannot enter.";
};
console.log(canEnterEvent(18, true));
console.log(canEnterEvent(15, true));
console.log(canEnterEvent(86, false));
console.log(canEnterEvent(86, true));

/* 
  Write a function named findFox:
  Take two parameters: hasFox and foxName.
  If hasFox is true AND foxName equals "Fiona", return "Fiona the fox is here!"
  Otherwise, return "No foxes found."
  Call the function with different fox names. 
  */

const findFox = (hasFox, foxName) => {
  return hasFox && foxName === "Fiona"
    ? "Fiona the fox is here!"
    : "No foxes found.";
};

console.log(findFox(true, "Fiona"));
console.log(findFox(false, "Fiona"));
console.log(findFox(true, "Moana"));
console.log(findFox(true, "Lilo"));

/* 
  Write a function named getDayName:
  Take a parameter day.
  Use a switch statement to:
  Return the name of the day (1 = "Monday", 2 = "Tuesday", etc.).
  Use default to return "Invalid day" for invalid values.
  Call the function with valid and invalid day numbers. 
  */
const getDayName = (day) => {};
console.log(getDayName());

/* 
  Write a function named checkFoxLover:
  Take two parameters: age and likesFoxes.
  If age is 18 or older:
  Check if likesFoxes is true.
  If true, return "You are an adult who likes foxes!"
  Otherwise, return "Not a fox fan, but that’s okay!"
  Call the function with different ages and preferences.
   */

const checkFoxLover = (age, likesFoxes) => {
  return age >= 18 && likesFoxes
    ? "You are an adult who likes foxes!"
    : "Not a fox fan, but that’s okay!";
};
console.log(checkFoxLover(19, false));
console.log(checkFoxLover(29, true));
console.log(checkFoxLover(12, true));
console.log(checkFoxLover(12, false));

/* 
  Write a function named planAdventure:
  Take three parameters: isWeekend, isSunny, and likesFoxes.
  Use logical operators:
  If it’s the weekend AND sunny AND likes foxes, return "Perfect day for a fox adventure!"
  If it’s the weekend OR sunny, return "Good day, but not perfect."
  Otherwise, return "Maybe another day."
  Call the function with different combinations of conditions. 
  */

const planAdventure = (isWeekend, isSunny, likesFoxes) => {
  if (isWeekend && isSunny && likesFoxes) {
    return "Perfect day for a fox adventure!";
  } else if (isWeekend || (isSunny && likesFoxes)) {
    return "Good day, but not perfect.";
  } else {
    return "Maybe another day.";
  }
  return;
};

console.log(planAdventure(true, true, true));
console.log(planAdventure(true, false, true));
console.log(planAdventure(true, true, false));
console.log(planAdventure(false, false, false));

/*
  Write a function named rainAdvice:
  Take a parameter isRaining.
  Use a ternary operator to return:
  "Stay indoors" if isRaining is true.
  "Enjoy the outdoors!" otherwise.
  Call the function with different values for isRaining. 
  */
const rainAdvice = (isRaining) => {
  return isRaining ? "Stay indoors" : "Enjoy the outdoors!";
};
console.log(rainAdvice(true));
console.log(rainAdvice(false));
