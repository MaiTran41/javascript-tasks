const magic8Ball = () => {
  let question = prompt("What cha wanna know today?");
  console.log(question);

  let randomNumber = Math.floor(Math.random() * 8) + 1;
  console.log(randomNumber);

  switch (randomNumber) {
    case (randomNumber = 1):
      return alert("Yes, definitely!");
    case (ranmber = 2):
      return "And the answer is maybe!";
    case (ranmber = 3):
      return "I have no idea. Why are you asking me??";
    case (ranmber = 4):
      return "Yes! Go for it!";
    case (ranmber = 5):
      return "Not you again..ugh. Shake one more time!";
    case (ranmber = 6):
      return "Manifesting...Definitely yes!";
    case (ranmber = 7):
      return "Busy today, come back tomorrow!";
    case (ranmber = 8):
      return "The universe says no this time :( ";
  }
  return;
};

// function getRndInteger(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) ) + min;
// }

console.log(magic8Ball());
