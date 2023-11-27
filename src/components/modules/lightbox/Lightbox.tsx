import React, { useCallback, useEffect, useState } from 'react';
import { IMedia } from '../../../utils/types/Types';
import { usePhotographerContext } from '../../../context/PhotographerContext';
import Image from '../../ui/image/Image';
import Video from '../../ui/video/Video';
import './Lightbox.scss';

const Lightbox = ({ media }: { media: IMedia[] }) => {
  const { statusLightBox, updateStatusLightBox } = usePhotographerContext();
  const { mediaLightBox, updateMediaLightBox } = usePhotographerContext();
  const [current, setCurrent] = useState(media.findIndex(e => String(e.id) === mediaLightBox));
  const [mediaLength, setMediaLength] = useState(media.length);

  /**
   * Callback function to handle toggling the lightbox status.
   */
  const handleLightBox = useCallback(() => {
    // Toggle the lightbox status
    updateStatusLightBox(!statusLightBox);
  }, [statusLightBox]);

  /**
   * Callback function to slide to the next media item to the right.
   */
  const slideRight = useCallback(() => {
    // Update the current index, wrapping around to the first item if at the end
    setCurrent(current === mediaLength - 1 ? 0 : current + 1);
  }, [current, mediaLength]);

  /**
   * Callback function to slide to the previous media item to the left.
   */
  const slideLeft = useCallback(() => {
    // Update the current index, wrapping around to the last item if at the beginning
    setCurrent(current === 0 ? mediaLength - 1 : current - 1);
  }, [current, mediaLength]);

  /**
   * Effect to handle keyboard events for the lightbox.
   */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Close the lightbox if it is open and 'Escape' is pressed
      if (statusLightBox && (e.key === 'Escape')) {
        handleLightBox();
        // Slide to the left if the lightbox is open and 'ArrowLeft' or '4' is pressed
      } else if (statusLightBox && (e.key === 'ArrowLeft' || e.key === '4')) {
        slideLeft();
        // Slide to the right if the lightbox is open and 'ArrowRight' or '6' is pressed
      } else if (statusLightBox && (e.key === 'ArrowRight' || e.key === '6')) {
        slideRight();
      }
    };

    // Add event listener for keydown events
    window.addEventListener('keydown', handleKeyDown);

    // Remove event listener on component unmount to avoid memory leaks
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [current, handleLightBox, slideLeft, slideRight, statusLightBox]);

  return <>
    {statusLightBox && <div className='Lightbox'>
      <section>
        <button onClick={handleLightBox} tabIndex={0} aria-label={'Fermer la Visionneuse de media'}>
          <svg width='42' height='42' viewBox='0 0 42 42' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M42 4.23L37.77 0L21 16.77L4.23 0L0 4.23L16.77 21L0 37.77L4.23 42L21 25.23L37.77 42L42 37.77L25.23 21L42 4.23Z'
              fill='#911C1C' />
          </svg>
        </button>
        <div>
          <button onClick={slideLeft} tabIndex={0} aria-label={'Slide a Gauche'}>
            <svg width='30' height='48' viewBox='0 0 30 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M29.6399 42.36L11.3199 24L29.6399 5.64L23.9999 -2.46532e-07L-0.000107861 24L23.9999 48L29.6399 42.36Z'
                fill='#911C1C' />
            </svg>
          </button>
          {media[current].image &&
            <Image src={`/assets/images/${media[current].photographerId}/${media[current].image}`}
                   alt={media[current].title} ariaLabel={`Photo: ${media[current].title}`} id={'lightbox'} />}
          {media[current].video &&
            <Video src={`/assets/images/${media[current].photographerId}/${media[current].video}`} ariaLabel={`Vidéo: ${media[current].title}`} controls={true} />}
          <button onClick={slideRight} tabIndex={0} aria-label={'Slide a Droite'}>
            <svg width='30' height='48' viewBox='0 0 30 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M0.360108 5.64L18.6801 24L0.360107 42.36L6.00011 48L30.0001 24L6.00011 3.88195e-06L0.360108 5.64Z'
                fill='#911C1C' />
            </svg>
          </button>
        </div>
      </section>
    </div>}
  </>;
};

export default Lightbox;
