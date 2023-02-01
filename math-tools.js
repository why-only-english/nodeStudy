function factorial(num) {
    let val = 1;
    for (let i = 2; i <= num; i += 1) {
      val *= i;
    }
    return val;
  }
  
  module.exports = { getFactorial: factorial };