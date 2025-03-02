function solution(A) {
  // write your code in JavaScript (Node.js 4.0.0)
  let hashMap = {}
  let result = null;
  for (let i = 0; i < A.length; i++) {
    (!hashMap[A[i]]) ? hashMap[A[i]] = 1 : hashMap[A[i]]++
  }
  console.log(hashMap)
  for (let item in hashMap) {
    if (hashMap[item] % 2 !== 0) result = item
  }
  console.log(result)
  return result

}

solution([2, 2, 3, 3, 4])

//https://glot.io/snippets/g01mn6r9vt
