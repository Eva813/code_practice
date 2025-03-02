function solution(A, K) {
  // if A is meant to be shifted by its own length (K) then just return the array
  if (A.length === K || K === 0) {
    return A
  }

  // Run K number of times saving last element in the array as a temporary variable, adding it to the front of the array and removing the last element
  for (let i = 0; i < K; i++) {
    //取出最後一個
    let lastElement = A[A.length - 1]
    A.unshift(lastElement)
    A.pop()
  }
  console.log(A)
  return A
}
solution([3, 8, 9, 7, 6], 3)

function solution2(A, K) {
  console.log(K % A.length)
  K = K % A.length;//k比長度小
  //計算切下來的
  const sliceIndex = A.length - K;
  return [...A.slice(sliceIndex), ...A.slice(0, sliceIndex)]
}

solution2([3, 8, 9, 7, 6], 3)



