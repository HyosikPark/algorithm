function solution(gift, wanted) {
  const obj = gift.reduce((acc, e, i) => {
    acc[e] = acc[e] + 1 || 1;
    return acc;
  }, {});

  console.log(obj);

  const answer = wanted.reduce((acc, e, i) => {
    obj[e] ? obj[e]-- : acc++;

    return acc;
  }, 0);

  console.log(answer);
}

solution([1, 2, 3, 3, 3, 4], [2, 3, 3, 5, 1, 1]);
