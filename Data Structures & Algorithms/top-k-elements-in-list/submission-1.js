class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numbers = {}
        for (const number of nums) {
            numbers[number] = (numbers[number] || 0) + 1
        }
        // const numbers = _.countBy() // Easy to count number
        const list = Object.entries(numbers).map(([num, count]) => [count, num]).sort((a, b) => b[0] -a[0])
        // return list.slice(0, k)
        return Array.from({ length: Math.min(k, list.length) }, (_, i) => list[i][1]);
    }
}
