// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(String.fromCodePoint(0x1F600) + String.fromCodePoint(0x1F600) + `Assertion Passed:${actual} === ${expected} `);

  } else {
    console.log(String.fromCodePoint(0x1F6D1) + String.fromCodePoint(0x1F6D1) + `Assertion Failed:${actual} !== ${expected} `);
  }

};

const tail = function(inputArray) {
  let end;
  if (inputArray.length > 1) {
    end = inputArray.slice(1);
  } else {
    end = [];
  }
  return end;
  
};
// TEST CODE
assertEqual(tail([5,6,7]).join(","), "6,7");
assertEqual(tail(["Hello", "Lighthouse", "Labs"]).join(","), "Lighthouse,Labs");
assertEqual(tail([7]).join(","), "");
assertEqual(tail([]).join(","), "");

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!


