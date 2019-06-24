/*
    This is my naive solution, which solves the problem in O(n^2)

*/

// Implement contains without using the contains method
// "apples", "app" -> true
// "mantra", "app" -> false
// "aabcad", "bca" -> true
function contains(string, substr) {
    if (substr.length > string.length) {
        return false;
    }
    if (substr.lenth == 0) {
        return true;
    }
    for (var i = 0; i < string.length; i++) {
        var firstChar = substr[0];
        if (string[i] == firstChar && string.substr(i).length >= substr.length) {
            stringBuilder = "";
            for (var j = 0; j < substr.length; j++) {
                if (string[i + j] == substr[j]) {
                    stringBuilder += string[i + j];
                }
            }
            if (stringBuilder == substr) {
                return true;
            }
        }
    }
    return false;
}