const calc = require("./calc.js");

describe("addition", () => {
  test("adds 2 and 2", () => {
    expect(calc.add(2, 2)).toBe(4);
  });

  test("adds positive and negative numbers", () => {
    expect(calc.add(2, -4)).toBe(-2);
  });

  test("adds two negative numbers", () => {
    expect(calc.add(-2, -2)).toBe(-4);
  });
});

describe("subtraction", () => {
  test("subtract two positive numbers", () => {
    expect(calc.subtract(4, 2)).toBe(2);
  });

  test("subtract a negative from a positive", () => {
    expect(calc.subtract(4, -2)).toBe(6);
  });

  test("subtract a positive from a negative", () => {
    expect(calc.subtract(-5, 2)).toBe(-7);
  });
});

describe("multiplication", () => {
  test("multiply two positives", () => {
    expect(calc.multiply(4, 4)).toBe(16);
  });

  test("multiply positive and negative", () => {
    expect(calc.multiply(5, -4)).toBe(-20);
  });

  test("multiply two negatives", () => {
    expect(calc.multiply(-5, -5)).toBe(25);
  });
});

describe("division", () => {
  test("divide positive by positive", () => {
    expect(calc.divide(10, 2)).toBe(5);
  });
  test("divide positive by negative", () => {
    expect(calc.divide(40, -4)).toBe(-10);
  });
  test("divide negative by negative", () => {
    expect(calc.divide(-20, -4)).toBe(5);
  });
  test("informs user if dividing by 0", () => {
    expect(calc.divide(10, 0)).toBe("You can't divide by 0");
  });
});

describe("swap positive to negative or vice versa", () => {
  test("return the negative string from the positive string", () => {
    expect(calc.posOrNeg("20")).toBe("-20");
  });

  test("return the positive string from the negative string input", () => {
    expect(calc.posOrNeg("-40")).toBe("40");
  });
});
