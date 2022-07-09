const minutes = document.querySelector(".minutes");
const hours = document.querySelector(".hours");
const seconds = document.querySelector(".seconds");
const startButton = document.querySelector(".start-button");
const pauseButton = document.querySelector(".pause-button");
const resetButton = document.querySelector(".reset-button");
const saveButton = document.querySelector(".save-button");
let cronometro;

let hoursValue = 0;
let minutesValue = 0;
let secondsValue = 0;

startButton.addEventListener("click", handleStartButton);
pauseButton.addEventListener("click", handlePauseButton);
resetButton.addEventListener("click", handleResetButton);
saveButton.addEventListener("click", handleSaveButton);

function handleStartButton() {
  cronometro = setInterval(() => {
    startTime();
  }, 1000);
}

function startTime() {
  secondsValue++;

  if (secondsValue === 60) {
    secondsValue = 0;
    minutesValue++;
  }

  if (minutesValue === 60) {
    minutesValue = 0;
    hoursValue++;
  }

  seconds.innerText = leftNumber(secondsValue);
  minutes.innerText = leftNumber(minutesValue);
  hours.innerText = leftNumber(hoursValue);
}

function handlePauseButton() {
  clearInterval(cronometro);
}

function handleResetButton() {
  clearInterval(cronometro);
  hoursValue = 0;
  minutesValue = 0;
  secondsValue = 0;

  seconds.innerText = "00";
  minutes.innerText = "00";
  hours.innerText = "00";
}

function handleSaveButton() {
  const ul = document.querySelector(".time-list");
  const li = document.createElement("li");

  ul.appendChild(li);
  li.innerHTML = `${leftNumber(hoursValue)}:${leftNumber(
    minutesValue
  )}:${leftNumber(secondsValue)}
    <i class="fa-solid fa-trash-can" onclick='handleDelete(this)'></i>
    `;
}

function handleDelete(event) {
  if (event !== this) {
    event.parentNode.remove();
  }
}

function leftNumber(number) {
  return number < 10 ? `0${number}` : number;
}
