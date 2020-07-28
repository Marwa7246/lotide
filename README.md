# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mragheb/lotide`

**Require it:**

`const _ = require('@mragheb/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(head)`:  A function that will retrieve the first element from an array. 
* `function2(tail)`: A function that retrieve the tail of an array, is meant to be every element except the head (first element) of the array.

* `function3(middle)`: A function which will take in an array and return the middle-most element(s) of the given array.
* `function4(map)`: A function that will receive an array and a callback function to return a new array with callback function does a process on each element of the initial array.
* `function5(letterPositions)`: A function which will return all the indices (zero-based positions) in the string where each character is found.
* `function6(findKey)`: A function which will take in an object and a callback, and will return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
* `function7(findKeyByValue)`: A function which takes in an object and a value, and will return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
* `function8(eqArrays)`: A function that will take in two arrays and returns true or false, based on a perfect match.
* `function9(countLetters)`:  A function which should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `function10(countOnly)`: A function which will be given an array and an object. It will return an object containing counts of everything that the input object listed.
* `function11(eqObjects)`: A function which will take in two objects and returns true or false, based on a perfect match.
* `function12(takeUntil)`: A function which will keep collecting items from a provided array until the callback provided returns a truthy value.
* `function13(withOut)`: A function that will return a subset of a given array, removing unwanted elements.
* `function14(flatten)`: A function, given an array with other arrays inside, it can flatten it into a single-level array.




