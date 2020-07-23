const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(String.fromCodePoint(0x1F600) + String.fromCodePoint(0x1F600) + `Assertion Passed:${actual} === ${expected} `);

  } else {
    console.log(String.fromCodePoint(0x1F6D1) + String.fromCodePoint(0x1F6D1) + `Assertion Failed:${actual} !== ${expected} `);
  }

};

//Create a function that count the letters in a sentence
const countLetters = function(sentence) {
  
  // output will be an object with keys are the letter
  let results = {};
  for (let letter of sentence) {
    if (results[letter]) {
      results[letter] ++;
    } else if (!results[letter] && letter !== " ") { //neglect the space
      results[letter] = 1;
    }
  }
  return results;
};

//TEST CODE
const result1 = countLetters("lighthouse in the house");
console.log(result1);
assertEqual(result1['l'], 1);
assertEqual(result1['i'], 2);
assertEqual(result1['g'], 1);
assertEqual(result1['h'], 4);
assertEqual(result1['t'], 2);
assertEqual(result1['o'], 2);
assertEqual(result1['u'], 2);
assertEqual(result1['s'], 2);
assertEqual(result1['e'], 3);
assertEqual(result1['n'], 1);





