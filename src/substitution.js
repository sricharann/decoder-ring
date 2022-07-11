// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    let alphabetLength = alphabet && alphabet.length;
    if((input && alphabet) && alphabetLength === 26 && hasUniqueChar(alphabet)){
      let result = '';
      //encode logic
      if(encode){
      let alphabetEncodeArry = alphabetEncodeArray();
        for(let i=0;i<input.length;i++){
          let encodeArry = encodeArray(alphabet);
          let value = alphabetEncodeArry[input[i]];
          if(value === undefined){
            result +=input[i]
          }
          else {
            result += encodeArry[value];
          }
        }
      }
      //decode logic 
       else {
        let alphabetDecodeArry = alphabetDecodeArray();
        let decodeArry = decodeArray(alphabet);
        for(let i=0;i<input.length;i++){
          let value = decodeArry[input[i]];
          if(value === undefined){
            result +=input[i];
          }
          else {
            result += alphabetDecodeArry[value];
          }
        }
      }
      return result;
    }
    else {
      return false;
    }
    //console.log(resultArray);
  }
  // input given alphabets stored in encode array for reference and to search
  function encodeArray(string){
    let resultArray = {};
      for(let i=0;i<=string.length-1;i++){
        resultArray[i] = string[i];
      }
      return resultArray;
  }
  // input given alphabets stored in decode array for reference and to search
  function decodeArray(string){
    let resultArray = {};
    for(let i=0;i<=string.length-1;i++){
      resultArray[string[i]] = i;
    }
    return resultArray;
  }
  // Alphabet order array for storing values to index
  function alphabetEncodeArray(){
      let resultArray = {};
      let charVal = 97;
      for(let i=0; i<=25; i++){
        resultArray[String.fromCharCode(charVal)]= i;
        charVal +=1; 
      }
    return resultArray;
  }
// Alphabet order array for index to input values
  function alphabetDecodeArray(){
    let resultArray = {};
    let charVal = 97;
    for(let i=0; i<=25; i++){
      resultArray[i]= String.fromCharCode(charVal);
      charVal +=1; 
    }
  return resultArray;
}
  // function to return if string has unique characters
  function hasUniqueChar(str){
    let updatedStr =  [...str].reduce((acc, current) => {
      return acc.includes(current) ? acc : acc+current;
    },"");
    return updatedStr.length === str.length ?true : false;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
