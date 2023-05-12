let a = 12;
let b = 8;
let c = 4;
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, c) {
  return a * c;
}

function divide(a, c) {
  return a / c;
}

// Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

function operate(operator, num1, num2) {
  if (operator === '+') {
    return add(num1, num2);
  }
}
