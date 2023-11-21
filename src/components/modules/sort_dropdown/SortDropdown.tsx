import { useState } from 'react';
import './SortDropdown.scss';

const SortDropdown = () => {
  const [state, setState] = useState(false);

  const handleClickDropdown = () => {
    setState(prevState => !prevState);
  };

  return <div className='SortDropdown'>
    <div>
      <div>
        <button tabIndex={3} onClick={handleClickDropdown}>
          Popularité
          <div className={`${state ? 'rotate' : 'unrotate'}`}>
            <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.12 0.453125L8 6.55979L1.88 0.453125L0 2.33312L8 10.3331L16 2.33312L14.12 0.453125Z" fill="white"/>
            </svg>
          </div>
        </button>
      </div>
      {state &&
        <div className={'SortDropdownContent'}>
          <a href='#' tabIndex={4}>Date</a>
          <a href='#' tabIndex={5} onBlur={handleClickDropdown}>Titre</a>
        </div>
      }
    </div>
  </div>;
};

export default SortDropdown;
