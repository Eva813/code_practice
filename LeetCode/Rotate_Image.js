//Rotate Image
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
//將原本的矩陣斜對角翻
var rotate = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  //reverse
  // Secondly Make Reflected Image Of Matrix
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length / 2; j++) {
      var Temp = matrix[i][j]
      //右側最後的值為長度-1
      matrix[i][j] = matrix[i][matrix.length - j - 1]
      matrix[i][matrix.length - j - 1] = Temp
    }
  }
  return matrix;
};

//https://leetcode.com/problems/rotate-image/solutions/1135931/48rotate-image-javascript/
