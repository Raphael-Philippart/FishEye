import React from 'react';
import { useLightBoxContext } from '../../../context/LightBoxContext';
import { IMedia } from '../../../utils/types/Types';
import './Lightbox.scss';

const Lightbox = ({ media }: { media: IMedia[] }) => {
  const { statusLightBox, updateStatusLightBox } = useLightBoxContext();

  const handleLightBox = () => {
    updateStatusLightBox(!statusLightBox);
  };

  return <>
    {statusLightBox && <div className='Lightbox'>
      <section>
        <button onClick={handleLightBox}>
          <svg width='42' height='42' viewBox='0 0 42 42' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M42 4.23L37.77 0L21 16.77L4.23 0L0 4.23L16.77 21L0 37.77L4.23 42L21 25.23L37.77 42L42 37.77L25.23 21L42 4.23Z'
              fill='#911C1C' />
          </svg>
        </button>
      </section>
    </div>}
  </>;
};

export default Lightbox;
