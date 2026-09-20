class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let x = 0, y = numbers.length -1;
        while (x < y) {
            const total = numbers[x] + numbers[y]
            if (total > target) {
                y--
            } else if (total < target) {
                x++
            } else {
                return [x+1, y+1]
            }
        }
        return []
    }
}
