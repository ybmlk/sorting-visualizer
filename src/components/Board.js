import React, { useEffect, useContext } from 'react';
import Context from '../Context';
import colors from '../styles/colors';
import useGenerateArray from '../hooks/useGenerateArray';

function Board() {
  const { barArray, barCount } = useContext(Context);
  const generateNewArray = useGenerateArray();

  useEffect(() => {
    generateNewArray();
    // eslint-disable-next-line
  }, []);

  return (
    <div id='board'>
      <div className='container'>
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
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default Board;
