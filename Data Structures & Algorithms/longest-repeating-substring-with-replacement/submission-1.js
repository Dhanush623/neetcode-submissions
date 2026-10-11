class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count = new Map()
        let result = 0
        let left = 0
        let max = 0

        for(let i = 0; i < s.length; i++) {
            count.set(s[i], (count.get(s[i]) || 0) + 1)
            max = Math.max(max, count.get(s[i]))
            while (i - left + 1- max > k) {
                count.set(s[left], count.get(s[left]) - 1)
                left++
            }
            result = Math.max(result, i -left + 1)
        }
        return result
    }
}
