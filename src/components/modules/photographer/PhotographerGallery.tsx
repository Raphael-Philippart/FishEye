import React, { ReactNode, useState } from 'react';
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
  const { mediaLightBox, updateMediaLightBox } = usePhotographerContext();
  const startTabIndex: number = 11;

  const handleLightBox = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const eventID = e.currentTarget.children.item(0);
    const mediaID = eventID!.getAttribute('id');

    updateMediaLightBox(mediaID!);
    updateStatusLightBox(!statusLightBox);
  };

  return (
    <>
      <div className='PhotographerGallery'>
        <div>Trier par <SortDropdown /></div>
        <div>
          {media && !statusLightBox && media.map((item: IMedia, index: number) => {
            return (
              <div key={`media-${item.id}`}>
                <button className='PhotographerGalleryMedia' onClick={e => handleLightBox(e)}
                        tabIndex={startTabIndex + index}>
                  {item.image && <Image src={`/assets/images/${item.photographerId}/${item.image}`} alt={item.title}
                                        id={`${item.id}`} />}
                  {item.video && <Video src={`/assets/images/${item.photographerId}/${item.video}`}
                                        tabIndex={startTabIndex + index} id={`${item.id}`} />}
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
        </div>
      </div>
      {media && statusLightBox && <Lightbox media={media} />}
    </>
  );
};

export default PhotographerGallery;
