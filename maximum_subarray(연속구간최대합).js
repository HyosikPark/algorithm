((arr) => {
  let max = arr[0];
  let sum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (sum >= 0) {
      sum += arr[i];
    } else {
      sum = arr[i];
    }

    if (sum > max) max = sum;
  }

  console.log(max);
})([-10, -7, 5, -7, 10, 5, -2, 17, -25, 1]);
