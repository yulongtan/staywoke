let expect = require('chai').expect;

let firstNonRepeatingChar = require('../js/firstNonRepeatingChar');

let testCases = [
  {
    s: 'aaabcccdeeef',
    expected: 'b'
  },
  {
    s: 'aaabbcddd',
    expected: 'c'
  },
  {
    s: 'aaabbc',
    expected: 'c'
  },
  {
    s: 'aaabbcc',
    expected: ''
  },
  {
    s: '',
    expected: ''
  },
  {
    s: 'a',
    expected: 'a'
  }
]

describe('testing firstNonRepeatingChar', () => {
  testCases.forEach((t, i) => {
    it(`passes case ${i + 1}`, () => {
      let s = t.s;
      let expected = t.expected;

      let actual = firstNonRepeatingChar(s);

      expect(actual).equal(expected);
    })
  })
})