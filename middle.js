
//A function that return the middle element of an array
const middle = function(array) {
  // if number of elements is less than 2, return an empty array
  let result = [];
  //determine the index of the element in the middle
  const index = Math.floor((array.length / 2));
  // odd number of elements greater than 2---> take only the one in the middle
  if (array.length % 2 !== 0 && array.length > 2) {
    result.push(array[index]);
    //even number of elements greater than 2 ---> take the 2 numbers in the middle
  } else if (array.length % 2 === 0 && array.length > 2) {
    result.push(array[index - 1], array[index]);
  }
  return (result);
};

module.exports = (middle);

