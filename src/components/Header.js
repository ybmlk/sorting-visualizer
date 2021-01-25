import React, { useContext } from 'react';
import Context from '../Context';
import useGenerateArray from '../hooks/useGenerateArray';
import useVisualizeSorting from '../hooks/useVisualizeSorting';
// import Logo from '../css/path.svg';

function Header() {
  const { isAnimating } = useContext(Context);
  const handleSorting = useVisualizeSorting();
  const generateNewArray = useGenerateArray();

  return (
    <nav id='navbar'>
      <div className='container'>
        <div>
          Change Array Size
          <input type='range' min={10} max={250} value={100} />
        </div>
        {/* <div className='logo'>
          <img src={Logo} alt='' /> <h1>ATHFINDING VISUALIZER</h1>
        </div> */}
        <ul className='main-menu'>
          <li>
            <button className='mainbtn' disabled={isAnimating} onClick={generateNewArray}>
              Generate Array
            </button>
          </li>
          <li>
            <button disabled={isAnimating} onClick={() => handleSorting('Merge')}>
              Merge Sort
            </button>
          </li>
          <li>
            <button disabled={isAnimating} onClick={() => handleSorting('Quick')}>
              Quick Sort
            </button>
          </li>
          <li>
            <button disabled={isAnimating} onClick={() => handleSorting('Heap')}>
              Heap Sort
            </button>
          </li>
          <li>
            <button disabled={isAnimating} onClick={() => handleSorting('Selection')}>
              Selection Sort
            </button>
          </li>
          <li>
            <button disabled={isAnimating} onClick={() => handleSorting('Insertion')}>
              Insertion Sort
            </button>
          </li>
          <li>
            <button disabled={isAnimating} onClick={() => handleSorting('Bubble')}>
              Bubble Sort
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
