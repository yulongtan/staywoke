const expect = require('chai').expect;

const Node = require('../js/DataStructures/Node');
const middleNode = require('../js/MiddleNode');

describe('Testing middleNode', () => {

  it('returns null when head is null', () => {
    const node = null;
    const expected = null;
    const actual = middleNode(node);
    expect(actual).to.equal(expected);
  });

  it('returns middle node - odd case', () => {
    const node = new Node(3);
    node.next = new Node(1);
    node.next.next = new Node(5);
    const expected = node.next;
    const actual = middleNode(node);
    expect(actual).to.equal(expected);
  });

  it('returns middle node - even case', () => {
    const node = new Node(3);
    node.next = new Node(1);
    node.next.next = new Node(5);
    node.next.next.next = new Node(6);
    const expected = node.next;
    const actual = middleNode(node);
    expect(actual).to.equal(expected);
  });

  it('returns the first node when there is only one', () => {
    const node = new Node(3);
    const expected = node;
    const actual = middleNode(node);
    expect(actual).to.equal(expected);
  });

  it('returns the first node when there are two', () => {
    const node = new Node(3);
    node.next = new Node(4);
    const expected = node;
    const actual = middleNode(node);
    expect(actual).to.equal(expected);
  });
  
});