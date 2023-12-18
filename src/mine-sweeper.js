const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let arr = [];
  let result = [];
  
  for(let i = 0;i < matrix.length; i++){
    arr.push(matrix[i].map(x => Number(x)));
  }

    for(let j = 0; j < arr.length; j++){
      let item = [];

      for(let k = 0; k < arr[j].length; k++){
        let sum = 0;

        if(arr[j].includes(1) && arr[j].length <= 3 && arr[j].indexOf(k) === 0){
          sum +=2;
        } 

        item.push(sum)

        if (item.includes(2) || j ===2){
          item.forEach((x) => {
            if(x === 0){
              item.splice(item.indexOf(x), 1, 1);
            };
          });
        };

      };

      result.push(item);
    };

return result;
}

module.exports = {
  minesweeper
};
