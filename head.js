// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(String.fromCodePoint(0x1F600) + String.fromCodePoint(0x1F600) + `Assertion Passed:${actual} === ${expected} `);

  } else {
    console.log(String.fromCodePoint(0x1F6D1) + String.fromCodePoint(0x1F6D1) + `Assertion Failed:${actual} !== ${expected} `);
  }

};

const head = function(inputArray) {
  let first;
  if (inputArray.length > 0) {
    first = inputArray[0];
  } else {
    first = 'undefined';
  }
  return first;
  
};

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([7]), 7);
assertEqual(head([]), 'undefined');


