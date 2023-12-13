const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let newString = '';

  if (options.hasOwnProperty('separator') === false){
    options.separator = '+';
  };
  if(options.hasOwnProperty('additionSeparator') === false){
    options.additionSeparator = '|';
  };
  if(options.hasOwnProperty('additionRepeatTimes') === false){
    options.additionRepeatTimes = 1;
  };
  if(options.hasOwnProperty('addition') === false){
    options.addition = ''; 
  };
  if(options.hasOwnProperty('repeatTimes') === false){
    options.repeatTimes = 1;
  };
   
  for(let i = 0; i < options.additionRepeatTimes; i+=1){
    str += options.addition + options.additionSeparator;
  };
     
  let arr = str.split('').slice(0, -options.additionSeparator.length).join('');
  
  newString += (arr +options.separator);

  return newString.repeat(options.repeatTimes).slice(0, -(options.separator.length));
}

module.exports = {
  repeater
};
