import React from 'react';

function Head({
  generateNewArray,
  handleMergeSort,
  handleQuickSort,
  handleHeapSort,
  handleSelectionSort,
  handleInsertionSort,
  handleBubbleSort,
}) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: 100,
      }}
    >
      <div className='menu-bar'>
        <button className='generate' onClick={generateNewArray}>
          Generate Array
        </button>
        <button onClick={handleMergeSort}>Merge Sort</button>
        <button onClick={handleQuickSort}>Quick Sort</button>
        <button onClick={handleHeapSort}>Heap Sort</button>
        <button onClick={handleSelectionSort}>Selection Sort</button>
        <button onClick={handleInsertionSort}>Insertion Sort</button>
        <button onClick={handleBubbleSort}>Bubble Sort</button>
      </div>
    </div>
  );
}

export default Head;
