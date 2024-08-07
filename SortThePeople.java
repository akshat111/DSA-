//https://www.youtube.com/watch?v=1hq5k_I6TqY
// leetcode -2418

class Solution {
    public String[] sortPeople(String[] names, int[] heights) {
            Map<Integer,String> map = new HashMap<>();

            for(int i =0; i<names.length;i++){
                map.put(heights[i], names[i]);
            }

            String[] resultArray = new String[names.length];
            Arrays.sort(heights);

            int index = 0;

            for(int i = heights.length -1; i>=0; i--){
                resultArray[index++] = map.get(heights[i]);
            }
            return resultArray;
    }
}
