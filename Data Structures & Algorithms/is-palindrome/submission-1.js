class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleanedChars = [];
        for (let i = 0; i < s.length; i++) {
            const char = s[i];
            if (/[a-zA-Z0-9]/.test(char)) {
                cleanedChars.push(char.toLowerCase());
            }
        }

        const normaliseString = cleanedChars.join('');
        const reversString = [...cleanedChars].reverse().join('');
        return reversString === normaliseString;
    }
}
