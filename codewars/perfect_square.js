

//https://stackoverflow.com/questions/30919111/whats-the-best-way-in-javascript-to-test-if-a-given-parameter-is-a-square-numbe
const findNextSquare = function (sq) {
  //找出完全平方，他的下一個是什麼？
  // Return the next square if sq is a perfect square, -1 otherwise
  if (sq < 0 || Math.sqrt(sq) % 1 !== 0) return -1;

  return Math.pow(Math.sqrt(sq) + 1, 2)

}
findNextSquare(15241383936)
console.log(findNextSquare(15241383936))
