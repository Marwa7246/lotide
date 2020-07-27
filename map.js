//Implement a function that receive an array and a callback function to return a new array with callback function does a process on each element of the initial array
const map = function(array, callback) {
   
  const results = [];
  //Loop over each element of the array and apply the callback function
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


//A function that tests if two arrays are equal and return either true or false
const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

//A test function that compares the output of any function as an array with the expected array and prints a message either passed or failed
const assertArraysEqual = function(array1, array2) {
  const result = eqArrays(array1, array2);
  
  if (result) {
    console.log(String.fromCodePoint(0x1F600) , String.fromCodePoint(0x1F600) , 'Assertion Passed:' , array1 , '===' , array2);

  } else {
    console.log(String.fromCodePoint(0x1F6D1) , String.fromCodePoint(0x1F6D1) , 'Assertion Failed:' , array1 , '!==' , array2);
  }

};


const words1 = ["ground", "control", "to", "major", "tom"];

const words2 = ["cat", "dog", "rabbit", "horse", "fish"];
const words3 = [-1, 345, "67", 0, 5];


//the callback function is an arrow function that return the first letter of the word
const results1 = map(words1, word => word[0]);
const results2 = map(words2, word => word[0]);
const results3 = map(words3, word => word[0]);


console.log(results3);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, [ 'c', 'd', 'r', 'h', 'f' ]);
assertArraysEqual(results3, [ undefined, undefined, '6', undefined, undefined ]);

module.exports = map;
