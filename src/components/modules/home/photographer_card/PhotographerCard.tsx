import React from 'react';
import { IPhotographer } from '../../../../utils/types/Types';
import Image from '../../../ui/image/Image';
import Link from '../../../ui/link/Link';
import './PhotographerCard.scss';

const PhotographerCard = ({ photographer, tabIndex }: { photographer: IPhotographer, tabIndex: number }) => {
  const host: string = window.location.host;
  const protocol: string = window.location.protocol;

  return <div className='PhotographerCard'>
    <header>
      <div>
        <Link href={`photographer/${photographer.id}`} ariaLabel={`Photographe : ${photographer.name}`} tabIndex={tabIndex}>
          <Image src={`${protocol}//${host}/assets/images/Portraits/${photographer.portrait}`}
                 alt={photographer.tagline} />
        </Link>
      </div>
    </header>
    <section>
      <div>{photographer.name}</div>
      <div>{photographer.city}, {photographer.country}</div>
      <div>{photographer.tagline}</div>
      <div>{photographer.price}€/jour</div>
    </section>
  </div>;
};

export default PhotographerCard;
