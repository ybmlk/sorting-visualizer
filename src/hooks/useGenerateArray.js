import { useContext } from 'react';
import colors from '../styles/colors';
import Context from '../Context';

const MIN_HEIGHT = 5;
const MAX_HEIGHT = 580;

function useGenerateArray() {
  const { barCount, setBarArray, setIsAnimating, timerList } = useContext(Context);

  function generateNewArray() {
    const barDivs = Array.from(document.querySelectorAll('.array-bar'));
    barDivs.forEach((div) => (div.style.backgroundColor = colors.blue));
    timerList.forEach((timer) => clearTimeout(timer));
    setIsAnimating(false);

    const newArray = [];

    for (let i = 0; i < barCount; i++) {
      const randHeight = Math.floor(Math.random() * (MAX_HEIGHT - MIN_HEIGHT + 1)) + MIN_HEIGHT;
      newArray.push(randHeight);
    }
    setBarArray(newArray);
  }
  return generateNewArray;
}

export default useGenerateArray;
