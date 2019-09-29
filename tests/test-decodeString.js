const expect = require('chai').expect;
const decodeString = require('../js/DecodeString');

describe('testing decodeString', () => {
  it('returns empty string when input is null', () => {
    const str = null;
    const expected = '';

    const actual = decodeString(str);

    expect(actual).to.equal(expected);
  });
  
  it('returns empty string when input is empty', () => {
    const str = '';
    const expected = '';

    const actual = decodeString(str);

    expect(actual).to.equal(expected);
  });

  it('returns decoded string - case 1', () => {
    const str = '3[a]2[bc]';
    const expected = 'aaabcbc';

    const actual = decodeString(str);

    expect(actual).to.equal(expected);
  });

  it('returns decoded string - case 2', () => {
    const str = '3[a2[c]]';
    const expected = 'accaccacc';

    const actual = decodeString(str);

    expect(actual).to.equal(expected);
  });

  it('returns decoded string - case 3', () => {
    const str = '2[abc]3[cd]ef';
    const expected = 'abcabccdcdcdef';

    const actual = decodeString(str);

    expect(actual).to.equal(expected);
  });
  

})