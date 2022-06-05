
// 題目為：將Ａ轉為Ｔ, Ｃ轉為Ｇ Complementary DNA

//自己的解法
// let DNAStrand = function (strand) {
//   strandArr = strand.split('');
//   let newArray = []
//   console.log(strandArr)
//   strandArr.forEach((e) => {
//     if (e === 'A') {
//       newArray.push('T')
//     } else if (e === 'T') {
//       newArray.push('A')
//     } else if (e === 'C') {
//       newArray.push('G')
//     } else if (e === 'G') {
//       newArray.push('C')
//     }
//   })
//   console.log(newArray.join(''))
// }


//可以做一個物件，將要替代的字母寫好，再用map呼叫key值，取得 value 值
let table = {
  C: 'G',
  G: 'C',
  A: 'T',
  T: 'A'
};
let DNAStrand = function (strand) {
  strandArr = strand.split('');
  let result = [];
  result = strandArr.map((item) => {
    //console.log(table[`${item}`])
    return table[`${item}`]
  })
  //console.log(result.join(''))
  return result.join('')
}

DNAStrand('GTAT')

console.log(DNAStrand('GTAT'))


//解法
// var pairs = { 'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C' };

// function DNAStrand(dna) {
//   return dna.split('').map(function (v) { return pairs[v] }).join('');
// }
