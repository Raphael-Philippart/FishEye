import './SortDropdown.scss';
import { useEffect, useState } from 'react';

const SortDropdown = () => {
  const [state, setState] = useState(false);

  const handleFocus = (e: any) => {
    setState(prevState => !prevState);
  };

  return <div className='SortDropdown'>
    <div>
      <a href='#' tabIndex={3} onFocus={handleFocus} >Popularité</a>
      {state &&
        <div className={'SortDropdownContent'}>
          <a href='#' tabIndex={4}>Date</a>
          <a href='#' tabIndex={5}>Titre</a>
        </div>
      }
    </div>
  </div>;
};

export default SortDropdown;
