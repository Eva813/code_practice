
let newArr = [1, 2, 3, 4, 5].filter((item) => {
  if (item % 2 == 0) return item
})

let mapArr = [1, 2, 3, 4, 5].map((item) => {
  if (item % 2 === 0) return item
})
console.log(newArr)
console.log(mapArr)
