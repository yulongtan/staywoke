const expect = require('chai').expect;
const GraphNode = require('../js/DataStructures/GraphNode');
const dfs = require('../js/dfs');

describe('Testing dfs', () => {
  let i = new GraphNode('i');
  let g = new GraphNode('g');
  let h = new GraphNode('h');
  let f = new GraphNode('f');
  let d = new GraphNode('d');
  let e = new GraphNode('e');
  let a = new GraphNode('a');
  let b = new GraphNode('b');
  let c = new GraphNode('c');

  i.children.push(g);
  i.children.push(h);

  g.children.push(i);
  g.children.push(h);
  g.children.push(f);

  h.children.push(i);
  h.children.push(g);
  h.children.push(e);

  f.children.push(g);
  f.children.push(d);

  d.children.push(f);
  d.children.push(e);
  d.children.push(a);

  e.children.push(h);
  e.children.push(d);
  e.children.push(c);
  e.children.push(b);

  a.children.push(d);
  a.children.push(b);

  b.children.push(e);
  b.children.push(c);

  c.children.push(e);
  c.children.push(b);

  describe('traverseIterative', () => {
    it('returns null when root is null', () => {
      const root = null;
      const expected = null;

      const actual = dfs.traverseIterative(root);

      expect(actual).equal(expected);
    });

    it('returns the right elements', () => {
      const root = i;
      const expected = [];
      expected.push(a, b, c, d, e, f, g, h, i);

      const actual = dfs.traverseIterative(root);

      expect(actual.length).equal(expected.length);
      expect(actual).to.have.members(expected);
    });

  });

  describe('traverseRecursive', () => {
    it('returns null when root is null', () => {
      const root = null;
      const expected = null;

      const actual = dfs.traverseRecursive(root);

      expect(actual).equal(expected);
    });

    it('returns the right elements', () => {
      const root = i;
      const expected = [];
      expected.push(a, b, c, d, e, f, g, h, i);

      const actual = dfs.traverseRecursive(root);

      expect(actual.length).equal(expected.length);
      expect(actual).to.have.members(expected);
    });

  });
});