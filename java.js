let hours = 0;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let intervalId = null;
let isRunning = false;

// Get HTML elements
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const milisecondsElement = document.getElementById('miliseconds');
const stopwatchElement = document.querySelector('.stopwatch');


// Add event listeners
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

// Timer/Stopwatch functions
function startTimer() {
  if (!isRunning) {
    intervalId = setInterval(updateTimer, 10);
    isRunning = true;
   
}
}
function stopTimer() {
  clearInterval(intervalId);
  isRunning = false;
}

function resetTimer() {
  hours = 0;
  minutes = 0;
  seconds = 0;
  miliseconds = 0;
  hoursElement.textContent = '00';
  minutesElement.textContent = '00';
  secondsElement.textContent = '00';
  milisecondsElement.textContent = '00';
  clearInterval(intervalId);
  isRunning = false;
  
}

function updateTimer() {
  miliseconds += 10;
  if (miliseconds >= 1000) {
    seconds += 1;
    miliseconds = 0;
  }
  if (seconds >= 60) {
    minutes += 1;
    seconds = 0;
  }
  if (minutes >= 60) {
    hours += 1;
    minutes = 0;
  }
  hoursElement.textContent = pad(hours);
  minutesElement.textContent = pad(minutes);
  secondsElement.textContent = pad(seconds);
  milisecondsElement.textContent = pad(miliseconds);
}

function pad(number) {
  return (number < 10  ?'0' : '') + number;
}

function formatTime(time) {
  const seconds = Math.floor(time / 100) % 60;
  const minutes = Math.floor(time / 6000) % 60;
  const hours = Math.floor(time / 360000);

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}