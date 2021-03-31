((a, b) => {
  const gcd = (a, b) => (a % b ? gcd(b, a % b) : b);
  const lcm = (a, b) => (a * b) / gcd(a, b);

  console.log(gcd(a, b), lcm(a, b));
})(4, 16);
