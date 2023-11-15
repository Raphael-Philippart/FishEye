import React, { useEffect, useState } from 'react';
import { IDataPhotographers, IPhotographer } from '../../utils/types/Types';
import Logo from '../../components/modules/logo/Logo';
import Api from '../../utils/api/Api';
import PhotographerContainer from '../../components/modules/home/photographer_container/PhotographerContainer';
import './Home.scss';
import PhotographerCard from '../../components/modules/home/photographer_card/PhotographerCard';

const Home = () => {
  const [photographers, setPhotographers] = useState<IDataPhotographers>({ photographers: [], media: [] });

  useEffect(() => {
    const getPhotographers = async (): Promise<void> => {
      const dataPhotographers = await Api();
      setPhotographers(dataPhotographers);
    };

    getPhotographers().then();
  }, []);

  return (
    <div className='Home'>
      <header className='HomeHeader'>
        <Logo />
        <div>Nos photographes</div>
      </header>
      <section className='HomePhotographers'>
        {photographers && photographers!.photographers!.map((photographer: IPhotographer, index: number) => {
          return (
            <PhotographerContainer key={`photographer-${index}`}>
              <PhotographerCard photographer={photographer} />
            </PhotographerContainer>
          );
        })}
      </section>
    </div>
  );
};

export default Home;
