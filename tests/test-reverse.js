const expect = require('chai').expect;
const reverse = require('../js/Reverse');

describe('Testing reverse', () => {

  it('empty string case', () => {
    const str = '';
    const expected = '';
    const actual = reverse(str);
    expect(actual).to.equal(expected);
  });

  it('general case', () => {
    const str = 'some test';
    const expected = 'tset emos';
    const actual = reverse(str);
    expect(actual).to.equal(expected);
  });
})
