//const sum = require("./math");
const { addition, substract, multiply, divide } = require("./math");
test("adds 1 + 2 to equal 3", () => {
  expect(addition(1, 2)).toBe(3);
});
test("2 - 1 to equal 1", () => {
  expect(substract(2, 1)).toBe(1);
});
test("2 * 2 to equal 4", () => {
  expect(multiply(2, 2)).toBe(4);
});
test("4 / 2 to equal 2", () => {
  expect(divide(4, 2)).toBe(2);
});
