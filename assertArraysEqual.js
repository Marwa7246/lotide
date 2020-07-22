const assertArraysEqual = function(array1, array2) {
  
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log(String.fromCodePoint(0x1F6D1) + String.fromCodePoint(0x1F6D1) + "Assertion Failed:" , array1 , '!==' , array2);
      return false;
    }
  }
  console.log(String.fromCodePoint(0x1F600) + String.fromCodePoint(0x1F600) + "Assertion Passed:" , array1 , '===' , array2);
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([4, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 5]);


