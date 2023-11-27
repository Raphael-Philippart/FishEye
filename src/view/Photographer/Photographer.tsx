import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PhotographerProvider } from '../../context/PhotographerContext';
import { TParams, IPhotographer, IDataPhotographers, IMedia } from '../../utils/types/Types';
import Logo from '../../components/modules/logo/Logo';
import Link from '../../components/ui/link/Link';
import Api from '../../utils/api/Api';
import Image from '../../components/ui/image/Image';
import ContactForm from '../../components/ui/form/contact_form/ContactForm';
import PhotographerGallery from '../../components/modules/photographer/PhotographerGallery';
import LikesPrice from '../../components/modules/likes_price/LikesPrice';
import './Photographer.scss';

const Photographer = () => {
  const { id } = useParams<TParams>();
  const [photographers, setPhotographers] = useState<IDataPhotographers>({ photographers: [], media: [] });
  const [photographer, setPhotographer] = useState<IPhotographer>({
    name: '',
    id: 0,
    city: '',
    country: '',
    portrait: '',
    tagline: '',
    price: 0,
  });
  const [media, setMedia] = useState<IMedia[]>([{
    id: 0,
    photographerId: 0,
    title: '',
    image: '',
    likes: 0,
    date: '',
    price: 0,
  }]);
  const [likes, setLikes] = useState<number>(0);

  useEffect(() => {
    const getPhotographers = async (): Promise<void> => {
      const dataPhotographers = await Api();
      setPhotographers(dataPhotographers);
    };
    getPhotographers().then();
  }, []);

  useEffect(() => {
    const photographerById: IPhotographer | undefined = photographers!.photographers!.find((p: IPhotographer) => p.id === parseInt(id!));
    const mediaPhotographerById: IMedia[] | undefined = photographers!.media!.filter((p: IMedia) => p.photographerId === parseInt(id!));

    setPhotographer(photographerById!);
    setMedia(mediaPhotographerById!);
  }, [photographers]);

  return <PhotographerProvider>
    <section className='Photographer'>
      <header>
        <div>
          <Link href={`/`} ariaLabel={'Logo fishEye, Retour à l\'accueil'}>
            <Logo />
          </Link>
        </div>
      </header>
      {!photographer && <div>
        Désole non ne trouvons pas de photographe avec cette ID ...
        <br />
        <a href='/'>Retour à Accueil</a>
      </div>}
      {photographer &&
        <>
          <section>
            <header className='PhotographerHeader'>
              <div>
                <div className='PhotographerHeaderName'><h1>{photographer.name}</h1></div>
                <div className='PhotographerHeaderCity'>{photographer.city}, {photographer.country}</div>
                <div className='PhotographerHeaderTagLine'>{photographer.tagline}</div>
              </div>
              <div className='PhotographerHeaderContact'>
                <ContactForm photographer={photographer} />
              </div>
              <div className='PhotographerAvatar'>
                <div>
                  <Image src={`/assets/images/Portraits/${photographer.portrait}`} id={`${photographer.name}`}
                         alt={photographer.tagline} ariaLabel={photographer.name} />
                </div>
              </div>
            </header>
            <div>
              <PhotographerGallery media={media} />
            </div>
          </section>
          <LikesPrice media={media} price={photographer.price} />
        </>
      }
    </section>
  </PhotographerProvider>;
};

export default Photographer;
