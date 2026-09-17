class Solution {
    public boolean isAnagram(String s, String t) {
        HashMap<Character, Integer> a = getWordCount(s);
        HashMap<Character, Integer> b = getWordCount(t);

        if (a.equals(b)) {
            return true;
        }
        return false;
    }

    public static HashMap<Character, Integer> getWordCount(String word) {
        HashMap<Character, Integer> counts = new HashMap<>();
        for (int i = 0; i < word.length(); i++) {
            char ch = word.charAt(i);
            counts.put(ch, counts.getOrDefault(ch, 0) + 1);
        }
        return counts;
    }
}
