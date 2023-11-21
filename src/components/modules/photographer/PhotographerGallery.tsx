import { useEffect } from 'react';
import { IMedia } from '../../../utils/types/Types';
import Image from '../../ui/image/Image';
import './PhotographerGallery.scss';
import Video from '../../ui/video/Video';

const PhotographerGallery = ({ media }: { media: IMedia[] }) => {

  useEffect(() => {
    console.log(media);
  }, []);

  return (
    <div className='PhotographerGallery'>
      <div>Trier par</div>
      <div>
        {media && media.map((item: IMedia, index: number) => {
          return (
            <div key={`media-${item.id}`}>
              <div className='PhotographerGalleryMedia' tabIndex={3 + index}>
                {item.image &&
                  <Image src={`/assets/images/${item.photographerId}/${item.image}`}
                         alt={item.title}
                  />
                }
                {item.video &&
                  <Video src={`/assets/images/${item.photographerId}/${item.video}`} tabIndex={3 + index} />
                }
              </div>
              <div className='PhotographerGalleryMediaInfo'>
                <div>{item.title}</div>
                <div>
                  <div>{item.likes}</div>
                  <div className='PhotographerGalleryMediaInfoLikes'>
                    <svg fill="currentColor" width="800px" height="800px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.256 12.16q0.544 2.080 2.080 3.616l13.664 14.144 13.664-14.144q1.536-1.536 2.080-3.616t0-4.128-2.080-3.584-3.584-2.080-4.16 0-3.584 2.080l-2.336 2.816-2.336-2.816q-1.536-1.536-3.584-2.080t-4.128 0-3.616 2.080-2.080 3.584 0 4.128z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PhotographerGallery;
