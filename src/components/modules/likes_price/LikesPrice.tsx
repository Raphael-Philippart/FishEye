import { useEffect } from 'react';
import { usePhotographerContext } from '../../../context/PhotographerContext';
import { IMedia } from '../../../utils/types/Types';
import Heart from '../../ui/svg/heart/Heart';
import './LikesPrice.scss';

const LikesPrice = ({ media, price }: { media: IMedia[], price: number }) => {
  const { statusLightBox, updateStatusLightBox } = usePhotographerContext();
  const { likes, updateLikes } = usePhotographerContext();

  /**
   * Effect to calculate and update the total likes when the media array changes.
   */
  useEffect(() => {
    // Calculate the total likes by reducing the media array
    const totalLikes = media.reduce((sum: number, media: IMedia) => sum + media.likes, 0);
    // Update the total likes state
    updateLikes(totalLikes);
  }, [media]);

  return <>
    {!statusLightBox &&
      <div className='Likes'>
        <div>
          <div>{likes}</div>
          <div><Heart /></div>
        </div>
        <div>{price}€/jour</div>
      </div>}
  </>;
};

export default LikesPrice;
