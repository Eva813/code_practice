//将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组
//_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
//_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]

//依據size (整數)
function chunk(arr, size) {
  const chunkedArr = [];
  for (let i = 0; i < arr.length; i += size) {
    chunkedArr.push(arr.slice(i, i + size));
  }
  console.log('chunk', [...chunkedArr])
  return chunkedArr;

}

chunk(['a', 'b', 'c', 'd'], 2)
//=> [['a', 'b'], ['c', 'd']]
//export default chunk
