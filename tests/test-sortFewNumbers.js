const expect = require('chai').expect;

const sortFewNumbers = require('../js/sortFewNumbers');

describe('testing sortFewNumbers', () => {
  
  it('passes case 1', () => {
    let k = 10;
    let actual = [3,1,3,9,5];
    let expected = [1,3,3,5,9];

    sortFewNumbers(actual, k);
    expect(actual).eql(expected);
  });
  
  it('passes case 2', () => {
    let k = 500;
    let actual = [331,124,420,420,69];
    let expected = [69,124,331,420,420];

    sortFewNumbers(actual, k);
    expect(actual).eql(expected);
  });

  it('passes case 3', () => {
    let k = 20;
    let actual = [17,13,12,19,15,14,11,7,2,9,7,4,4,4];
    let expected = [2,4,4,4,7,7,9,11,12,13,14,15,17,19];

    sortFewNumbers(actual, k);
    expect(actual).eql(expected);
  });
})