import { useContext } from 'react';
import colors from '../styles/colors';
import Context from '../Context';

function useVisualizeEnding() {
  const { setBarArray, setIsAnimating } = useContext(Context);

  function handleEnding() {
    setBarArray((prev) => prev.sort((a, b) => a - b));
    setIsAnimating(false);

    const barDivs = document.querySelectorAll('.array-bar');

    for (let i = 0; i < barDivs.length; i++) {
      setTimeout(() => {
        barDivs[i].style.backgroundColor = colors.green;
      }, i * 7);
    }
  }
  return handleEnding
}

export default useVisualizeEnding;
