import React, { useEffect, useState } from 'react';
import { IDataPhotographers, IPhotographer } from '../../utils/types/Types';
import Logo from '../../components/modules/logo/Logo';
import Api from '../../utils/api/Api';
import Link from '../../components/ui/link/Link';
import PhotographerContainer from '../../components/modules/home/photographer_container/PhotographerContainer';
import PhotographerCard from '../../components/modules/home/photographer_card/PhotographerCard';
import './Home.scss';

const Home = () => {
  const [photographers, setPhotographers] = useState<IDataPhotographers>({ photographers: [], media: [] });

  useEffect(() => {
    const getPhotographers = async (): Promise<void> => {
      const dataPhotographers = await Api();
      setPhotographers(dataPhotographers);
    };

    getPhotographers().then();
  }, []);

  return <div className='Home'>
    <header className='HomeHeader'>
      <Link href='/' ariaLabel={'Logo fishEye, Retour à l\'accueil'}>
        <Logo />
      </Link>
      <div>Nos photographes</div>
    </header>
    <section className='HomePhotographers'>
      {photographers && photographers!.photographers!.map((photographer: IPhotographer, index: number) => {
        return (
          <PhotographerContainer key={`photographer-${photographer.id}-${index}`}>
            <PhotographerCard photographer={photographer} tabIndex={(index + 1) + 1} />
          </PhotographerContainer>
        );
      })}
    </section>
  </div>;
};

export default Home;
