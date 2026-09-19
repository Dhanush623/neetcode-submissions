class Solution {
    public int[] productExceptSelf(int[] nums) {
        int pre = 1;
        int post = 1;
        int list[] = new int[nums.length];
        for (int i = 0; i < nums.length; i++) {
            list[i] = 1;
        }
        for (int i = 0; i < nums.length; i ++) {
            list[i] *= pre;
            pre *= nums[i];
        }
        for (int i = nums.length - 1; i >= 0; i--) {
            list[i] *= post;
            post *= nums[i];
        }
        return list;
    }
}  
