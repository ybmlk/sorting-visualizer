function insertionSort(arr) {
  const animation = [];

  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    let j = i - 1;

    while (j >= 0 && curr < arr[j]) {
      animation.push([j + 1, arr[j]]);
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    animation.push([j + 1, curr]);
    arr[j + 1] = curr;
  }
  return animation;
}

export default insertionSort;
