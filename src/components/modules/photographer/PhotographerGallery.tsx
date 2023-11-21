import React, { useState } from 'react';
import { IMedia } from '../../../utils/types/Types';
import { usePhotographerContext } from '../../../context/PhotographerContext';
import Image from '../../ui/image/Image';
import Video from '../../ui/video/Video';
import Heart from '../../ui/svg/heart/Heart';
import Lightbox from '../lightbox/Lightbox';
import SortDropdown from '../sort_dropdown/SortDropdown';
import EventLikes from '../event_likes/EventLikes';
import './PhotographerGallery.scss';

const PhotographerGallery = ({ media }: { media: IMedia[] }) => {
  const { statusLightBox, updateStatusLightBox } = usePhotographerContext();
  const [clickLikes, setClickLikes] = useState(false);
  const startTabIndex: number = 7;

  const handleLightBox = () => {
    updateStatusLightBox(!statusLightBox);
  };

  const handleLikes = () => {
    setClickLikes(prevState => !prevState);
  };

  return (
    <div className='PhotographerGallery'>
      <div>Trier par <SortDropdown /></div>
      <div>
        {media && !statusLightBox && media.map((item: IMedia, index: number) => {
          return (
            <div key={`media-${item.id}`}>
              <button className='PhotographerGalleryMedia' onClick={handleLightBox} tabIndex={startTabIndex + index}>
                {item.image && <Image src={`/assets/images/${item.photographerId}/${item.image}`} alt={item.title} />}
                {item.video && <Video src={`/assets/images/${item.photographerId}/${item.video}`}
                                      tabIndex={startTabIndex + index} />}
              </button>
              <div className='PhotographerGalleryMediaInfo'>
                <div>{item.title}</div>
                <EventLikes imageLikes={item.likes}>
                  <div className='PhotographerGalleryMediaInfoLikes'>
                    <Heart />
                  </div>
                </EventLikes>
              </div>
            </div>
          );
        })}
        {media && statusLightBox && <Lightbox media={media} />}
      </div>
    </div>
  );
};

export default PhotographerGallery;
