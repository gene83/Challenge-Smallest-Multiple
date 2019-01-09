/**
 * Build a function that finds the smallest positive number that is evenly
 * divisible by all of the numbers starting from 1 up to the value passed into your function.
 *
 * @param  { Number } ceiling This value will serve as your ceiling.
 * @return { Number }         Lowest Positive Number that is evenly divisible by all numbers
 *                            between 1 and `ceiling`
 */
module.exports = function(ceiling) {
  const numbers = [];
  let result = 1;
  let solved = false;

  for (let i = ceiling; i > 0; i--) {
    numbers.push(i);
  }

  while (!solved) {
    for (let i = 0; i < numbers.length; i++) {
      if (result % numbers[i] === 0) {
        solved = true;
      } else {
        solved = false;
        result++;
        break;
      }
    }
  }

  return result;
};
