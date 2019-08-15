public ListNode reverse(ListNode node) {
    // Reverse doesn't apply to a list of single nodes
    if (node == null || node.next == null) {
        return node;
    }

    ListNode prev, next = null;
    ListNode current = node;

    while (current != null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    node = prev;
    return node;
}