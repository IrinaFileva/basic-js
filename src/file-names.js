const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let array = [];
 
  
  for(let i = 0; i < names.length; i+=1){
    let num = 1;

    if(array.includes(names[i]) && i === (names.length -1)){
       array.push(names[i] + `(${num + 1})`);
    }
    if(array.includes(names[i]) && i !== (names.length -1)){
       array.push(names[i] + `(${num})`);
    }else{
       array.push(names[i]);
    };
  }
  if( names.length !== array.length){
    return array.slice(0,-1);
  };
  
  return array;
}

module.exports = {
  renameFiles
};
