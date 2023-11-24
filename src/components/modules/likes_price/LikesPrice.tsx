import { useEffect } from 'react';
import { usePhotographerContext } from '../../../context/PhotographerContext';
import { IMedia } from '../../../utils/types/Types';
import Heart from '../../ui/svg/heart/Heart';
import './LikesPrice.scss';

const LikesPrice = ({ media, price }: { media: IMedia[], price: number }) => {
  const { statusLightBox, updateStatusLightBox } = usePhotographerContext();
  const { likes, updateLikes } = usePhotographerContext();

  useEffect(() => {
    const totalLikes = media.reduce((sum: number, media: IMedia) => sum + media.likes, 0);
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
