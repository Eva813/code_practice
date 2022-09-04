// 陣列的最尾數
// 9 -> 改為0


let plusOne = function (digits) {
  //從右至左loop
  for (let i = digits.length - 1; i >= 0; i--) {
    //最右邊遇到不是9就，直接return 結果

    if (digits[i] !== 9) {
      digits[i]++;
      return digits;
    } else {
      //當遇到是9的時候,就改為0 並進入下一個回圈
      digits[i] = 0;
    }
  }
  console.log('di', digits)
  // 處理全部數字皆為9 (99、999、)，將1加入陣列的最前面
  digits.unshift(1);
  return digits;
};

plusOne([9, 9])
//https://www.youtube.com/watch?v=Llk4N7ERILg


 //使用展開陣列，可以將數值轉為陣列:如 123=> [1,2,3]
  //https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-7.php
  // const digitize = (item) => [...`${item}`].map((i) => {
  //   console.log('i', i)
  //   return parseInt(i)
  // });
