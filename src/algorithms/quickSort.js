function quickSort(arr) {
  const animation = [];
  quickSortHelper(0, arr.length - 1);
  return animation;

  function quickSortHelper(left, right) {
    if (left >= right) return;
    const pivotIdx = partition(left, right);
    quickSortHelper(left, pivotIdx - 1);
    quickSortHelper(pivotIdx, right);
  }

  function partition(left, right) {
    const midIdx = Math.floor((left + right) / 2);
    const pivot = arr[midIdx];

    while (left <= right) {
      while (arr[left] < pivot) left++;
      while (arr[right] > pivot) right--;

      if (left <= right) {
        swap(left, right);
        left++;
        right--;
      }
    }
    return left;
  }

  function swap(i, j) {
    animation.push([i, j]);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

export default quickSort;
