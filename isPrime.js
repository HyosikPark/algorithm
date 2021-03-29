((n) => {
  const isPrime = Array.from({ length: n + 1 }, () => 1);
  isPrime[0] = isPrime[1] = 0;

  for (let i = 0; i < Math.sqrt(n); i++) {
    if (isPrime[i]) {
      for (let j = i ** 2; j < isPrime.length; j += i) {
        if (isPrime[j]) isPrime[j] = 0;
      }
    }
  }

  const prime = isPrime.reduce((acc, e, i) => {
    return e ? acc.concat(i) : acc;
  }, []);

  console.log(prime);
})(100);
