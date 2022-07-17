// 使用奇偶數判別

//Split Strings,最後的字母沒有配對要用‘＿’

function solution(str) {
  let arr = str.split('')
  let newArray = []
  console.log(arr)
  for (let i = 0; i < arr.length; i += 2) {
    console.log('i', i)
    if (arr[i + 1]) newArray.push(arr[i] + arr[i + 1])
    else newArray.push(arr[i] + '_')
  }
  console.log(newArray)
  return newArray
}
solution('abcbn')

//精簡的solution
function solution(s) {
  return (s + "_").match(/.{2}/g) || []
}


