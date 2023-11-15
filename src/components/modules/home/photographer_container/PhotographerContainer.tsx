import React, { ReactNode } from 'react';
import './PhotographerContainer.scss';

const PhotographerContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className='PhotographerContainer'>
      <div>{children}</div>
    </div>
  );
};

export default PhotographerContainer;
