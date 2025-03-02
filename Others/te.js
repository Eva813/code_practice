// function getWeekDayFromOffset(d, x) {

//   // Array of week days
//   const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

//   // Find index of input day "d"
//   const dIndex = days.indexOf(d);

//   // Take add "x" offset to index of "d", and apply modulo % to
//   // revolve back through array
//   const xIndex = (dIndex + x) % days.length;

//   // Return the day for offset "xIndex"
//   return days[xIndex];
// }


//找bug1
function solution(A) {
  var ans = 0;
  //i 原本為1 -> 0
  for (i = 0; i < A.length; i++) {
    if (ans > A[i]) {
      ans = A[i];
    }
  }
  console.log(ans)
  return ans;
}
solution([-1, 1, -2, 2]);//找出最小


//找bug2
function solution2(A, K) {
  var n = A.length;
  //改為 let
  for (let i = 0; i < n - 1; i++) {
    if (A[i] + 1 < A[i + 1])
      return false;
  }
  if (A[0] != 1 && A[n - 1] != K)//Change here && to ||
    return false;
  else
    return true;
}
solution2([1, 1, 2, 3, 3], 3)
