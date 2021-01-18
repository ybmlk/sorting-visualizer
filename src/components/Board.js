import React, { useState, useEffect } from 'react';
import bubbleSort from '../algorithms/bubbleSort';
import mergeSort from '../algorithms/mergeSort';

const NUM_OF_BARS = 200;
const MIN_HEIGHT = 5;
const MAX_HEIGHT = 500;

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
        barDivs[barOne].style.backgroundColor = 'turquoise';
        barDivs[barTwo].style.backgroundColor = 'blue';
        setTimeout(() => {
          barDivs[barOne].style.backgroundColor = 'black';
          barDivs[barTwo].style.backgroundColor = 'black';
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
          barDivs[currBar].style.backgroundColor = 'turquoise';
          setTimeout(() => {
            barDivs[currBar].style.backgroundColor = 'black';
          }, speed);
        }
      }, k * speed);
    }
  };

  return (
    <div
      style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <button onClick={handleBubbleSort}>Bubble Sort</button>
      <button onClick={handleMergeSort}>Merge Sort</button>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          marginBottom: 100,
        }}
      >
        {barArray.map((height, idx) => {
          return (
            <div
              key={idx}
              className='array-bar'
              style={{ height, width: 5, backgroundColor: 'black', margin: 1 }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default Board;
