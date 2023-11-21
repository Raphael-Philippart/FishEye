import React, { useEffect, useState } from 'react';
import { IMedia } from '../../../utils/types/Types';
import Image from '../../ui/image/Image';
import Video from '../../ui/video/Video';
import SortDropdown from '../sort_dropdown/SortDropdown';
import Heart from '../../ui/svg/heart/Heart';
import Lightbox from '../lightbox/Lightbox';
import './PhotographerGallery.scss';

const PhotographerGallery = ({ media }: { media: IMedia[] }) => {
  const [stateLightBox, setStateLightBox] = useState(false);
  const startTabIndex: number = 7;

  const handleLightBox = () => {
    setStateLightBox(prevState => !prevState);
  };

  const handleLikes = () => {
    console.log('Likes');
  };

  return (
    <div className='PhotographerGallery'>
      <div>Trier par <SortDropdown /></div>
      <div>
        {media && !stateLightBox && media.map((item: IMedia, index: number) => {
          return (
            <>
              <div key={`media-${item.id}`}>
                <button className='PhotographerGalleryMedia' onClick={handleLightBox} tabIndex={startTabIndex + index}>
                  {item.image && <Image src={`/assets/images/${item.photographerId}/${item.image}`} alt={item.title} />}
                  {item.video && <Video src={`/assets/images/${item.photographerId}/${item.video}`}
                                        tabIndex={startTabIndex + index} />}
                </button>
                <div className='PhotographerGalleryMediaInfo'>
                  <div>{item.title}</div>
                  <div>
                    <div>{item.likes}</div>
                    <div className='PhotographerGalleryMediaInfoLikes' onClick={handleLikes}>
                      <Heart />
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
        {media && stateLightBox && <Lightbox closeLightBox={handleLightBox} />}
      </div>
    </div>
  );
};

export default PhotographerGallery;
