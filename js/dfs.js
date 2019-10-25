const search = (root, target) => {
  if (!root) {
    return null;
  }
  let visited = new Set();
  let stack = [];
  stack.push(root);
  while (stack.length) {
    let node = stack.pop();
    for (let child of node.children) {
      if (child.val === target.val) {
        return child;
      }
      if (!visited.has(child)) {
        stack.push(child);
        visited.add(child);
      }
    }
  }
  return null;
}

const traverseIterative = root => {
  if (!root) {
    return null;
  }
  let visited = new Set();
  let stack = [];
  let list = [];
  stack.push(root);
  while (stack.length) {
    let node = stack.pop();
    visited.add(node);
    list.push(node);
    for (let child of node.children) {
      if (!visited.has(child)) {
        visited.add(child);
        stack.push(child);
      }
    }
  }
  return list;
}

const traverseRecursive = root => {
  if (!root) {
    return null;
  }
  let visited = new Set();
  let list = dfs(root, visited, []);
  return list;
}

const dfs = (root, visited, list) => {
  if (!root) {
    return null;
  }
  visited.add(root);
  list.push(root);
  for (let child of root.children) {
    if (!visited.has(child)) {
      dfs(child, visited, list);
    }
  }
  return list;
}

module.exports = {
  search,
  traverseIterative,
  traverseRecursive
}