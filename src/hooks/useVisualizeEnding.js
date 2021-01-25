import { useContext } from 'react';
import colors from '../styles/colors';
import Context from '../Context';

function useVisualizeEnding() {
  const { setBarArray, setIsAnimating, setTimerList } = useContext(Context);

  function handleEnding() {
    const barDivs = document.querySelectorAll('.array-bar');
    const timerCollection = [];
    const speed = 7;

    for (let i = 0; i < barDivs.length; i++) {
      const timer1 = setTimeout(() => {
        barDivs[i].style.backgroundColor = colors.green;
      }, i * speed);
      timerCollection.push(timer1);
    }

    const timer2 = setTimeout(() => {
      setBarArray((prev) => prev.sort((a, b) => a - b));
      setIsAnimating(false);
    }, barDivs.length * speed);
    
    timerCollection.push(timer2);
    setTimerList(timerCollection);
  }
  return handleEnding;
}

export default useVisualizeEnding;
