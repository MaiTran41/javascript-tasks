const magic8Ball = () => {
  let question = prompt("What cha wanna know today?");
  console.log(question);

  let randomNumber = Math.floor(Math.random() * 8) + 1;
  console.log(randomNumber);

  let answer = "";

  switch (randomNumber) {
    case 1:
      answer = "Yes, definitely!";
      break;
    case 2:
      answer = "And the answer is maybe!";
      break;
    case 3:
      answer = "I have no idea. Why are you asking me??";
      break;
    case 4:
      answer = "Yes! Go for it!";
      break;
    case 5:
      answer = "Not you again..ugh. Shake one more time!";
      break;
    case 6:
      answer = "Manifesting...Definitely yes!";
      break;
    case 7:
      answer = "Busy today, come back tomorrow!";
      break;
    case 8:
      answer = "The universe says no this time :( ";
      break;
  }
  alert(answer);
};

// function getRndInteger(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) ) + min;
// }

console.log(magic8Ball());
