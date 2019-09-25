/**
 * Returns the middle Node in a singly linked List
 * @param {Node} head - head of the LinkedList
 */
let middleNode = (head) => {
  if (!head) {
    return null;
  }
  let current = head;
  let count = 0;
  while (current.next != null) {
    count++;
    current = current.next;
  }
  current = head;
  for (let i = 0; i < Math.floor(count / 2); i++) {
    current = current.next;
  }
  return current;
}

module.exports = middleNode;