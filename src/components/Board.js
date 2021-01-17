import React from 'react';

const NUM_OF_BARS = 100;
const MIN_HEIGHT = 10;
const MAX_HEIGHT = 500;

function Board() {
  const randomArray = [];

  for (let i = 0; i < NUM_OF_BARS; i++) {
    const randHeight = Math.floor(Math.random() * (MAX_HEIGHT - MIN_HEIGHT + 1)) + MIN_HEIGHT;
    randomArray.push(randHeight);
  }

  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', marginTop: 80 }}
    >
      {randomArray.map((height, idx) => {
        return (
          <div key={idx} style={{ height, width: 10, backgroundColor: 'black', margin: 2 }}></div>
        );
      })}
    </div>
  );
}

export default Board;
