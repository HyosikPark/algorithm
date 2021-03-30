(function recursive(arr, n) {
  let result = [];
  if (n === 1) return arr.map((e) => [e]);

  arr.forEach((e, i, arr) => {
    const rest = arr.filter((_, idx) => i !== idx);
    const cases = recursive(rest, n - 1);
    const permutations = cases.map((v) => [e, ...v]);
    result.push(...permutations);
  });

  console.log(result);
  return result;
})([1, 2, 3, 4], 3);
