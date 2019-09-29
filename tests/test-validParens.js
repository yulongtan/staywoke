const expect = require('chai').expect;
const validParens = require('../js/validParens');

describe('testing validParens', () => {
  it('returns true when string is null', () => {
    const str = null;

    const actual = validParens(str);

    expect(actual).to.be.true;
  });

  it('returns true when string is empty', () => {
    const str = '';

    const actual = validParens(str);

    expect(actual).to.be.true;
  });

  it('returns correct validation - case 1', () => {
    const str = '([])[]({})';

    const actual = validParens(str);

    expect(actual).to.be.true;
  });

  it('returns correct validation - case 2', () => {
    const str = '([)]';

    const actual = validParens(str);

    expect(actual).to.be.false;
  });

  it('returns correct validation - case 3', () => {
    const str = '({[]})()';

    const actual = validParens(str);

    expect(actual).to.be.true;
  });
})
