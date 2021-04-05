function dfs(path, start, result, answer) {
  for (let i = 0; i < path.length; i++) {
    const [from, to] = path[i];

    if (from === start) {
      const copyPath = [...path];
      copyPath.splice(i, 1);
      const copyResult = [...result];
      copyResult.push(to);
      dfs(copyPath, to, copyResult, answer);
    }
  }
  answer.push(result);
  return answer;
}

function solution(path, passenger) {
  const cases = dfs(path, 1, [1], []);
  console.log(cases);
}
solution(
  [
    [1, 2],
    [1, 3],
    [1, 5],
    [3, 4],
    [4, 5],
    [3, 6],
  ],
  [1, 1, 1, 1, 1, 1]
);
