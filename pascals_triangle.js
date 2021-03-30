const recursive = (height, arr) => {
  if (arr.length === height) return arr;

  arr.push([]);

  const before = arr[arr.length - 2];
  const after = arr[arr.length - 1];
  after.push(1);

  for (let i = 1; i < before.length; i++) {
    after.push(before[i] + before[i - 1]);
  }
  after.push(1);

  return recursive(height, arr);
};

((height) => {
  const result = recursive(height, [[1]]);

  console.log(result);
})(5);
