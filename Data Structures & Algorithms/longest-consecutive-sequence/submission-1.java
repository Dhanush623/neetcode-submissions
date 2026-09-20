class Solution {
    public int longestConsecutive(int[] nums) {
        if (nums.length == 0) return 0;
        Set<Integer> uniqueSet = removeDuplicates(nums);
        int longestConsecutiveNumber = 1;
        List<Integer> numbers = new ArrayList<>(uniqueSet);
        Collections.sort(numbers);
        int i = 0;
        int count = 1;
        while(i < numbers.size() - 1) {
            if((numbers.get(i) + 1) == numbers.get(i + 1)) {
                count += 1; 
            } else {
                longestConsecutiveNumber = Math.max(count, longestConsecutiveNumber);
                count = 1;
            }
            i++;
        }
        return Math.max(count, longestConsecutiveNumber);
    }

    public static Set<Integer> removeDuplicates(int[] nums) {
        Set<Integer> uniqueNumbers = new HashSet<>();
        for (int num : nums) {
            uniqueNumbers.add(num); // Automatically ignores duplicates
        }
        return uniqueNumbers;
    }
}
