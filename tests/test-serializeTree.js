const expect = require('chai').expect;

const TreeNode = require('../js/DataStructures/TreeNode');
const serializeTree = require('../js/serializeTree');

describe('Testing serializeTree', () => {
  it('returns empty string when root is null', () => {
    const root = null;
    const expected = '';
    
    const actual = serializeTree(root);

    expect(actual).to.equal(expected);
  });

  it('returns a stringified tree - case 1', () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    const expected = '1,2,3,#,#,#,#';
    
    const actual = serializeTree(root);

    expect(actual).to.equal(expected);
  });

  it('returns a stringified tree - case 2', () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.right.left = new TreeNode(4);
    root.right.right = new TreeNode(5);
    const expected = '1,2,3,#,#,4,5,#,#,#,#';
    
    const actual = serializeTree(root);

    expect(actual).to.equal(expected);
  });

  it('returns a stringified tree - case 3', () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(9);
    root.right.left = new TreeNode(4);
    root.right.right = new TreeNode(5);
    const expected = '1,2,3,9,#,4,5,#,#,#,#,#,#';
    
    const actual = serializeTree(root);

    expect(actual).to.equal(expected);
  });

  it('returns a stringified tree - case 4', () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    const expected = '1,2,#,#,#';
    
    const actual = serializeTree(root);

    expect(actual).to.equal(expected);
  });

  it('returns a stringified tree - case 5', () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.left.left = new TreeNode(3);
    root.left.right = new TreeNode(4);
    const expected = '1,2,#,3,4,#,#,#,#';
    
    const actual = serializeTree(root);

    expect(actual).to.equal(expected);
  });

})