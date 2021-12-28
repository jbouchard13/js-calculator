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
  // if minutes are less than 10 make sure they display as 00, 01, 02, etc
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  // update the #time display with the current time
  timeEl.textContent = `${hours}:${minutes}`;
};

// update the time on the 'phone' with initial page load and every minute after
updateTime();
setInterval(updateTime, 1000);
