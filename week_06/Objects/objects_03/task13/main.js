/* Task 13
Create an object `timer` with `seconds` and a method `start()` that counts seconds up.
Display the timer in an HTML element and update it every second.
*/

// Your code here

const timerDisplay = document.getElementById("timerDisplay");
const stopTimerBtn = document.getElementById("stopTimer");

const timer = {
  seconds: 0,
  intervalId: null,
  start() {
    this.intervalId = setInterval(() => {
      this.seconds++;
      timerDisplay.textContent = this.seconds;
    }, 1000);
  },

  reset() {
    console.log(this);

    if (this.intervalId === null) {
      return;
    }
    clearInterval(this.intervalId);

    this.seconds = 0;
    timerDisplay.textContent = this.seconds;
    this.intervalId = null;
  },
};

timer.start();

// use bind() becos when calling `reset()`, this now prefers to the `stopTimerBtn`
stopTimerBtn.addEventListener("click", timer.reset.bind(timer));
