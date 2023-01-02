
//質數
const testPrime = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      console.log("prime");
    } else {
      console.log("composite 非質數");
    }
  }

}

const isPrime = (n) => {
  if (n === 1) return false
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false
  }
  return true
}


