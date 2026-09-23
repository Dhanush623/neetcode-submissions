class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if (!height || height.length === 0) {
            return 0;
        }
        let start = 0;
        let end = height.length - 1;
        let startMax = height[start]
        let endMax = height[end]
        let result = 0;
        while(start < end) {
            if (height[start] < height[end]) {
                start++;
                startMax = Math.max(startMax, height[start]);
                result += startMax - height[start];
            } else {
                end--;
                endMax = Math.max(endMax, height[end]);
                result += endMax - height[end];
            }
        }
        return result;
    }
}
