const animation = [];

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;

      // if (arr[j] < arr[i]) {
      //   animation.push([i, j]);
      //   swap(i, j, arr);
      // }
    }

    if (i !== min) {
      animation.push([i, min]);
      swap(i, min, arr);
    }
  }
  return animation;
}

function swap(i, j, arr) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

export default selectionSort;
