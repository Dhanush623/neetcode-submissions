class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let numbers = []
        for (let i = 0; i < nums.length; i++) {
            if (numbers.includes(nums[i])) {
                return true;
            }
            numbers.push(nums[i])
        }
        return false;
    }
}
