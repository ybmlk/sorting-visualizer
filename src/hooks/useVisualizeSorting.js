import { useContext } from 'react';
import Context from '../Context';
import useVisualizeMerging from './useVisualizeMerging';
import useVisualizeSwapping from './useVisualizeSwapping';
import {
  mergeSort,
  insertionSort,
  bubbleSort,
  quickSort,
  heapSort,
  selectionSort,
} from '../algorithms';

function useVisualizeSorting() {
  const { barArray } = useContext(Context);
  const handleMerging = useVisualizeMerging();
  const handleSwapping = useVisualizeSwapping();

  function handleSorting(sortType) {
    let animation, speed;

    switch (sortType) {
      case 'Merge':
        animation = mergeSort(barArray.slice());
        speed = 50;
        break;
      case 'Insertion':
        animation = insertionSort(barArray.slice());
        speed = 10;
        break;
      case 'Bubble':
        animation = bubbleSort(barArray.slice());
        speed = 10;
        break;
      case 'Quick':
        animation = quickSort(barArray.slice());
        speed = 60;
        break;
      case 'Heap':
        animation = heapSort(barArray.slice());
        speed = 30;
        break;
      case 'Selection':
        animation = selectionSort(barArray.slice());
        speed = 80;
        break;
      default:
        break;
    }

    if (sortType === 'Merge' || sortType === 'Insertion') handleMerging(animation, speed);
    else handleSwapping(animation, speed);
  }
  return handleSorting;
}

export default useVisualizeSorting;
