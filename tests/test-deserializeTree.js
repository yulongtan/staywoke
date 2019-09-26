const expect = require('chai').expect;

const TreeNode = require('../js/DataStructures/TreeNode');
const deserializeTree = require('../js/deserializeTree');

describe('Testing deserializeTree', () => {
  it('returns null when string is null', () => {
    const str = null;
    const expected = null;

    const actual = deserializeTree(str);

    expect(actual).to.equal(expected);
  });

  it('returns a tree - case 1', () => {
    const str = '1,2,3,#,#,#,#';
    const expected = new TreeNode('1');
    expected.left = new TreeNode('2');
    expected.right = new TreeNode('3');

    const actual = deserializeTree(str);

    // eql is a deep equal and looks at the contents of the 
    // expressions being compared
    expect(actual).to.eql(expected);
  });

  it('returns a tree - case 2', () => {
    const str = '1,2,#,3,4,#,#,#,#';
    const expected = new TreeNode('1');
    expected.left = new TreeNode('2');
    expected.left.left = new TreeNode('3');
    expected.left.right = new TreeNode('4');

    const actual = deserializeTree(str);

    expect(actual).to.eql(expected);
  });

  it('returns a tree - case 3', () => {
    const str = '1,2,3,4,5,#,#,#,#,#,#';
    const expected = new TreeNode('1');
    expected.left = new TreeNode('2');
    expected.right = new TreeNode('3');
    expected.left.left = new TreeNode('4');
    expected.left.right = new TreeNode('5');

    const actual = deserializeTree(str);
    
    expect(actual).to.eql(expected);
  });
})