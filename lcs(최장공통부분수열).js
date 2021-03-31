((s1, s2) => {
  // string to array
  const arr1 = [...s1];
  const arr2 = [...s2];
  const len1 = arr1.length;
  const len2 = arr2.length;

  const array = Array.from({ length: len1 + 1 }, () =>
    Array.from({ length: len2 + 1 }, () => 0)
  );

  for (let i = 0; i <= len1; i++) {
    for (let j = 0; j <= len2; j++) {
      array[i][j] = 0;
    }
  }

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (arr1[i - 1] === arr2[j - 1]) array[i][j] = array[i - 1][j - 1] + 1;
      else array[i][j] = Math.max(array[i][j - 1], array[i - 1][j]);
    }
  }
})('abceacdfedd', 'abcdeeabeesefeed'); // abceafed
