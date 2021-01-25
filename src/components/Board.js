import React, { useEffect, useContext } from 'react';
import Context from '../Context';
import colors from '../styles/colors';
import useGenerateArray from '../hooks/useGenerateArray';

function Board() {
  const { barArray, barCount, setBarCount } = useContext(Context);
  const generateNewArray = useGenerateArray();

  useEffect(() => {
    generateNewArray();
  }, []);

  return (
    <div>
      <div>
        <input
          type='range'
          min={10}
          max={250}
          value={barCount}
          onChange={(e) => {
            setBarCount(+e.target.value);
            generateNewArray();
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          height: 600,
          width: 1050,
          margin: 'auto',
        }}
      >
        {barArray.map((height, idx) => {
          return (
            <div
              key={idx}
              className='array-bar'
              style={{
                height,
                width: 800 / barCount,
                backgroundColor: colors.blue,
                marginLeft: 1,
                color: 'transparent',
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default Board;
