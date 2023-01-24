// String to Integer (atoi)
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  //去除空白,使用正則
  let r = /^(-|\+)?\d+/;
  let str = s.trim().match(r);
  let res = str ? Number(str[0]) : 0;
  const Max = Math.pow(2, 31) - 1;
  const Min = Math.pow(-2, 31);
  //判斷正數、負數
  return res >= 0 ? Math.min(res, Max) : Math.max(res, Min)

  console.log(s.trim().match(r))
};

myAtoi('   -42')

//https://juejin.cn/post/7142054561841643557

var myAtoi2 = function (str) {
  //parseFloat?
  const number = parseFloat(str, 10);
  console.log(number)
  const MAX = Math.pow(2, 31) - 1, MIN = Math.pow(-2, 31);
  if (isNaN(number)) {
    return 0;
  } else if (number < MIN || number > MAX) {
    return number < MIN ? MIN : MAX;
  } else {
    return number;
  }
};
myAtoi2('4193 with words')
