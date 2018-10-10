/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode middleNode(ListNode head) {
        int count = 1;
        ListNode current = head;
        while (current.next != null) {
            count++;
            current = current.next;
        } 
        current = head;
        for (int i = 0; i < count / 2; i++) {
            current = current.next;
        }
        return current;
    }
}