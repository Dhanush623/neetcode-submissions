class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length == 0) return 0;
        const numbers = [...new Set(nums)];
        numbers.sort((a, b) => a - b)
        let longestConsecutive = 1;
        let i = 0;
        let count = 1;
        while (i < numbers.length -1) {
            if ((numbers[i] + 1) == numbers[i + 1]) {
                count += 1
            } else {
                longestConsecutive = Math.max(count, longestConsecutive)
                count = 1
            }
            i++
        }
        return Math.max(count, longestConsecutive)
    }
}
