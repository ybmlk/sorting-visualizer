import React, { createContext, useState } from 'react';

// Create a react context
const Context = createContext();

function Provider({ children }) {
  // const NUMBER_OF_ROWS = 23;
  // const NUMBER_OF_COLS = 59;
  // const START_NODE = { row: 10, col: 15 };
  // const END_NODE = { row: 10, col: 45 };

  const [barArray, setBarArray] = useState([]);
  const [timerList, setTimerList] = useState([]);
  const [barCount, setBarCount] = useState(10);
  const [isAnimating, setIsAnimating] = useState(false);

  const value = {
    barArray,
    setBarArray,
    timerList,
    setTimerList,
    barCount,
    setBarCount,
    isAnimating,
    setIsAnimating,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default Context;
export { Provider };
