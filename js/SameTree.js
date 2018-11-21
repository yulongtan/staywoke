let isSameTree = (a, b) => {
    if (a == null && b == null) {
        return true;
    } else if (a == null && b != null || a != null && b == null) {
        return false;
    } else if (a.val != b.val) {
        return false;
    } else {
        return isSameTree(a.left, b.left) && isSameTree(a.right, b.right)
    }
};