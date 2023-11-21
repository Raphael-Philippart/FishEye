import { ReactNode, useState } from 'react';
import { useLightBoxContext } from '../../../context/LightBoxContext';

const EventLikes = ({ imageLikes, children }: {
  imageLikes: number,
  children: ReactNode
}) => {
  const [statusUserLike, setStatusUserLike] = useState(false);
  const { likes, updateLikes } = useLightBoxContext();

  const handleLikes = () => {
    if (!statusUserLike) {
      updateLikes(likes + 1);
      setStatusUserLike(true);
    } else {
      updateLikes(likes - 1);
      setStatusUserLike(false);
    }
  }

  return <div>
    <div>{statusUserLike ? imageLikes + 1 : imageLikes}</div>
    <div onClick={handleLikes}>{children}</div>
  </div>;
};

export default EventLikes;
