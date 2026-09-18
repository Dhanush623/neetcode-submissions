class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false
        const a = Array.from(s).sort()
        const b = Array.from(t).sort()
        return (JSON.stringify(a) === JSON.stringify(b))
    }
}
