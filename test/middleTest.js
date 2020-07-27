const assert = require('chai').assert;
const middle = require('../middle');

describe('#tail', () => {
  
 
  it('returns [3] for [1, 2, 3, 4, 5]', () => {

    const input = [1, 2, 3, 4, 5];
    const expectedOutput =  [3];
    assert.deepEqual(middle(input), expectedOutput);
  });

  it('returns [3, 4] for [[1, 2, 3, 4, 5, 6]', () => {

    const input = [1, 2, 3, 4, 5, 6];
    const expectedOutput =  [3, 4];
    assert.deepEqual(middle(input), expectedOutput);
  });

  it('returns [] for [1, 2]', () => {

    const input = [1, 2];
    const expectedOutput =  [];
    assert.deepEqual(middle(input), expectedOutput);
  });

  it('returns [] for [1]', () => {

    const input = [1];
    const expectedOutput =  [];
    assert.deepEqual(middle(input), expectedOutput);
  });
  
  
});







/*
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1]), []);

*/