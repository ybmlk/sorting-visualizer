function bubbleSort(arr) {
  const animation = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    let noSwap = true; // for optimization
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        animation.push([j, j + 1]);
        swap(j, j + 1, arr);
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return animation;
}

function swap(i, j, arr) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

export default bubbleSort;
