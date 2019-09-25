// Get the middle node in a linked list

let middleNode = (head) => {
  if (head == null) {
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