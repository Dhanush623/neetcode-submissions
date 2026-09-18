class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> numbers = new HashMap<>();
        List<int[]> list = new ArrayList<>();
        for(int num: nums) {
            numbers.put(num, numbers.getOrDefault(num, 0) + 1);
        }
        for(Map.Entry<Integer, Integer>item: numbers.entrySet()) {
            list.add(new int[] {item.getValue(), item.getKey()});
        }
        list.sort((a, b) -> b[0] - a[0]);
        return list.stream()
          .limit(k)
          .mapToInt(array -> array[1])
          .toArray();
    }
}
