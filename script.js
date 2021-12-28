const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");
const timeEl = document.querySelector("#time");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target.name);
  });
});

const updateTime = () => {
  // use Date to gather information from current day
  let currentDate = new Date();
  // get the current time
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  // if hours is > 12 then subtract 12 to not display military time
  if (hours > 12) {
    hours = hours - 12;
  }
  // update the #time display with the current time
  timeEl.textContent = `${hours}:${minutes}`;
};

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  if (b === 0) {
    return `You can't divide by 0`;
  }
  return a / b;
};

// update the time on the 'phone' with initial page load and every minute after
updateTime();
setInterval(updateTime(), 1000);
