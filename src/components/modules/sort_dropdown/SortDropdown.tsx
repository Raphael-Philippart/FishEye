import { useEffect, useState } from 'react';
import { usePhotographerContext } from '../../../context/PhotographerContext';
import { sortChoices } from '../../../utils/images/Sort';
import './SortDropdown.scss';

const SortDropdown = ({ sort }: { sort: any }) => {
  const { statusLightBox, updateStatusLightBox } = usePhotographerContext();
  const [state, setState] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState<string[]>();
  const [choice, setChoice] = useState<string>('Titre');
  const [indexChoice, setIndexChoice] = useState(sortChoices.findIndex((e :string) => e === choice));

  const handleDropdown = () => {
    setState(prevState => !prevState);
  };

  const handleSort = (order: string) => {
    const unSelectedChoice = sortChoices.filter((c: string) => c !== order);
    setSelectedChoice(unSelectedChoice);
    setChoice(order);
    sort(order);
  };

  useEffect(() => {
    handleSort(choice);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!statusLightBox && state && (e.key === 'Escape')) {
        handleDropdown();
      } else if (!statusLightBox && (e.key === '8')) {
        setIndexChoice(prevIndex=> prevIndex <= 0 ? sortChoices.length - 1 : prevIndex - 1);
        handleSort(sortChoices[indexChoice]);
      } else if (!statusLightBox && (e.key === '2')) {
        setIndexChoice(prevIndex=> prevIndex >= (sortChoices.length - 1) ? 0 : prevIndex + 1);
        handleSort(sortChoices[indexChoice]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [statusLightBox, state, choice, indexChoice]);

  return <div className='SortDropdown'>
    <div>
      <div>
        <div className={`${state ? 'BorderRadiusOpen' : 'BorderRadiusClose'}`}>
          <button onClick={() => handleSort(choice)} tabIndex={0} aria-label={`Les Medias sont Trier par : ${choice}`}
                  className={`${state ? 'BorderRadiusOpen' : 'BorderRadiusClose'}`}>
            {choice}
          </button>
          <button className={`${state ? 'rotate ' : 'unrotate'}`} onClick={handleDropdown} tabIndex={0} aria-label={'Ouvrir et Fermer le menu Trier par'}>
            <svg width='16' height='11' viewBox='0 0 16 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M14.12 0.453125L8 6.55979L1.88 0.453125L0 2.33312L8 10.3331L16 2.33312L14.12 0.453125Z'
                    fill='white' />
            </svg>
          </button>
        </div>
      </div>
      <div className={'SortDropdownContent'}>
        {state && selectedChoice!.map((c: string, i: number) => {
          return <button key={`selectedChoice-${i}`} tabIndex={0} aria-label={c} onClick={() => handleSort(c)}>{c}</button>;
        })}
      </div>
    </div>
  </div>;
};

export default SortDropdown;
