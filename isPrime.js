((n) => {
  const isPrime = Array.from({ length: n + 1 }, () => 1);
  isPrime[0] = isPrime[1] = 0;

  for (let i = 2; i < Math.sqrt(n); i++) {
    if (isPrime) {
      for (let j = i ** 2; j < isPrime.length; j += i) {
        isPrime[j] = 0;
      }
    }
  }

  const answer = isPrime.reduce((acc, e, i) => {
    return e ? acc.concat(i) : acc;
  }, []);

  console.log(answer);
})(100);
