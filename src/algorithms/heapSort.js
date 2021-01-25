function heapSort(arr) {
  const animation = [];

  const mid = Math.floor(arr.length / 2);
  // Build Max Binary Heap
  for (let i = mid; i >= 0; i--) {
    heapify(i, arr.length);
  }
  // Extract the max value from the heap and put it at the end of the array
  for (let i = arr.length - 1; i >= 0; i--) {
    swap(0, i); // first element (index of 0) is the max value
    heapify(0, i); // after swap bubble down the new first element to it's correct spot
  }
  return animation;

  function heapify(idx, heapLimit) {
    const leftChild = 2 * idx + 1; // left child for a given parent index of 'idx'
    const rightChild = 2 * idx + 2; // right child for a given parent index of 'idx'
    let max = idx;

    if (leftChild < heapLimit && arr[leftChild] > arr[max]) max = leftChild;
    if (rightChild < heapLimit && arr[rightChild] > arr[max]) max = rightChild;

    // if the max value is not the parent, but one of the children, then swap
    if (max !== idx) {
      swap(idx, max);
      heapify(max, heapLimit);
    }
  }

  function swap(i, j) {
    animation.push([i, j]);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

export default heapSort;
