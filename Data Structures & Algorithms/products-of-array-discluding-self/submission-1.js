class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let pre = 1
        let post = 1
        const result = new Array(nums.length);
        for(let i = 0; i < nums.length; i++) {
            result[i] = 1
        }
        for (let i = 0; i < nums.length; i++) {
            result[i] *= pre
            pre *= nums[i]
        }
        for(let i = nums.length - 1; i >= 0; i--) {
            result[i] *= post
            post *= nums[i]
        }
        return result
    }
}
