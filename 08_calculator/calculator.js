const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (nums) {
  return nums.reduce((sum, num) => sum + num, 0);
};

const multiply = function (nums) {
  return nums.reduce((mul, num) => mul * num, 1);
};

const power = function (num, pow) {
  return num ** pow;
};

const factorial = function (num) {
  let result = 1;

  for (let i = 2; i <= num; i++) {
    result *= i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
