import React, { useState } from 'react';
import { IMedia } from '../../../utils/types/Types';
import { usePhotographerContext } from '../../../context/PhotographerContext';
import Image from '../../ui/image/Image';
import Video from '../../ui/video/Video';
import Heart from '../../ui/svg/heart/Heart';
import Lightbox from '../lightbox/Lightbox';
import SortDropdown from '../sort_dropdown/SortDropdown';
import EventLikes from '../event_likes/EventLikes';
import Sort from '../../../utils/images/Sort';
import './PhotographerGallery.scss';
import photographer from '../../../view/Photographer/Photographer';

const PhotographerGallery = ({ media }: { media: IMedia[] }) => {
  const { statusLightBox, updateStatusLightBox } = usePhotographerContext();
  const { mediaLightBox, updateMediaLightBox } = usePhotographerContext();
  const [sortMedia, setSortMedia] = useState(media);

  const handleLightBox = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const eventID = e.currentTarget.children.item(0);
    const mediaID = eventID!.getAttribute('id');

    updateMediaLightBox(mediaID!);
    updateStatusLightBox(!statusLightBox);
  };

  const handleSort = (sort: string) => {
    setSortMedia(Sort(media, sort));
  };

  return <>
    <div className='PhotographerGallery'>
      <div>Trier par <SortDropdown sort={(sort: string) => handleSort(sort)} /></div>
      <div>
        {media && sortMedia && !statusLightBox && sortMedia.map((item: IMedia, index: number) => {
          return (
            <div key={`media-${item.id}`}>
              <button className='PhotographerGalleryMedia' onClick={e => handleLightBox(e)}
                      tabIndex={0} aria-label={`${item.title}`}>
                {item.image && <Image src={`/assets/images/${item.photographerId}/${item.image}`} alt={item.title}
                                      id={`${item.id}`} />}
                {item.video && <Video src={`/assets/images/${item.photographerId}/${item.video}`}
                                      id={`${item.id}`} />}
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
    {media && sortMedia && statusLightBox && <Lightbox media={media} />}
  </>;
};

export default PhotographerGallery;
