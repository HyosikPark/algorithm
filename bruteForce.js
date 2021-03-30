(() => {
  const set = new Set();

  function recursive(arr, str) {
    if (arr.length) {
      for (let i = 0; i < arr.length; i++) {
        const copy = [...arr];
        copy.splice(i, 1);

        recursive(copy, str + arr[i]);
      }
    }

    if (str) set.add(+str);
  }

  recursive([1, 2, 3, 4], '');

  console.log(set);
})();
