class Solution {
    public int[][] restoreMatrix(int[] rowSum, int[] colSum) {
        int numRows = rowSum.length;
        int numCols = colSum.length;
        int[][] matrix = new int[numRows][numCols];

        int i = 0, j = 0;
        while (i < numRows && j < numCols) {
            int minSum = Math.min(rowSum[i], colSum[j]);
            matrix[i][j] = minSum;
            rowSum[i] -= minSum;
            colSum[j] -= minSum;

            if (rowSum[i] == 0) {
                i++;
            }
            if (colSum[j] == 0) {
                j++;
            }
        }

        return matrix;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        int[] rowSum = {3, 8};
        int[] colSum = {4, 7};
        int[][] matrix = solution.restoreMatrix(rowSum, colSum);

        // Print the resulting matrix
        for (int[] row : matrix) {
            for (int num : row) {
                System.out.print(num + " ");
            }
            System.out.println();
        }
    }
}
