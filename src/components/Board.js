import React, { useState, useEffect } from 'react';
import selectionSort from '../algorithms/selectionSort';
import insertionSort from '../algorithms/insertionSort';
import bubbleSort from '../algorithms/bubbleSort';
import mergeSort from '../algorithms/mergeSort';
import quickSort from '../algorithms/quickSort';
import heapSort from '../algorithms/heapSort';

const NUM_OF_BARS = 50;
const MIN_HEIGHT = 5;
const MAX_HEIGHT = 550;

function Board() {
  const [barArray, setBarArray] = useState([]);

  useEffect(() => {
    const newArray = [];
    for (let i = 0; i < NUM_OF_BARS; i++) {
      const randHeight = Math.floor(Math.random() * (MAX_HEIGHT - MIN_HEIGHT + 1)) + MIN_HEIGHT;
      newArray.push(randHeight);
    }
    setBarArray(newArray);
  }, []);

  // todo: color bars that are being compared
  // todo: color sorted bars
  const visualizeSwapping = (animation, speed) => {
    for (let i = 0; i < animation.length; i++) {
      const barDivs = document.querySelectorAll('.array-bar');
      const [barOne, barTwo] = animation[i];
      setTimeout(() => {
        const temp = barDivs[barOne].style.height;
        barDivs[barOne].style.height = barDivs[barTwo].style.height;
        barDivs[barTwo].style.height = temp;
        barDivs[barOne].style.backgroundColor = 'rgba(78, 216, 96, 0.8)';
        barDivs[barTwo].style.backgroundColor = 'rgba(219, 57, 57, 0.8)';
        setTimeout(() => {
          barDivs[barOne].style.backgroundColor = 'rgba(66, 134, 244, 0.8)';
          barDivs[barTwo].style.backgroundColor = 'rgba(66, 134, 244, 0.8)';
        }, speed);
      }, i * speed);
    }
    setBarArray(barArray.sort((a, b) => a - b));
  };

  // todo: color bars that are being compared
  // todo: color sorted bars
  const handleMergeSort = () => {
    const animation = mergeSort(barArray.slice());
    setBarArray(barArray.sort((a, b) => a - b));
    const speed = 50;
    let k = 0;

    for (let i = 0; i < animation.length; i++) {
      const barDivs = document.querySelectorAll('.array-bar');
      const [currBar, currHeight, noAnimation] = animation[i];
      if (!noAnimation) k++;

      setTimeout(() => {
        barDivs[currBar].style.height = `${currHeight}px`;
        if (!noAnimation) {
          barDivs[currBar].style.backgroundColor = 'rgba(219, 57, 57, 0.8)';
          setTimeout(() => {
            barDivs[currBar].style.backgroundColor = 'rgba(66, 134, 244, 0.8)';
          }, speed);
        }
      }, k * speed);
    }
  };

  const handleInsertionSort = () => {
    const animation = insertionSort(barArray.slice());
    setBarArray(barArray.sort((a, b) => a - b));
    const speed = 50;
    let k = 0;

    for (let i = 0; i < animation.length; i++) {
      const barDivs = document.querySelectorAll('.array-bar');
      const [currBar, currHeight, noAnimation] = animation[i];
      if (!noAnimation) k++;

      setTimeout(() => {
        barDivs[currBar].style.height = `${currHeight}px`;
        if (!noAnimation) {
          barDivs[currBar].style.backgroundColor = 'rgba(219, 57, 57, 0.8)';
          setTimeout(() => {
            barDivs[currBar].style.backgroundColor = 'rgba(66, 134, 244, 0.8)';
          }, speed);
        }
      }, k * speed);
    }
  };

  const handleBubbleSort = () => {
    const animation = bubbleSort(barArray.slice());
    visualizeSwapping(animation, 10);
  };

  // todo: color the pivot
  const handleQuickSort = () => {
    const animation = quickSort(barArray.slice());
    visualizeSwapping(animation, 60);
  };

  const handleHeapSort = () => {
    const animation = heapSort(barArray.slice());
    visualizeSwapping(animation, 30);
  };

  const handleSelectionSort = () => {
    const animation = selectionSort(barArray.slice());
    visualizeSwapping(animation, 80);
  };

  return (
    <div
      style={{
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}
    >
      <div style={{ marginBottom: 40 }}>
        <button onClick={handleMergeSort}>Merge Sort</button>
        <button onClick={handleQuickSort}>Quick Sort</button>
        <button onClick={handleHeapSort}>Heap Sort</button>
        <button onClick={handleSelectionSort}>Selection Sort</button>
        <button onClick={handleInsertionSort}>Insertion Sort</button>
        <button onClick={handleBubbleSort}>Bubble Sort</button>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          // marginBottom: 100,
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
