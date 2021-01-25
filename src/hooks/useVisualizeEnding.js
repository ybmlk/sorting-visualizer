import { useContext } from 'react';
import colors from '../styles/colors';
import Context from '../Context';

function useVisualizeEnding() {
  const { setBarArray, setIsAnimating } = useContext(Context);

  function handleEnding() {
    const barDivs = document.querySelectorAll('.array-bar');
    const speed = 7;

    for (let i = 0; i < barDivs.length; i++) {
      setTimeout(() => {
        barDivs[i].style.backgroundColor = colors.green;
      }, i * speed);
    }

    setTimeout(() => {
      setBarArray((prev) => prev.sort((a, b) => a - b));
      setIsAnimating(false);
    }, barDivs.length * speed);
  }
  return handleEnding;
}

export default useVisualizeEnding;
