const animation = [];

function mergeSort(mainArr) {
  mergeSortHelper(mainArr, mainArr.slice(), 0, mainArr.length - 1);
  return animation;
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
  let currChangeIdx = start;

  while (left <= mid && right <= end) {
    if (auxiliaryArr[left] <= auxiliaryArr[right]) {
      mainArr[currChangeIdx++] = auxiliaryArr[left++];
    } else {
      let shiftMid = mid,
        shiftRight = right;

      while (shiftRight > currChangeIdx) {
        animation.push([shiftRight--, auxiliaryArr[shiftMid--], true]);
      }
      animation.push([currChangeIdx, auxiliaryArr[right]]);
      mainArr[currChangeIdx++] = auxiliaryArr[right++];
    }
  }
  while (left <= mid) {
    mainArr[currChangeIdx++] = auxiliaryArr[left++];
  }
  while (right <= end) {
    animation.push([currChangeIdx, auxiliaryArr[right]]);
    mainArr[currChangeIdx++] = auxiliaryArr[right++];
  }
}

export default mergeSort;
