const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  
  let arr = String(n).split('').map(x => Number(x)).reduce((a, b) => a + b, 0);

  if(String(arr).length !== 1){
    let total = String(arr).split('').map(x => Number(x)).reduce((a, b) => a + b, 0);
    return total;
  }
  else{
    return arr;
  };
}

module.exports = {
  getSumOfDigits
};
