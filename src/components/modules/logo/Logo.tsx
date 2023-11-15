import React from 'react';
import logo from './img/logo.png';
import './Logo.scss';
import Image from '../../ui/image/Image';

const Logo = () => {
  return (
    <div className='Logo'>
      <Image src={logo} alt='Logo FishEye' />
    </div>
  );
};

export default Logo;
