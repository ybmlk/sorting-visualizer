function quickSort(arr) {
  quickSortHelper(arr, 0, arr.length - 1);
  return arr;
}

function quickSortHelper(arr, left, right) {
  if (left >= right) return;
  const pivotIdx = partition(arr, left, right);
  quickSortHelper(arr, left, pivotIdx - 1);
  quickSortHelper(arr, pivotIdx, right);
}

function partition(arr, left, right) {
  const midIdx = Math.floor((left + right) / 2);
  const pivot = arr[midIdx];

  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
    }
    while (arr[right] > pivot) {
      right--;
    }
    if (left <= right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }
  return left;
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

export default quickSort;
