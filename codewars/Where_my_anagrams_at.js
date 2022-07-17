//1.字串2.字串的陣列
//回傳符合的陣列
// 先將字串轉陣列，排序，這樣就可以讓陣列順序性一致去比較

function anagrams(word, words) {
  // let re = new RegExp(/[A-E]/gi)
  let sortWord = word.split('').sort().join('');
  console.log(sortWord);
  let newArray = words.filter((item) => {
    console.log(item.split('').sort())
    return item.split('').sort().join('') === sortWord;
  })
  console.log('result', newArray);
  return newArray;
}

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])
