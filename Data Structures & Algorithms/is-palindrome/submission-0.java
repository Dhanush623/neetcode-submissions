class Solution {
    public boolean isPalindrome(String s) {
        StringBuilder newStr = new StringBuilder();
        for (char chart : s.toCharArray()) {
            if (Character.isLetterOrDigit(chart)) {
                newStr.append(Character.toLowerCase(chart));
            }
        }
        String normaliseString = newStr.toString();
        String reversString = newStr.reverse().toString();
        if (reversString.equals(normaliseString)) {
            return true;
        }
        return false;
    }
}
