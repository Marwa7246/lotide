const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  const result = eqArrays(array1, array2);
  
  if (result) {
    console.log(String.fromCodePoint(0x1F600) , String.fromCodePoint(0x1F600) , 'Assertion Passed:' , array1 , '===' , array2);

  } else {
    console.log(String.fromCodePoint(0x1F6D1) , String.fromCodePoint(0x1F6D1) , 'Assertion Failed:' , array1 , '!==' , array2);
  }

};


//Create a function that return the different position of each letter in a sentence
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      continue;
    }
    if (!results[sentence[i]]) {
      results[sentence[i]] = [];
    }
    results[sentence[i]].push(i);
  }

  // logic to update results here
  return results;
};


const sentence = "hello";
const results = letterPositions(sentence);

assertArraysEqual(results.h, [0]);
assertArraysEqual(results.e, [1]);
assertArraysEqual(results.l, [2, 3]);
assertArraysEqual(results.o, [4]);

const sentence1 = "lighthouse in the house";

const results1 = letterPositions(sentence1);
assertArraysEqual(results1['l'], [0]);
assertArraysEqual(results1['i'], [1, 11]);
assertArraysEqual(results1['g'], [2]);
assertArraysEqual(results1['h'], [3, 5, 15, 18]);
assertArraysEqual(results1['t'], [4, 14]);
assertArraysEqual(results1['o'], [6, 19]);
assertArraysEqual(results1['u'], [7, 20]);
assertArraysEqual(results1['s'], [8, 21]);
assertArraysEqual(results1['e'], [9, 16, 22]);
assertArraysEqual(results1['n'], [12]);




