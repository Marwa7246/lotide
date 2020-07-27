
//Implement a function which will test functions that return objects.
//A function that compares 2 objects
const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};


//A function that compares 2 objects
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  let result;

  //check if both objects have the same number of keys, if not ----> exist $ return false
  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key1 of keys1) {
    // check if a specific key in the first object is also available in the second object, if not ----> exist $ return false
    if (!object2[key1]) {
      return false;
    }
    //check if the value of key1 of both object are string or array, if string---> run a simple === comparison, else run eqArrays
    if (!Array.isArray(object2[key1]) && !Array.isArray(object2[key1])) {
      //if both value as string are not equal, ----> exist $ return false, otherwise, put true in result
      if (object2[key1] !== object1[key1]) {
        return false;
      } else {
        result = true;
      }
    } else {              //both values are arrays----> will check if they are equal using eqArray
      result = eqArrays(object2[key1], object1[key1]);
    }
  }
  return result;
};

const assertObjectsEqual = function(actualObject, expectedObject) {
  const inspect = require('util').inspect;            //Import a library to be able to print object in console.log
  const result = eqObjects(actualObject, expectedObject);
  
  if (result) {
    console.log(String.fromCodePoint(0x1F600) + String.fromCodePoint(0x1F600) + `Assertion Passed:${inspect(actualObject)} === ${inspect(expectedObject)} `);
    //console.log(String.fromCodePoint(0x1F600) , String.fromCodePoint(0x1F600) , 'Assertion Passed:' , actualObject ,'===' , expectedObject);     // another way of printing to take into account printing object

  } else {
    console.log(String.fromCodePoint(0x1F6D1) + String.fromCodePoint(0x1F6D1) + `Assertion Failed:${inspect(actualObject)} !== ${inspect(expectedObject)} `);
    //console.log(String.fromCodePoint(0x1F6D1) , String.fromCodePoint(0x1F6D1) , 'Assertion Failed:' , actualObject ,'!==' , expectedObject);
  }

};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//eqObjects(ab, ba); // => true
assertObjectsEqual(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
//eqObjects(ab, abc); // => false
assertObjectsEqual(ab, abc);



const cd = { c: "2", d: ["2", 3] };
const dc = { d: ["2", 3], c: "2" };
//console.log (eqObjects(cd, dc)); // => true
assertObjectsEqual(cd, dc);




const cd2 = { c: "2", d: ["2", 3, 4] };
//eqObjects(cd, cd2); // => false
assertObjectsEqual(cd, cd2);


module.exports = assertObjectsEqual;