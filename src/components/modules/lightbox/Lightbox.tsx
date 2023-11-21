import React, { useEffect, useState } from 'react';
import { IMedia } from '../../../utils/types/Types';
import { usePhotographerContext } from '../../../context/PhotographerContext';
import './Lightbox.scss';
import Image from '../../ui/image/Image';
import Video from '../../ui/video/Video';

const Lightbox = ({ media }: { media: IMedia[] }) => {
  const { statusLightBox, updateStatusLightBox } = usePhotographerContext();
  const { mediaLightBox, updateMediaLightBox } = usePhotographerContext();
  const [current, setCurrent] = useState(media.findIndex(e => String(e.id) === mediaLightBox));
  const [mediaLength, setMediaLength] = useState(media.length);

  const handleLightBox = () => {
    updateStatusLightBox(!statusLightBox);
  };

  const slideRight = () => {
    setCurrent(current === mediaLength - 1 ? 0 : current + 1);
  };

  const slideLeft = () => {
    setCurrent(current === 0 ? mediaLength - 1 : current - 1);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      console.log(e.key);
      if (e.key === 'Escape') {
        handleLightBox();
      } else if (e.key === 'ArrowLeft' || e.key === '4') {
        slideLeft();
      }else if (e.key === 'ArrowRight' || e.key === '6') {
        slideRight();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [current]);

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
        <div>
          <div onClick={slideLeft}>
            <svg width="30" height="48" viewBox="0 0 30 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M29.6399 42.36L11.3199 24L29.6399 5.64L23.9999 -2.46532e-07L-0.000107861 24L23.9999 48L29.6399 42.36Z" fill="#911C1C"/>
            </svg>
          </div>
          {media[current].image &&
            <Image src={`/assets/images/${media[current].photographerId}/${media[current].image}`}
                   alt={media[current].title} id={'lightbox'} />}
          {media[current].video &&
            <Video src={`/assets/images/${media[current].photographerId}/${media[current].video}`}
                   tabIndex={0} controls={true} />}
          <div onClick={slideRight}>
            <svg width="30" height="48" viewBox="0 0 30 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.360108 5.64L18.6801 24L0.360107 42.36L6.00011 48L30.0001 24L6.00011 3.88195e-06L0.360108 5.64Z" fill="#911C1C"/>
            </svg>
          </div>
        </div>
      </section>
    </div>}
  </>;
};

export default Lightbox;
