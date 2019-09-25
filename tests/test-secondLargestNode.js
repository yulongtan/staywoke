const expect = require('chai').expect;

const TreeNode = require('../js/DataStructures/TreeNode');
const secondLargestNode = require('../js/SecondLargestNode');

describe('Testing secondLargestNode', () => {
  it('returns -1 when given null tree', () => {
    const root = null;
    const expected = -1;

    const actual = secondLargestNode(root);

    expect(actual).to.equal(expected);
  });

  it('returns -1 when all numbers are the same', () => {
    const root = new TreeNode(6);
    root.left = new TreeNode(6);
    root.right = new TreeNode(6);
    const expected = -1;

    const actual = secondLargestNode(root);

    expect(actual).to.equal(expected);
  });

  it('returns second largest - case 1', () => {
    const root = new TreeNode(6);
    root.left = new TreeNode(3);
    root.right = new TreeNode(5);
    const expected = 5;

    const actual = secondLargestNode(root);

    expect(actual).to.equal(expected);
  });

  it('returns second largest - case 2', () => {
    const root = new TreeNode(6);
    root.left = new TreeNode(3);
    root.right = new TreeNode(5);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(7);
    const expected = 6;

    const actual = secondLargestNode(root);

    expect(actual).to.equal(expected);
  });

  it('returns second largest - case 3', () => {
    const root = new TreeNode(6);
    root.left = new TreeNode(3);
    root.right = new TreeNode(5);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(7);
    root.right.left = new TreeNode(1);
    root.right.right = new TreeNode(8);
    const expected = 7;

    const actual = secondLargestNode(root);

    expect(actual).to.equal(expected);
  });
});