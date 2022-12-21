//URL 字串中的空白以 %20 替換
//"Mr John Smith   " => "Mr%20John%20Smith"
const replaceSpace = (str) => {
  const convertToArray = str.trim().split('');
  console.log(convertToArray)
  //使用key，去修改陣列中的資料
  for (let i in convertToArray) {
    if (convertToArray[i] === ' ') {
      convertToArray[i] = '%20'
    }

  }
  console.log(convertToArray.join(''))
  return convertToArray.join('');

}
replaceSpace("Mr John Smith  ")

//其他：https://github.com/careercup/CtCI-6th-Edition-JavaScript-ES2015/blob/master/src/chapter1/ch1-q3.js



//若有給真正長度


function urlify(str, len) {
  let s = "";
  let totalSpaces = str.length - len;
  let frontSpaces = 0;
  let flag = false;
  for (let i = 0; i < str.length; i++) {
    if (flag === false) {
      if (str[i] === " ") frontSpaces++;
      else flag = true;
    }
    if (flag === true && i < str.length - (totalSpaces - frontSpaces)) {
      if (str[i] === " ") s += "%20";
      else s += str[i];
    }
  }

  return s;
}

console.log(urlify("Mr John Smith   ", 13));
