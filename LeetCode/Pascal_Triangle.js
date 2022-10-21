
//每次在陣列最左邊加入1

///https://www.youtube.com/watch?v=LQUZYf-hr6M
var generate2 = function (numRows) {
  if (numRows < 1) return []
  if (numRows === 1) return [[1]]
  const triangle = [[1]]

  for (let i = 1; i < numRows; i++) {
    let prevRow = triangle[i - 1]
    let curRow = []
    curRow.push(1)

    for (j = 1; j < prevRow.length; j++) {
      curRow[j] = prevRow[j] + prevRow[j - 1]
    }
    //最後在陣列中加入 1 ,作為陣列結尾
    curRow.push(1)
    triangle.push(curRow)
  }
  return triangle
};


//numRows = 5
// Output: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
