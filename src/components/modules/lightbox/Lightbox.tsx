import React from 'react';
import './Lightbox.scss';

const Lightbox = ({ closeLightBox }: { closeLightBox: any }) => {
  const handleLightBox = () => {
    closeLightBox();
  };

  return <div className='Lightbox'>
    <div>
      <button onClick={handleLightBox}>lightbox</button>
    </div>
  </div>;
};

export default Lightbox;
