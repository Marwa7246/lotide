'use strict';
const assertArraysEqual = function(array1, array2) {
  
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log(String.fromCodePoint(0x1F6D1) + String.fromCodePoint(0x1F6D1) + "Assertion Failed:" , array1 , '!==' , array2);
      return false;
    }
  }
  console.log(String.fromCodePoint(0x1F600) + String.fromCodePoint(0x1F600) + "Assertion Passed:" , array1 , '===' , array2);
};

//const withoutOne = function(source, removeElement) {
//  let result=[];
//  for (let i = 0; i < source.length; i++) {
//    if (removeElement !== source[i]) {
//      result.push(source[i]);
//    }
//  }
//  return result;
//};

const without = function(source, itemsToRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    let x = 0;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (itemsToRemove[j] !== source[i]) {
        x++;
      }
    }
    if (x === itemsToRemove.length) {
      result.push(source[i]);
    }
    
  }
  return result;
};

//console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
assertArraysEqual(without([1, 2, 3], [1]),[2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]),["1", "2"]);
assertArraysEqual(without(["4", "8", "6", "7", "10"], ["7", "4", "3"]),["8", "6", "10"]);



const words = ["hello", "world", "lighthouse"];
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


