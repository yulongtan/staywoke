public class Contains {
    public static void main(String[] args) {
        
    }
    
    public static boolean contains(String s1, String s2) {
        int s2Hash = s2.hashCode();
        for (int i = 0; i < s1.length() - s2.length(); i++) {
            String candidate = s1.substring(i, s2.length());
            int candidateHash = candidate.hashCode();
            if (candidateHash == s2Hash) {
                return true;
            }
        }
        return false;
    }
}
