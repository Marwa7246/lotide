//Implement a function which will keep collecting items from a provided array until the callback provided returns a truthy value.

const takeUntil = function(array, callback) {
  let result = [];
  for (const element of array) {
    //once the callback function returns true --> stop the for loop and return result
    if (callback(element)) {
      break;
    }
    result.push(element);       //collect element in the array
  }
  return result;
};





const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);




//Testing the results with assertArraysEqual

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


assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

/*
Expected Output
[ 1, 2, 5, 7, 2 ]
---
[ 'I\'ve', 'been', 'to', 'Hollywood' ]
*/


module.exports = takeUntil;
