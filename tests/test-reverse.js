const expect = require('chai').expect;
const reverse = require('../js/Reverse');

describe('Testing reverse', () => {

  it('returns empty string when the string is empty', () => {
    const str = '';
    const expected = '';
    const actual = reverse(str);
    expect(actual).to.equal(expected);
  });

  it('returns empty string when the string is null', () => {
    const str = null;
    const expected = '';
    const actual = reverse(str);
    expect(actual).to.equal(expected);
  });

  it('reverses the string - case 1', () => {
    const str = 'some test';
    const expected = 'tset emos';
    const actual = reverse(str);
    expect(actual).to.equal(expected);
  });

  it('reverses the string - case 2', () => {
    const str = 'hello, world!!!';
    const expected = '!!!dlrow ,olleh';
    const actual = reverse(str);
    expect(actual).to.equal(expected);
  });
})
