const expect = require('chai').expect;
const longestPalindrome = require('../js/LongestPalindrome');

describe('Testing longestPalindrome', () => {

  it('empty case', () => {
    const str = '';
    const expected = 0;
    const actual = longestPalindrome(str);
    expect(actual).to.equal(expected);
  });

  it('general case 1', () => {
    const str = 'aabbc';
    const expected = 5;
    const actual = longestPalindrome(str);
    expect(actual).to.equal(expected);
  });

  it('general case 2', () => {
    const str = 'aaaaaaaa';
    const expected = 8;
    const actual = longestPalindrome(str);
    expect(actual).to.equal(expected);
  });

  it('general case 3', () => {
    const str = 'abcdefga';
    const expected = 3;
    const actual = longestPalindrome(str);
    expect(actual).to.equal(expected);
  });

  it('general case 4', () => {
    const str = 'abcdefg';
    const expected = 1;
    const actual = longestPalindrome(str);
    expect(actual).to.equal(expected);
  });

  it('general case 5', () => {
    const str = 'aabb';
    const expected = 4;
    const actual = longestPalindrome(str);
    expect(actual).to.equal(expected);
  });

  it('general case 6', () => {
    const str = 'aAbb';
    const expected = 3;
    const actual = longestPalindrome(str);
    expect(actual).to.equal(expected);
  });

});