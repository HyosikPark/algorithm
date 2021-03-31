((str) => {
  const arr = [str[0]];

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] < str[i]) {
      arr.push(str[i]);
    } else {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] > str[i]) {
          arr[j] = str[i];
          break;
        }
      }
    }
  }

  console.log(arr);
})('5162738');
