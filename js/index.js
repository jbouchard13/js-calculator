const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");
const timeEl = document.querySelector("#time");
const zeroDiv = document.querySelector("#zeroDiv");
// convert buttons from a nodelist to an array
const buttonsArr = Array.from(buttons);

// create an object to handle which operator is selected
// default state has all options as false
let operator = {
  addition: false,
  subtract: false,
  multiply: false,
  divide: false,
};

// create an object to contain both value inputs that will be operated on
// defaulted to 0
let values = {
  valueOne: 0,
  valueTwo: 0,
};

// set the default value in the display to the first value (0)
display.textContent = values.valueOne.toString();

// set the operator object to its default state
// will be used when calculator is cleared or when an operator is picked
const defaultOperatorState = () => {
  operator.addition = false;
  operator.subtract = false;
  operator.multiply = false;
  operator.divide = false;
};

// create a function to update the operator object depending on which button is clicked
const updateOperator = (operation) => {
  defaultOperatorState();
  if (operation === "addition") {
    operator.addition = true;
  } else if (operation === "subtract") {
    operator.subtract = true;
  } else if (operation === "multiply") {
    operator.multiply = true;
  } else if (operation === "divide") {
    operator.divide = true;
  }
  console.log(operator);
};

// create a function to run the calculator functions
// will take operator type and two numbers as arguments
const runOperations = (operator, valueOne, valueTwo) => {};

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
// add active button css to specific buttons
const addActive = (target) => {
  target.classList.add("button-focus");
};

// remove active button css
const removeActive = () => {
  buttonsArr.forEach((button) => {
    button.classList.remove("button-focus");
  });
};

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
  // clear the operator object
  defaultOperatorState();
  // set the display to 0
  display.textContent = "0";
};

const fullClear = () => {
  clearCalc();
  values.valueOne = 0;
  values.valueTwo = 0;
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

// second event listener to handle when just the div is clicked for 0
zeroDiv.addEventListener("click", (e) => {
  updateDisplay(e.target.dataset.name);
});

console.log(buttonsArr);

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // if clear button click, call the clearCalc function
    if (e.target.name === "clear") {
      fullClear();
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
      removeActive();
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
    else if (e.target.name === "addition") {
      // make the specific button active
      removeActive();
      addActive(e.target);
      updateOperator(e.target.name);
      // take the current value displayed
      let currentValue = display.textContent;
      console.log(currentValue);
      display.dataset.currentValue = currentValue;
      // clear the display to allow the user to input a new value to add
      clearCalc();
      // if another operator is clicked before a number input, display an error
      // add css class to show which operator button is selected
      // when = or any other operator button is clicked, call the add function

      // update the display with the new value
    } else if (e.target.name === "subtract") {
      removeActive();
      addActive(e.target);
      updateOperator(e.target.name);
      clearCalc();
    } else if (e.target.name === "multiply") {
      removeActive();
      addActive(e.target);
      updateOperator(e.target.name);
      clearCalc();
    } else if (e.target.name === "divide") {
      removeActive();
      addActive(e.target);
      updateOperator(e.target.name);
      clearCalc();
    }
  });
});

// update the time on the 'phone' with initial page load and every minute after
updateTime();
setInterval(updateTime, 1000);
