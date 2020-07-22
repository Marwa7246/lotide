//compare 2 arrays and return true if they are equal
const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

// prient a message is the result of the comparison if the sam as was expected
const assertArraysEqual = function(array1, array2) {
  const result = eqArrays(array1, array2);
  
  if (result) {
    console.log(String.fromCodePoint(0x1F600) , String.fromCodePoint(0x1F600) , 'Assertion Passed:' , array1 , '===' , array2);

  } else {
    console.log(String.fromCodePoint(0x1F6D1) , String.fromCodePoint(0x1F6D1) , 'Assertion Failed:' , array1 , '!==' , array2);
  }

};

//A function that return the middle element if an array
const middle = function(array) {
  // if number of elements is less than 2, return an empty array
  let result = [];
  //determine the index of the element in the middle
  const index = Math.floor((array.length / 2));
  // odd number of elements greater than 2---> take only the one in the middle
  if (array.length % 2 !== 0 && array.length > 2) {
    result.push(array[index]);
    //even number of elements greater than 2 ---> take the 2 numbers in the middle
  } else if (array.length % 2 === 0 && array.length > 2) {
    result.push(array[index - 1], array[index]);
  }
  return (result);
};

//console.log(middle([1, 2, 3, 4, 5]));
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1]), []);