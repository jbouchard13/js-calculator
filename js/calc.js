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
    let positive = numberString.replace("-", "");
    return positive;
  }

  // if the number is already negative, return the same number without the - symbol
};

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  posOrNeg,
};
