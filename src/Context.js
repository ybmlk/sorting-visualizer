import React, { createContext, useState } from 'react';

const Context = createContext();

function Provider({ children }) {
  const [barArray, setBarArray] = useState([]);
  const [timerList, setTimerList] = useState([]);
  const [barCount, setBarCount] = useState(130);
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
