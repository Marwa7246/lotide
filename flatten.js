// Implement a function which, given an array with other arrays inside, it can flatten it into a single-level array.

//Function eqArrays and assertArraysEqual are  used to test the code
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


const flatten = function(inputArray) {
  let result = [];
  //Loop over the input array
  for (const item of inputArray) {
    //Check if the item in the array is array, if not ----> add it to the out put array, then BREAK this round of the loop and go for the next one.
    if (!Array.isArray(item)) {
      result.push(item);
      continue;
    }
    //Add each element of the item array to the output array separetely sequentially
    item.forEach(element =>  result.push(element));

  }
  return result;

};

//TEST CODE

const result = flatten([[1, 2], [3, 4], 5, [6]]);
//console.log(result);
assertArraysEqual(result, [ 1, 2, 3, 4, 5, 6 ]);

const result1 = flatten([['aaa', 'bbb'], [3, 4], 5, [6]]);
//console.log(result1);
assertArraysEqual(result1, [ 'aaa', 'bbb', 3, 4, 5, 6 ]);

const result2 = flatten([0, 8, [3, 4], 5, [6]]);
//console.log(result2);
assertArraysEqual(result2, [ 0, 8, 3, 4, 5, 6 ]);
