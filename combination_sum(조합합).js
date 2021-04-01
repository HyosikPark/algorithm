((candidates, target) => {
  candidates.sort((a, b) => a - b);
  const result = [];
  recursive(0, [], target);
  console.log(result);
  return result;

  function recursive(idx, combi, target) {
    if (target === 0) result.push([...combi]);

    if (target <= 0) return;
    if (idx === candidates.length) return;

    combi.push(candidates[idx]);
    recursive(idx, combi, target - candidates[idx]);
    combi.pop();
    recursive(idx + 1, combi, target);
  }
})([3, 8, 4, 10], 15);
