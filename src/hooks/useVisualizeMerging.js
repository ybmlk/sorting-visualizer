import { useContext } from 'react';
import colors from '../styles/colors';
import Context from '../Context';
import useVisualizeEnding from './useVisualizeEnding';

function useVisualizeMerging() {
  const { setIsAnimating, setTimerList } = useContext(Context);
  const handleEnding = useVisualizeEnding()

  function handleMerging(animation, speed) {
    let interval = 0;
    setIsAnimating(true);
    const timerCollection = [];
    const barDivs = Array.from(document.querySelectorAll('.array-bar'));
    barDivs.forEach((div) => (div.style.backgroundColor = colors.blue));

    for (let i = 0; i < animation.length; i++) {
      const [currBar, currHeight, noAnimation] = animation[i];
      if (!noAnimation) interval++;

      const timer1 = setTimeout(() => {
        barDivs[currBar].style.height = `${currHeight}px`;
        if (!noAnimation) barDivs[currBar].style.backgroundColor = colors.red;
      }, interval * speed);

      const timer2 = setTimeout(() => {
        barDivs[currBar].style.backgroundColor = colors.blue;
      }, interval * speed + speed);
      timerCollection.push(timer1, timer2);
    }
    const timer3 = setTimeout(handleEnding, interval * speed);
    timerCollection.push(timer3);
    setTimerList(timerCollection);
  }
  return handleMerging;
}

export default useVisualizeMerging;
