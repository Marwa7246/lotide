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