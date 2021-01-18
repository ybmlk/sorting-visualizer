function mergeSort(mainArr) {
  mergeSortHelper(mainArr, mainArr.slice(), 0, mainArr.length - 1);
  return mainArr;
}

function mergeSortHelper(mainArr, auxiliaryArr, start, end) {
  if (start >= end) return;

  const mid = Math.floor((start + end) / 2);
  mergeSortHelper(auxiliaryArr, mainArr, start, mid);
  mergeSortHelper(auxiliaryArr, mainArr, mid + 1, end);
  doMerge(mainArr, auxiliaryArr, start, mid, end);
}

function doMerge(mainArr, auxiliaryArr, start, mid, end) {
  let left = start;
  let right = mid + 1;
  let currSwapIdx = start;

  while (left <= mid && right <= end) {
    if (auxiliaryArr[left] <= auxiliaryArr[right]) {
      mainArr[currSwapIdx++] = auxiliaryArr[left++];
    } else {
      mainArr[currSwapIdx++] = auxiliaryArr[right++];
    }
  }

  while (left <= mid) {
    mainArr[currSwapIdx++] = auxiliaryArr[left++];
  }
  while (right <= end) {
    mainArr[currSwapIdx++] = auxiliaryArr[right++];
  }
}

export default mergeSort;
// console.log(mergeSort([4, 32, -10, -3, 10]));
