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

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([4, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 5]);
