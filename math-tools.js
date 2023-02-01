let calculator = {
    PI: 3.14,
    add: (a, b) => a + b, 
    subtract: (a, b) => a - b, 
    multiply: (a, b) => a * b, 
    divide: (a, b) => a / b, 
};

module.exports = calculator;

function factorial(num) {
    let val = 1;
    for (let i = 2; i <= num; i += 1) {
      val *= i;
    }
    return val;
  }
  
  module.exports = { getFactorial: factorial };