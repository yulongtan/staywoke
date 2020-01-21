const expect = require('chai').expect;
const tickets = require('../js/tickets');

describe('testing tickets', () => {

  it('returns correctly - case 1', () => {
    const queue = [25, 25, 50];
    const actual = tickets(queue);
    expect(actual).to.be.true;
  });

  it('returns correctly - case 2', () => {
    const queue = [25, 100];
    const actual = tickets(queue);
    expect(actual).to.be.false;
  });

  it('returns correctly - case 3', () => {
    const queue = [25, 25, 50, 50, 100];
    const actual = tickets(queue);
    expect(actual).to.be.false;
  });
});
