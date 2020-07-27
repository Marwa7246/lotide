//const assertEqual = require("./assertEqual");

// FUNCTION IMPLEMENTATION


const head = function(inputArray) {
  let first;
  if (inputArray.length > 0) {
    first = inputArray[0];
  } else {
    first = undefined;
  }
  return first;
  
};


module.exports = head;

