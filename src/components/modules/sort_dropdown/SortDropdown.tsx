import { useState } from 'react';
import './SortDropdown.scss';

const SortDropdown = ({ sort }: { sort: any }) => {
  const [state, setState] = useState(false);

  const handleDropdown = () => {
    setState(prevState => !prevState);
  };

  const handleSort = (order: any) => {
    sort(order);
  };

  return <div className='SortDropdown'>
    <div>
      <div>
        <button tabIndex={8} onClick={() => {
          handleDropdown();
          handleSort('popularity');
        }}>
          Popularité
          <div className={`${state ? 'rotate' : 'unrotate'}`}>
            <svg width='16' height='11' viewBox='0 0 16 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M14.12 0.453125L8 6.55979L1.88 0.453125L0 2.33312L8 10.3331L16 2.33312L14.12 0.453125Z'
                    fill='white' />
            </svg>
          </div>
        </button>
      </div>
      {state &&
        <div className={'SortDropdownContent'}>
          <button tabIndex={9} onClick={() => handleSort('date')}>Date</button>
          <button tabIndex={10} onClick={() => handleSort('title')} onBlur={handleDropdown}>Titre</button>
        </div>
      }
    </div>
  </div>;
};

export default SortDropdown;
