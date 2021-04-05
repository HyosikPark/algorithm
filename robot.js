function recursive(arr, n) {
  let result = [];
  if (n === 1) return arr.map((e) => [e]);

  arr.forEach((e, i, arr) => {
    const rest = arr.slice(i + 1);
    const cases = recursive(rest, n - 1);
    const combi = cases.map((v) => [e, ...v]);
    result.push(...combi);
  });

  return result;
}

function solution(nast, r) {
  const arr = nast.map((e) => {
    return e.reduce((acc, n, i) => {
      if (n) acc.push(i);
      return acc;
    }, []);
  });

  console.log(arr);
  const ok = Array.from({ length: nast[0].length }, (_, i) => i);
  const combi = recursive(ok, r);
  console.log(combi);

  let max = 0;
  combi.forEach((e) => {
    let temp = 0;
    outer: for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (!e.includes(arr[i][j])) continue outer;
      }
      temp++;
    }

    max = Math.max(max, temp);
  });

  console.log(max);
}

solution(
  [
    [1, 0, 0],
    [1, 1, 0],
    [1, 1, 0],
    [1, 0, 1],
    [1, 1, 0],
    [0, 1, 1],
  ],
  2
);
