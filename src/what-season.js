const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(date === undefined){
    return 'Unable to determine the time of year!';
  };

  if(Object.getOwnPropertyNames(date).length > 0 || !(date instanceof Date)){
    throw new Error("Invalid date!");
  };

  let month = date.getMonth();

  if(month <= 1 || month === 11) return 'winter';
  if(month <= 4 && month > 1) return 'spring';
  if(month <= 7 && month > 4) return 'summer';
  if(month < 11 && month > 7) return 'autumn';

};

module.exports = {
  getSeason
};
