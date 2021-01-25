import React, { useContext } from 'react';
import Context from '../Context';
import useGenerateArray from '../hooks/useGenerateArray';
import useVisualizeSorting from '../hooks/useVisualizeSorting';

function Header() {
  const { barCount, setBarCount, isAnimating } = useContext(Context);
  const handleSorting = useVisualizeSorting();
  const generateNewArray = useGenerateArray();

  return (
    <nav id='navbar'>
      <div className='container'>
        <div className='range-container'>
          <div className='range-tag'>Change Array Size</div>
          <input
            className='range-input'
            type='range'
            min={10}
            max={250}
            value={barCount}
            onChange={(e) => {
              setBarCount(+e.target.value);
              generateNewArray();
            }}
          />
        </div>

        <ul className='main-menu'>
          <li>
            <button className='mainbtn' onClick={generateNewArray}>
              {isAnimating ? 'Stop Animation' : 'Generate Array'}
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
