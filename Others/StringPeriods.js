//a -> bcababcababcab
//ab -> cababcababcab
//abc-> ababcababcab
//abca -> babcababcab
//abcab -> abcababcab
const stringPeriods = (s) => {
  if (s.length < 2) return -1
  let recursives = getRecursive(s)
  console.log(recursives)
  //處理
  if (recursives == '') {
    for (let j = 2; j < s.length; j++) {
      //將前面沒配到的切掉
      recursives.push(getRecursive(s.slice(j)))
    }
  } else {
    return recursives[recursives.length - 1]
  }
  //建立新的空陣列
  let lengthOfArr = [];
  recursives.forEach(arr => lengthOfArr.push(arr.length));
  let indexOfLargeArr = lengthOfArr.indexOf(Math.max(...lengthOfArr))

  return recursives[recursives.length - 1][recursives[indexOfLargeArr].length - 1]

}

//遞迴一直抓出字串比對
const getRecursive = (subStr) => {
  let recursive = [];
  for (let i = 0; i < subStr.length; i++) {
    let temp = subStr.slice(0, i);
    console.log(temp, '@@@', subStr.slice(i))
    console.log(subStr.slice(i).includes(temp))

    subStr.slice(i).includes(temp) && recursive.push(temp)
  }
  return recursive
}

// stringPeriods('abcababcababcab');//abcab
stringPeriods('klmcbvcbvxyz'); //cbv


//https://www.youtube.com/watch?v=LFxpY5297Cg
