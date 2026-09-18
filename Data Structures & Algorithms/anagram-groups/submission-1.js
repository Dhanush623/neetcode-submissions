class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = Object.groupBy(strs, (str) => Array.from(str).sort().join())
        return Object.values(groups).sort()
    }
}
