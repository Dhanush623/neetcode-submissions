class Solution {
    public int[] twoSum(int[] nums, int target) {
    // 1. Fixed: Changed nums.length() to nums.length
    for (int i = 0; i < nums.length; i++) {
        // Optimization: Start j at i + 1 to avoid checking pairs twice or matching the same element
        for (int j = i + 1; j < nums.length; j++) {
            
            // 2. Fixed: Check the values inside the array, not the loop indices
            if (nums[i] + nums[j] == target) {
                return new int[]{i, j};
            }
        }
    }
    // 3. Fixed: Moved out of the loop so it only returns empty if NO pair is found
    return new int[]{};
}
}
