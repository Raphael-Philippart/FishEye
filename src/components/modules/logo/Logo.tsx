import React from 'react';
import logo from './img/logo.png';
import Image from '../../ui/image/Image';
import './Logo.scss';

const Logo = () => {
  return <div className='Logo'>
    <Image src={logo} alt='Logo FishEye' id={'Logo-FishEye'} ariaLabel={'Logo FishEye'} />
  </div>;
};

export default Logo;
