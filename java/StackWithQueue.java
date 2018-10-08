/*Most likely missing some error checking in pop() and top() */
class MyStack {
    private Queue<Integer> q;

    /** Initialize your data structure here. */
    public MyStack() {
        q = new LinkedList<Integer>();
    }
    
    /** Push element x onto stack. */
    public void push(int x) {
        q.add(x);
    }
    
    /** Removes the element on top of the stack and returns that element. */
    public int pop() {
        int size = q.size();
        int result = -1;
        // Shift elements to get the one at the end
        for (int i = 0; i < size - 1; i++) {
            q.add(q.remove());
        }
        result = q.remove();
        return result;
    }
    
    /** Get the top element. */
    public int top() {
        int size = q.size();
        int result = -1;
        // Shift elements to get the one at the end
        for (int i = 0; i < size - 1; i++) {
            q.add(q.remove());
        }
        result = q.remove();
        q.add(result);
        return result;
    }
    
    /** Returns whether the stack is empty. */
    public boolean empty() {
        return q.isEmpty();
    }
}