// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // validate the error scenarios and return false if not met
    if(shift!=0 && shift<25 &&shift>-25 && input)
    {
      let result = '';
      for (let i = 0; i < input.length; i++) {
        // Check if shift is positive or negative direction
        isNegativeShift = Math.sign(shift) === -1 ? true : false;
        isCapitalCase = (/[A-Z]/.test(input[i]));
        isAlphabet = /[a-z]/.test(input[i]);
        if(isAlphabet || isCapitalCase){
          inputVal = input[i].toLowerCase().charCodeAt();
          charcodeVal = encode ?(inputVal+ shift) : (inputVal - shift);
          // logic to calculate the difference from max value 122 and add it in start of alphabets
          if(charcodeVal > 122){
            let diff = charcodeVal - 122;
            charcodeVal = 96 + diff;
          } else if(charcodeVal < 97){
            let diff =  96 - charcodeVal;
            charcodeVal = 122 - diff;
          }
          result += String.fromCharCode(charcodeVal);
        }
        else{
          result += input[i];
        } 
      }
      return result;
    } 
    else {
      return false;
    }
  } 
  
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
