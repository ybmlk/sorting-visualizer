function selectionSort(arr) {
  const animation = [];

  for (let i = 0; i < arr.length; i++) {
    // let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      // if (arr[j] < arr[min]) min = j;
      if (arr[j] < arr[i]) swap(i, j);
    }
    // if (i !== min) swap(i, min);
  }
  return animation;

  function swap(i, j) {
    animation.push([i, j]);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

export default selectionSort;
