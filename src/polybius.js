// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  
  let mapTable = new Map();
  function polybius(input, encode = true) {
    let result = '';
    setGridValues();
    let tableKeys =  mapTable.keys();
    let resArray = new Map();
    let initialVal = 0;
    //Set initial values
    for(let value of tableKeys){
      resArray.set(initialVal, value);
      initialVal++
    }
    // Encode logic 
    if(encode){
      for(let i=0;i<input.length; i++){
        let inp = input[i].toUpperCase();
        if(inp !=' ')
        result += mapTable.get(inp);
        else 
        result += ' ';
      }
      return result;
    } 
    // Decode logic 
    else {
      if((input.length%2 !=0 && !hasWhiteSpace(input)) || (hasWhiteSpace(input) && (input.length-1) %2 !=0)){
        return false;
      } else {
        let resVal =[];
      for(let i=0;i<input.length; i++){
         if(input[i]!=' ' && input[i+1]){
          val = input[i]+input[i+1];
          i++;
        } else {
          val = input[i];
        }
        resVal.push(val);
      }
      for(let j=0;j<resVal.length; j++){

        value = getByValue(mapTable,resVal[j]);
        result += value;
      }
    return result.toLowerCase();
      }
    }
  }

  // Mapping given details to grid using Map
  function setGridValues(){
    mapTable.set('A','11');
    mapTable.set('B','21');
    mapTable.set('C','31');
    mapTable.set('D','41');
    mapTable.set('E','51');
    mapTable.set('F','12');
    mapTable.set('G','22');
    mapTable.set('H','32');
    mapTable.set('I','42');
    mapTable.set('J','42');
    mapTable.set('K','52');
    mapTable.set('L','13');
    mapTable.set('M','23');
    mapTable.set('N','33');
    mapTable.set('O','43');
    mapTable.set('P','53');
    mapTable.set('Q','14');
    mapTable.set('R','24');
    mapTable.set('S','34');
    mapTable.set('T','44');
    mapTable.set('U','54');
    mapTable.set('V','15');
    mapTable.set('W','25');
    mapTable.set('X','35');
    mapTable.set('Y','45');
    mapTable.set('Z','55');
    mapTable.set(' ', ' ');
  }
  // to check if string has space
  function hasWhiteSpace(s) {
    return s.indexOf(' ') >= 0;
  }
  // Function to get the value
  function getByValue(map, searchValue) {
    let result='';
    for (let [key, value] of map.entries()) {
      if (value === searchValue && searchValue == 42){
        result += key;
      } else if(value === searchValue)
      {
        return key;
      }
    }
    return result;
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
