// Create a function which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.

//comparision function to be sure that the created function is running correctly
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(String.fromCodePoint(0x1F600) + String.fromCodePoint(0x1F600) + `Assertion Passed:${actual} === ${expected} `);

  } else {
    console.log(String.fromCodePoint(0x1F6D1) + String.fromCodePoint(0x1F6D1) + `Assertion Failed:${actual} !== ${expected} `);
  }

};

//
const findKeyByValue = function(bestTVShowsByGenre, item) {
  //create an array of keys
  const keys = Object.keys(bestTVShowsByGenre);
  for (let element of keys) {
    //scan if the one of the keys has a corresponding value equal to the input value
    if (bestTVShowsByGenre[element] === item) {
      return element;
    }
  }

};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);