import React, { useState, useEffect } from 'react';
import bubbleSort from '../algorithms/bubbleSort';
import mergeSort from '../algorithms/mergeSort';
import quickSort from '../algorithms/quickSort';
import heapSort from '../algorithms/heapSort';

const NUM_OF_BARS = 200;
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

  // todo: color sorted bars
  const handleBubbleSort = () => {
    const animation = bubbleSort(barArray.slice());
    setBarArray(barArray.sort((a, b) => a - b));
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
        }, 10);
      }, i * 10);
    }
  };

  // todo: color bars that are being compared
  // todo: color sorted bars
  const handleMergeSort = () => {
    const animation = mergeSort(barArray.slice());
    setBarArray(barArray.sort((a, b) => a - b));
    let k = 0;
    for (let i = 0; i < animation.length; i++) {
      const barDivs = document.querySelectorAll('.array-bar');
      const [currBar, currHeight, currSpeed] = animation[i];
      let speed = 50;
      if (currSpeed !== 0) {
        k++;
      }

      setTimeout(() => {
        barDivs[currBar].style.height = `${currHeight}px`;
        if (currSpeed !== 0) {
          barDivs[currBar].style.backgroundColor = 'rgba(219, 57, 57, 0.8)';
          setTimeout(() => {
            barDivs[currBar].style.backgroundColor = 'rgba(66, 134, 244, 0.8)';
          }, speed);
        }
      }, k * speed);
    }
  };

  // todo: color bars that are being compared
  // todo: color sorted bars
  // todo: color the pivot
  const handleQuickSort = () => {
    const animation = quickSort(barArray.slice());
    setBarArray(barArray.sort((a, b) => a - b));
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
        }, 50);
      }, i * 50);
    }
  };

  // todo: color bars that are being compared
  // todo: color sorted bars
  const handleHeapSort = () => {
    const animation = heapSort(barArray.slice());
    setBarArray(barArray.sort((a, b) => a - b));
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
        }, 30);
      }, i * 30);
    }
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
