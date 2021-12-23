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

console.log(add(10, 10));
console.log(subtract(20, 5));
console.log(multiply(5, 5));
console.log(divide(4, 2));
console.log(divide(4, 0));
