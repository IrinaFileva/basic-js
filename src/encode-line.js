const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let map = new Map();
  let result = [];
  let arr = str.split('');
  let total = '';
  let arr0 = arr[0];
  let arr1 = arr.at(-1);

  if(str === total) return str;

  for(let item of arr){
    if(map.has(item)){
      map.set(item, map.get(item) + 1);
    }else{
      map.set(item, 1);
    };
  };

  result = [...map.entries()];

  result.map(x => x.reverse());
    
  for( let key of result){
     total = total + key;
  };

  if(arr0 === arr1){
     return total.replaceAll(',','').replaceAll('1','').slice(1) + arr1;
  };
  
  return total.replaceAll(',','').replaceAll('1','');   
 }


module.exports = {
  encodeLine
};
