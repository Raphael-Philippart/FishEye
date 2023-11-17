import React, { useEffect, useState } from 'react';
import { TParams, IPhotographer, IDataPhotographers } from '../../utils/types/Types';
import { useParams } from 'react-router-dom';
import Logo from '../../components/modules/logo/Logo';
import Link from '../../components/ui/link/Link';
import Api from '../../utils/api/Api';
import Image from '../../components/ui/image/Image';
import ContactForm from '../../components/ui/form/contact_form/ContactForm';
import './Photographer.scss';

const Photographer = () => {
  const host: string = window.location.host;
  const protocol: string = window.location.protocol;
  const { id } = useParams<TParams>();
  const [photographers, setPhotographers] = useState<IDataPhotographers>({ photographers: [], media: [] });
  const [photographer, setPhotographer] = useState<IPhotographer>({
    name: '',
    id: 0,
    city: '',
    country: '',
    portrait: '',
    tagline: '',
    price: 0
  });

  useEffect(() => {
    const getPhotographers = async (): Promise<void> => {
      const dataPhotographers = await Api();
      setPhotographers(dataPhotographers);
    };
    getPhotographers().then();
  }, []);

  useEffect(() => {
    const photographerById: IPhotographer | undefined = photographers!.photographers!.find((p: IPhotographer) => p.id === parseInt(id!));
    setPhotographer(photographerById!);
  }, [photographers]);

  return (
    <div className='Photographer'>
      <header className='PhotographerHeader'>
        <Link href={`/`}>
          <Logo />
        </Link>
      </header>
      {!photographer && <div>Loading ...</div>}
      {photographer &&
        <section className='PhotographerContent'>
          <div>
            <header className='PhotographerContentHeader'>
              <div>
                <div>{photographer.name}</div>
                <div>{photographer.city}, {photographer.country}</div>
                <div>{photographer.tagline}</div>
              </div>
              <div>
                <ContactForm photographer={photographer} />
              </div>
              <div className='PhotographerContentPortrait'>
                <Image src={`${protocol}//${host}/assets/images/Portraits/${photographer.portrait}`}
                       alt={photographer.tagline} />
              </div>
            </header>
          </div>
        </section>
      }
    </div>
  );
};

export default Photographer;
