function solution(A) {
  // write your code in JavaScript (Node.js 4.0.0)
  //將array 進行排序
  //0 ≤ P < Q < R < N 
  A.sort((a, b) => {
    return a - b;
  })
  for (let i = 0; i < A.length - 2; i++) {
    for (let q = i + 1; q < A.length - 1; q++) {
      for (let r = q + 1; r < A.length; r++) {
        if (testTriangle(i, q, r)) {
          return 1
        }
      }
    }
  }
  return 0;

}

function solution(A) {
  // write your code in JavaScript (Node.js 4.0.0)
  //將array 進行排序
  //0 ≤ P < Q < R < N 
  A.sort((a, b) => {
    return a - b;
  })
  for (let i = 0; i < A.length - 2; i++) {
    let q = i + 1;
    let r = q + 1;
    if (testTriangle(i, q, r)) {
      return 1
    }
  }
  return 0;

}

function testTriangle(P, Q, R) {
  if (A[P] + A[Q] > A[R] && A[Q] + A[R] > A[P] && A[R] + A[P] > A[Q]) {
    return true
  }
  return false
}

solution([10, 2, 5, 1, 8, 20])


//https://app.codility.com/demo/results/training5FCWC6-F95/
//https://www.youtube.com/watch?v=nszV0tUOqTc
