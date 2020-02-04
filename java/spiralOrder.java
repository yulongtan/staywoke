class Solution {
  public List<Integer> spiralOrder(int[][] matrix) {
    List<Integer> result = new ArrayList();
    if (matrix.length == 0) {
      return result;
    }
    int rowStart = 0;
    int colStart = 0;
    int rowEnd = matrix.length;
    int colEnd = matrix[0].length;

    while (true) {

      // right
      for (int i = colStart; i < colEnd; i++) {
        result.add(matrix[rowStart][i]);
      }

      rowStart++;
      if (rowStart >= rowEnd) {
        break;
      }

      // down
      for (int i = rowStart; i < rowEnd; i++) {
        result.add(matrix[i][colEnd - 1]);
      }

      colEnd--;
      if (colEnd <= colStart) {
        break;
      }

      // left
      for (int i = colEnd - 1; i >= colStart; i--) {
        result.add(matrix[rowEnd - 1][i]);
      }

      rowEnd--;
      if (rowEnd <= rowStart) {
        break;
      }

      // up
      for (int i = rowEnd - 1; i >= rowStart; i--) {
        result.add(matrix[i][colStart]);
      }

      colStart++;
      if (colStart >= colEnd) {
        break;
      }
    }
    return result;
  }

}