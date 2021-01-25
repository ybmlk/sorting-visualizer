import { useContext } from 'react';
import colors from '../styles/colors';
import Context from '../Context';
import useVisualizeEnding from './useVisualizeEnding';

// todo: color bars that are being compared
// todo: color sorted bars
function useVisualizeSwapping() {
  const { setIsAnimating, setTimerList } = useContext(Context);
  const handleEnding = useVisualizeEnding();

  function handleSwapping(animation, speed) {
    setIsAnimating(true);
    const timerCollection = [];
    const barDivs = Array.from(document.querySelectorAll('.array-bar'));
    barDivs.forEach((div) => (div.style.backgroundColor = colors.blue));

    for (let i = 0; i < animation.length; i++) {
      const [barOne, barTwo] = animation[i];
      const timer1 = setTimeout(() => {
        const temp = barDivs[barOne].style.height;
        barDivs[barOne].style.height = barDivs[barTwo].style.height;
        barDivs[barTwo].style.height = temp;
        barDivs[barOne].style.backgroundColor = colors.yellow;
        barDivs[barTwo].style.backgroundColor = colors.red;
      }, i * speed);

      const timer2 = setTimeout(() => {
        barDivs[barOne].style.backgroundColor = colors.blue;
        barDivs[barTwo].style.backgroundColor = colors.blue;
      }, i * speed + speed);
      timerCollection.push(timer1, timer2);
    }
    const timer3 = setTimeout(handleEnding, speed * animation.length);
    timerCollection.push(timer3);
    setTimerList(timerCollection);
  }
  return handleSwapping;
}

export default useVisualizeSwapping;
