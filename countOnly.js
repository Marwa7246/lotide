const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(String.fromCodePoint(0x1F600) + String.fromCodePoint(0x1F600) + `Assertion Passed:${actual} === ${expected} `);

  } else {
    console.log(String.fromCodePoint(0x1F6D1) + String.fromCodePoint(0x1F6D1) + `Assertion Failed:${actual} !== ${expected} `);
  }

};

//Create a function that takes an array as an argument and returns an object where the keys are the arrys elements, and the values and how many time the element is present.
const countAvailableBlocks = function(array) {
  let result = {};
  for (let element of array) {
    if (!result[element]) {
      result[element] = 1;
    } else {
      result[element]  ++;
    }
  }
  return result;
};


//Create a function that compare the keys of the required object to the keys of available object and return the value of the available keys.
const countOnly = function(array, object) {
  let result = {};

  const availableBlocks = countAvailableBlocks(array);
  for (let element in object) {
    if (object[element]) {
      let number = availableBlocks[element];
      if (number) {
        result[element] = number;

      }
    }
  }
  return result;
};

const available = ['a', 'a', 'b', 'c' , 'd', 'e', 'a'];
const required = { a: true, d: true, b: false, f: true};

const result2 = (countOnly(available, required));
console.log(result2.a);
assertEqual(result2.a, 3);
assertEqual(result2.d, 1);
assertEqual(result2.f, undefined);



const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);

