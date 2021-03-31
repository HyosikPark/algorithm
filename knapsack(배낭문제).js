const item = [
  [60, 10],
  [100, 20],
  [120, 30],
];

((item, cap) => {
  const arr = Array.from({ length: item.length + 1 }, () => []);

  for (let i = 0; i < item.length + 1; i++) {
    for (let j = 0; j < cap + 1; j++) {
      if (!i || !j) arr[i][j] = 0;
      else if (item[i - 1][1] > j) arr[i][j] = arr[i - 1][j];
      else
        arr[i][j] = Math.max(
          arr[i - 1][j - item[i - 1][1]] + item[i - 1][0],
          arr[i - 1][j]
        );
    }
  }
  console.log(arr);
})(item, 50);
