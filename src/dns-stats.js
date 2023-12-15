const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let map = new Map();
  let result = {};

    for(let i of domains){
      let str = '';
      let itemArr = i.split('.').reverse();
        for(let y of itemArr){ 
          str = str + '.' + y;
          if(map.has(str)){
            map.set(str, map.get(str) + 1);
          } 
           else{
           map.set(str, 1);
          };
        };  
    };
  for( let key of map){
    result[key[0]] = key[1];
  }
  return result;
};

module.exports = {
  getDNSStats
};
