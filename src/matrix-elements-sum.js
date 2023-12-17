const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;

  for(let i = 0; i < matrix.length; i += 1){

    if(i !== 0){
      matrix[i].forEach((x,ind) => {
        if((matrix[i - 1][ind]) !== 0) sum += x});
    }
    else{
      sum += matrix[i].reduce((a,b) => a+b, 0);
    };
  };
    return sum;
};

module.exports = {
  getMatrixElementsSum
};
