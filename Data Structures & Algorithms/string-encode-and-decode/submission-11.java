class Solution {

    public String encode(List<String> strs) {
        if (strs == null || strs.isEmpty()) {
            return "";
        }
        return strs.stream()
                .map(a -> "#@" + a)
                .collect(Collectors.joining("/@#"));
    }

    public List<String> decode(String str) {
         if (str == null || str.isEmpty()) {
            return new ArrayList<>();
        }        
        String cleaned = str.replace("#@", "");
        return Arrays.asList(cleaned.split("/@#", -1));
    }
}
