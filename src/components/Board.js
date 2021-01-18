import React, { useState, useEffect } from 'react';
import Head from './Head';

import selectionSort from '../algorithms/selectionSort';
import insertionSort from '../algorithms/insertionSort';
import bubbleSort from '../algorithms/bubbleSort';
import mergeSort from '../algorithms/mergeSort';
import quickSort from '../algorithms/quickSort';
import heapSort from '../algorithms/heapSort';

import visualizeSwapping from '../animation/visualizeSwapping';
import visualizeMerging from '../animation/visualizeMerging';

const NUM_OF_BARS = 150;
const MIN_HEIGHT = 5;
const MAX_HEIGHT = 550;

function Board() {
  const [barArray, setBarArray] = useState([]);

  useEffect(() => {
    generateNewArray();
  }, []);

  const generateNewArray = () => {
    const newArray = [];
    for (let i = 0; i < NUM_OF_BARS; i++) {
      const randHeight = Math.floor(Math.random() * (MAX_HEIGHT - MIN_HEIGHT + 1)) + MIN_HEIGHT;
      newArray.push(randHeight);
    }
    setBarArray(newArray);
  };

  const handleMergeSort = () => {
    const animation = mergeSort(barArray.slice());
    visualizeMerging(animation, 50, setBarArray, barArray);
  };

  const handleInsertionSort = () => {
    const animation = insertionSort(barArray.slice());
    visualizeMerging(animation, 10, setBarArray, barArray);
  };

  const handleBubbleSort = () => {
    const animation = bubbleSort(barArray.slice());
    visualizeSwapping(animation, 10, setBarArray, barArray);
  };

  // todo: color the pivot
  const handleQuickSort = () => {
    const animation = quickSort(barArray.slice());
    visualizeSwapping(animation, 60, setBarArray, barArray);
  };

  const handleHeapSort = () => {
    const animation = heapSort(barArray.slice());
    visualizeSwapping(animation, 30, setBarArray, barArray);
  };

  const handleSelectionSort = () => {
    const animation = selectionSort(barArray.slice());
    visualizeSwapping(animation, 80, setBarArray, barArray);
  };

  const actions = {
    generateNewArray,
    handleMergeSort,
    handleQuickSort,
    handleHeapSort,
    handleSelectionSort,
    handleInsertionSort,
    handleBubbleSort,
  };

  return (
    <div>
      <Head {...actions} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          height: 580,
        }}
      >
        {barArray.map((height, idx) => {
          return (
            <div
              key={idx}
              className='array-bar'
              style={{ height, width: 5, backgroundColor: 'rgba(66, 134, 244, 0.8)', margin: 0.5 }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default Board;
