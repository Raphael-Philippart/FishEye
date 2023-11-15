import React from 'react';
import { IPhotographer } from '../../../../utils/types/Types';
import Image from '../../../ui/image/Image';
import './PhotographerCard.scss';
import Link from '../../../ui/link/Link';

const PhotographerCard = ({ photographer }: { photographer: IPhotographer }) => {
  const host: string = window.location.host;
  const protocol: string = window.location.protocol;

  return (
    <div className='PhotographerCard'>
      <header className='PhotographerCardHeader'>
        <div>
          <Link href={`photographer/${photographer.id}`}>
            <Image src={`${protocol}//${host}/assets/images/Portraits/${photographer.portrait}`}
                   alt={photographer.tagline} />
          </Link>
        </div>
      </header>
      <section className='PhotographerCardSection'>
        <div>{photographer.name}</div>
        <div>{photographer.city}, {photographer.country}</div>
        <div>{photographer.tagline}</div>
        <div>{photographer.price}€/jour</div>
      </section>
    </div>
  );
};

export default PhotographerCard;
