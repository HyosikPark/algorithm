(function recursive(arr, n) {
  const result = [];
  if (n === 1) return arr.map((e) => [e]);

  arr.forEach((e, i, arr) => {
    const rest = arr.slice(i + 1);
    const cases = recursive(rest, n - 1);
    const combinations = cases.map((v) => [e, ...v]);
    result.push(...combinations);
  });

  console.log(result);
  return result;
})([1, 2, 3, 4], 3);
