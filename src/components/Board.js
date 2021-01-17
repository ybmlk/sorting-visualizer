import React, { useState, useEffect } from 'react';
import bubbleSort from '../algorithms/bubbleSort';

const NUM_OF_BARS = 100;
const MIN_HEIGHT = 10;
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

  const handleBubbleSort = () => {
    const animation = bubbleSort(barArray);
    for (let i = 0; i < animation.length; i++) {
      const barDivs = document.querySelectorAll('.array-bar');
      const [barOne, barTwo] = animation[i];
      setTimeout(() => {
        const temp = barDivs[barOne].style.height;
        barDivs[barOne].style.height = barDivs[barTwo].style.height;
        barDivs[barTwo].style.height = temp;
        barDivs[barOne].style.backgroundColor = 'red';
        barDivs[barTwo].style.backgroundColor = 'blue';
        setTimeout(() => {
          barDivs[barOne].style.backgroundColor = 'black';
          barDivs[barTwo].style.backgroundColor = 'black';
        }, 50);
      }, i * 50);
    }
  };

  return (
    <div
      style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <button onClick={handleBubbleSort}>bubbleSort</button>
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
              style={{ height, width: 10, backgroundColor: 'black', margin: 1 }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default Board;
