// FUNCTION IMPLEMENTATION

const tail = function(inputArray) {
  let end;
  if (inputArray.length > 1) {
    end = inputArray.slice(1);
  } else {
    end = [];
  }
  return end;
};

module.exports = tail;