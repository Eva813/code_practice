//使用ASCII 數值
var titleToNumber = function (columnTitle) {
  //A-Z : 26
  const dict = {
    A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 10, K: 11, L: 12, M: 13, N: 14,
    O: 15, P: 16, Q: 17, R: 18, S: 19, T: 20, U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26
  }
  let number = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    console.log(number)//i = 1 近來（第二圈）
    number = number * 26 + dict[columnTitle[i]];
    console.log('in', number)
    //0*26 + 26
    //26*26 +25 =701

  }
};
// titleToNumber("ZY")


//https://dev.to/drewhsu86/leetcode-daily-excel-sheet-column-number-bce

//AA
// 27 = 1 * 26 + 1 * 1
// 27 = A * (26 ^ 1) + A * (26 ^ 0)

// 701 = 26*26 + 25*1 
// 701 = Z * (26 ^ 1) + Y * (26 ^ 0)


//從右算到左
var titleToNumber2 = function (s) {
  // s is a string, but basically converts to a number in base 26 
  // also instead of zero we have 26 
  const dict = {
    A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 10, K: 11, L: 12, M: 13, N: 14,
    O: 15, P: 16, Q: 17, R: 18, S: 19, T: 20, U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26
  }
  let number = 0;
  let power = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    number = number + Math.pow(26, power) * dict[s[i]];
    power++;
  }
  console.log(number)
  return number;
};
titleToNumber("ZY") //26的幾次＊數值
