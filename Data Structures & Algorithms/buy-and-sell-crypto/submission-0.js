class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let start = prices[0]
        let result = 0
        for(let x = 0; x<prices.length; x++) {
            result = Math.max(result, prices[x] - start)
            start = Math.min(start,prices[x])
        }
        return result
        
    }
}
