const expect = require('chai').expect;

const Node = require('../js/DataStructures/Node');
const middleNode = require('../js/MiddleNode');

describe('Testing middleNode', () => {

  it('Null case', () => {
    const node = null;
    const expected = null;
    const actual = middleNode(node);
    expect(actual).to.equal(expected);
  });

  it('3 -> 1 -> 5 : 1', () => {
    const node = new Node(3);
    node.next = new Node(1);
    node.next.next = new Node(5);
    const expected = node.next;
    const actual = middleNode(node);
    expect(actual).to.equal(expected);
  });

  it('3 -> 1 -> 5 -> 6 : 1', () => {
    const node = new Node(3);
    node.next = new Node(1);
    node.next.next = new Node(5);
    node.next.next.next = new Node(6);
    const expected = node.next;
    const actual = middleNode(node);
    expect(actual).to.equal(expected);
  });

  it('3 -> 1 : 3', () => {
    const node = new Node(3);
    node.next = new Node(1);
    const expected = node;
    const actual = middleNode(node);
    expect(actual).to.equal(expected);
  });
  
});