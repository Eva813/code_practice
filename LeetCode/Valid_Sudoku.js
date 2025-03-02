/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (let i = 0; i <= 8; i++) {
    let arrTemp = board[i];
    // console.log('1', arrTemp)
    //判斷重複值，如果有重複就直接回傳false
    if (!checkRepeat(arrTemp)) return false;
    //這邊取每一行的值取出來
    arrTemp = [];
    for (let j = 0; j <= 8; j++) {
      //把值放進陣列中，製作直的陣列
      arrTemp.push(board[j][i]);

      // console.log('2', arrTemp)
      //因為九宮格是3*3的，所以判斷每三行跑一次(這裡不知道怎畫！！)
      if ((i % 3) == 0 && (j % 3) == 0) {
        let innerArrTemp = [];
        //用迴圈取目前行開始三行的位置
        for (let k = i; k < (i + 3); k++) {
          //把用slice抓到的三個值合併到arrTemp陣列中
          console.log(k)
          innerArrTemp = innerArrTemp.concat(board[k].slice(j, j + 3))
        }
        console.log(innerArrTemp)
        //判斷重複值，如果有重複就直接回傳false
        if (!checkRepeat(innerArrTemp))
          return false;
      }
    }

  }
};

//https://www.youtube.com/watch?v=wjkKd5yBxRA

//判斷陣列中是否有重複
function checkRepeat(arrTemp) {
  //把陣列內容輸出成字串
  let arrStr = JSON.stringify(arrTemp), str;
  // console.log(arrStr)
  for (let i = 0; i < arrTemp.lenght; i++) {
    if (arrTemp[i] == '.')
      continue;
    /*精華在這裡，
      用目前要判斷的值去找在字串中第一次出現的位置和最後一次出現的位置，
      如果有一樣就代表沒重複，不同就代表有重複，所以回傳False*/
    if (arrStr.indexOf(arrTemp[i]) != arrStr.lastIndexOf(arrTemp[i])) {
      return false;
    }
  }
  //全部跑完沒有回傳false就代表沒重複，所以在最後回傳True
  return true;
}
// checkRepeat(["8", "3", ".", ".", "7", ".", ".", ".", "."])
//https://bobbyhadz.com/blog/javascript-check-if-array-contains-duplicates
isValidSudoku([
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
])
//[演算法][JavaScript]演算法挑戰系列(10)-Valid Sudoku: https://ithelp.ithome.com.tw/articles/10198639
