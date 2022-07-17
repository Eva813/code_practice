const NewMember = function (member) {
  // (member[0] >= 55 && member[1] >= 7) ? 'senior' : 'open'
  let temp = []
  member.forEach((item) => {
    // console.log(item)
    temp.push((item[0] >= 55 && item[1] >= 7) ? 'senior' : 'open')
  })
  console.log(temp)
  return temp
}

// [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
NewMember([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]])

// function openOrSenior(data) {
//   return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
// }
