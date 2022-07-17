//prime r greater than 1 that has no positive divisors other than 1 and itself.
//質數, 質數除了1和本身之外，沒有其他因數的大於1的自然數





function isPrime(num) {
  if (num < 2) return false;
  const limit = parseInt(Math.sqrt(num));
  for (let i = 2; i <= limit; ++i) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

