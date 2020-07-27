const assert = require ('chai').assert;
const tail = require ('../tail');

describe ('#tail', () => {
  
  it('returns output array length of 2 if input is ["Hello", "Lighthouse", "Labs"]', () => {
    const input = ["Hello", "Lighthouse", "Labs"];
    assert.strictEqual(tail(input).length, 2);
  });

  it('returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {

    const input = ["Hello", "Lighthouse", "Labs"];
    const expectedOutput =  ["Lighthouse", "Labs"];
    assert.deepEqual(tail(input), expectedOutput);
  });
  
  it('returns [ 6, 7] for [5, 6, 7]', () => {

    const input = [5, 6, 7];
    const expectedOutput =  [6, 7];
    assert.deepEqual(tail(input), expectedOutput);
  });

  it('returns an empty array  if input is [7]', () => {
    const input = [7];
    assert.strictEqual(tail(input).length, 0);
  });

  it('returns an empty array  if input an empty array', () => {
    const input = [];
    const expectedOutput =  [];

    assert.deepEqual(tail(input), expectedOutput);
  });

  it('does not mutate the input array after excuting the function on it', () => {
    const input = ["Yo Yo", "Lighthouse", "Labs"];
    tail(input);// run the functiono, then we then that the input didn't change
    const expectedOutput =  ["Yo Yo", "Lighthouse", "Labs"];

    assert.deepEqual(input, expectedOutput);
  });

});


/*
const tail = require("../tail");

const assertEqual = require("../assertEqual");

// TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

const result2 = tail([5, 6, 7]);
assertEqual(result2.length, 2); // ensure we get back two elements
assertEqual(result2[0], 6); // ensure first element is 6
assertEqual(result2[1], 7); // ensure second element is 7

const result3 = tail([7]);
assertEqual(result3.length, 0); // ensure we get back one element

const result4 = tail([]);
assertEqual(result4.length, 0); // ensure we get back one element



// Test Case: Check that the original array was not modified after running the tail function on it
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
*/