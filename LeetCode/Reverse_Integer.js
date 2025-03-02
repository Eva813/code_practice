/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let max = 2 ** 31 - 1;
  let min = -1 * 2 ** 31;

  let result = parseFloat(x.toString().split('').reverse().join('')) * Math.sign(x);
  if (result > max || result < min) return 0;
  else return result;
};
reverse(-1230)

//parseFloat() 函数可解析一个字符串，并返回一个浮点数
//Math.sign
//https://www.freecodecamp.org/news/js-basics-how-to-reverse-a-number-9aefc20afa8d/
// https://tie.pub/2020/04/math-sign/
