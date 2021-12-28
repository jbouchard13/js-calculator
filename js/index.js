const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");
const timeEl = document.querySelector("#time");
const zeroDiv = document.querySelector("#zeroDiv");

// calculator functions
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

const posOrNeg = (numberString) => {
  // change the input string to a number
  let number = parseInt(numberString);
  // if the number in the input is > 0
  if (number > 0) {
    // return the same number as a string with a - in front of it
    return `-${number}`;
  } else {
    // if the number is already negative, return the same number without the - symbol
    let positive = numberString.replace("-", "");
    return positive;
  }
};

// second event listener to handle when just the div is clicked for 0
zeroDiv.addEventListener("click", (e) => {
  updateDisplay(e.target.dataset.name);
});

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // if clear button click, call the clearCalc function
    if (e.target.name === "clear") {
      clearCalc();
    }
    // if number or decimal buttons clicked, update the display
    else if (
      e.target.name === "0" ||
      e.target.name === "1" ||
      e.target.name === "2" ||
      e.target.name === "3" ||
      e.target.name === "4" ||
      e.target.name === "5" ||
      e.target.name === "6" ||
      e.target.name === "7" ||
      e.target.name === "8" ||
      e.target.name === "9" ||
      e.target.name === "decimal"
    ) {
      updateDisplay(e.target.name);
    }
    // if the positive/negative button is clicked, update the number
    else if (e.target.name === "negative") {
      let currentNumber = display.textContent;
      if (currentNumber === "0") {
        return;
      }
      let newNumber = posOrNeg(currentNumber);
      display.textContent = newNumber;
    }
    // if the plus button is clicked
    // else if (e.target.name === "addition") {
    //   // take the current value displayed
    //   let currentValue = display.textContent;
    //   // clear the display to allow the user to input a new value to add
    //   clearCalc();
    //   // if another operator is clicked before a number input, display an error
    //   // add css class to show which operator button is selected
    //   // when = or any other operator button is clicked, call the add function
    //   if (e.target.name === "equals" || e.target.name === "addition") {
    //     let addedValue = display.textContent;
    //     // update the display with the new value
    //     let summedValue = add(parseInt(currentValue), parseInt(addedValue));
    //     display.textContent = summedValue;
      }
    }
  });
});

const updateDisplay = (input) => {
  // get number from button clicked (handled with event listener)
  // if input is decimal, set input to '.'
  if (input === "decimal") {
    input = ".";
  }
  // create a variable for the content of the display
  let currentNumber = display.textContent;
  // if display shows 0, display the clicked number by itself
  if (currentNumber === "0") {
    display.textContent = input;
  } else {
    // otherwise, concat the clicked number to the existing number string
    display.textContent = currentNumber + input;
  }
};

const clearCalc = () => {
  // set the display to 0
  display.textContent = "0";
};

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
