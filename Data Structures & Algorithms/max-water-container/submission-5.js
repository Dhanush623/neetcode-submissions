class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let result = 0; 
        let start = 0;
        let end = heights.length - 1
        while (start < end) {
            const x = Math.min(heights[start], heights[end])
            const y = end - start
            result = Math.max(result, x * y)
            // console.log(x,y, result, start, end)
            if (heights[start] > heights[end]) {
                end--
            } else {
                start++
            }
        }
        return result
    }
}
