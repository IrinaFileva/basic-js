const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  alf = 'abcdefghijklmnopqrstuvwxyz';

  constructor(straight = true){
    this.straight = straight;
  }

  encrypt(message, key) {

    if (message === undefined || key === undefined){
      throw new Error ('Incorrect arguments!');
    };

    message = message.toLowerCase();
    key = key.toLowerCase();

    if(message.length > key.length){
      key = key.padEnd(message.length, key);
    }
    else if(key.length > message.length){
      key = key.slice(0, message.length);
    };
    
    let n = 0;
    let result = [];

    for(let i = 0; i < message.length; i++){

      let valMessage = message[i];
      let valKey = key[i - n];

      if(!(this.alf.includes(valMessage))){
        result.push(valMessage);
        n++;
      }
      else{
        let indMessage = this.alf.indexOf(valMessage);
        let indKey = this.alf.indexOf(valKey);
        let index = (indMessage + indKey) % 26;
        let item = this.alf[index];
          result.push(item);
      };
    };

    if(!this.straight){
      return result.reverse().join('').toUpperCase();
    }
    
    return result.join('').toUpperCase();   
  }; 

  decrypt(message, key) {

    if (message === undefined || key === undefined){
      throw new Error ('Incorrect arguments!');
    };

    message = message.toLowerCase();
    key = key.toLowerCase();

    if(message.length > key.length){
      key = key.padEnd(message.length, key);
    }
    else if(key.length > message.length){
      key = key.slice(0, message.length);
    };
    
    let n = 0;
    let result = [];

    for(let i = 0; i < message.length; i++){

      let valMessage = message[i];
      let valKey = key[i - n];

      if(!(this.alf.includes(valMessage))){
        result.push(valMessage);
        n++;
      }
      else{
        let indMessage = this.alf.indexOf(valMessage);
        let indKey = this.alf.indexOf(valKey);
        let index = (indMessage - indKey) % 26;
        if(Math.sign(index) === -1){
          index = (index + 26) % 26;
        };
        let item = this.alf[index];
          result.push(item);
       };
      };

      if(!this.straight){
        return result.reverse().join('').toUpperCase();
      };
    
    return result.join('').toUpperCase();
  };
};


module.exports = {
  VigenereCipheringMachine
};
