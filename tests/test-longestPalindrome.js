const expect = require('chai').expect;
const longestPalindrome = require('../js/LongestPalindrome');

describe('Testing longestPalindrome', () => {

  it('returns 0 for empty string', () => {
    const str = '';
    const expected = 0;
    const actual = longestPalindrome(str);
    expect(actual).to.equal(expected);
  });

  it('returns 1 when string is length 1', () => {
    const str = 'a';
    const expected = 1;
    const actual = longestPalindrome(str);
    expect(actual).to.equal(expected);
  });

  it('returns longest palindrome - case 1', () => {
    const str = 'aabbc';
    const expected = 5;
    const actual = longestPalindrome(str);
    expect(actual).to.equal(expected);
  });

  it('returns longest palindrome - case 2', () => {
    const str = 'aaaaaaaa';
    const expected = 8;
    const actual = longestPalindrome(str);
    expect(actual).to.equal(expected);
  });

  it('returns longest palindrome - case 3', () => {
    const str = 'abcdefga';
    const expected = 3;
    const actual = longestPalindrome(str);
    expect(actual).to.equal(expected);
  });

  it('returns longest palindrome - case 4', () => {
    const str = 'abcdefg';
    const expected = 1;
    const actual = longestPalindrome(str);
    expect(actual).to.equal(expected);
  });

  it('returns longest palindrome - case 5', () => {
    const str = 'aabb';
    const expected = 4;
    const actual = longestPalindrome(str);
    expect(actual).to.equal(expected);
  });

  it('returns longest palindrome - case 6', () => {
    const str = 'aAbb';
    const expected = 3;
    const actual = longestPalindrome(str);
    expect(actual).to.equal(expected);
  });

});