class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length == 0) return '';
        return strs.map((a) => '#@'+a).join('/@#')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str.length == 0) return []
        // if (!str.includes('$$')) return ['']
        return str.replaceAll('#@', '').split('/@#')
    }
}
