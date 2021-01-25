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
  const { barArray, barCount } = useContext(Context);
  const handleMerging = useVisualizeMerging();
  const handleSwapping = useVisualizeSwapping();

  function handleSorting(sortType) {
    let animation, speed;

    switch (sortType) {
      case 'Merge':
        animation = mergeSort(barArray.slice());
        speed = (1 / barCount) * 6500;
        break;
      case 'Insertion':
        animation = insertionSort(barArray.slice());
        speed = (1 / barCount) * 800;
        break;
      case 'Bubble':
        animation = bubbleSort(barArray.slice());
        speed = (1 / barCount) * 900;
        break;
      case 'Quick':
        animation = quickSort(barArray.slice());
        speed = (1 / barCount) * 7500;
        break;
      case 'Heap':
        animation = heapSort(barArray.slice());
        speed = (1 / barCount) * 2500;
        break;
      case 'Selection':
        animation = selectionSort(barArray.slice());
        speed = (1 / barCount) * 8500;
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
