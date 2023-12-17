const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  if (Array.isArray(arr)){

    let arrTransform = [...arr];
    let doublePrev = arrTransform[arrTransform.indexOf('--double-prev')-1];

    if(arrTransform.includes('--double-next') && arrTransform.includes('--double-prev')){
      arrTransform.splice(arrTransform.indexOf('--double-prev') -2, 3, doublePrev, doublePrev, doublePrev);                       
    }
    else if(arrTransform.includes('--double-prev') && arrTransform.indexOf('--double-prev') !== 0){
      arrTransform.splice(arrTransform.indexOf('--double-prev') -2, 3);
    }
    else if(arrTransform.indexOf('--double-prev') === 0){
      arrTransform.splice(arrTransform.indexOf('--double-prev'), 1);
    }
    else if(arrTransform.includes('--double-next') && arrTransform.includes('--discard-prev')){
      arrTransform.splice(arrTransform.indexOf('--discard-prev') -2, 3, arrTransform[arrTransform.indexOf('--discard-prev')-1],);                       
    }
    else if(arrTransform.includes('--double-next') && arrTransform.at(-1) !== '--double-next'){
      arrTransform.splice(arrTransform.indexOf('--double-next'), 1, (arrTransform.indexOf('--double-next')+1));
    }
    else if(arrTransform.at(-1) === '--double-next'){
      arrTransform.splice(arrTransform.indexOf('--double-next'), 1);
    }
    else if(arrTransform.includes("--discard-prev") && arrTransform.indexOf('--discard-prev')!== 0){
      arrTransform.splice((arrTransform.indexOf('--discard-prev') -1), 2);
    }
    else if(arrTransform.indexOf('--discard-prev')=== 0){
      arrTransform.splice(arrTransform.indexOf('--discard-prev'), 1);
    }
    else if(arrTransform.includes('--discard-next') && arrTransform.at(-1) !== '--discard-next'){
      arrTransform.splice(arrTransform.indexOf('--discard-next') -2, 2);
    }
    else if(arrTransform.at(-1) === '--discard-next'){
     arrTransform.splice(arrTransform.indexOf('--double-next'), 1);
    }
  return arrTransform.filter(x => x !==  "--discard-next")
  } 
throw new Error('\'arr\' parameter must be an instance of the Array!');           
}




module.exports = {
  transform
};
