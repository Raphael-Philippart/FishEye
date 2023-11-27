import { ReactNode, useState } from 'react';
import { usePhotographerContext } from '../../../context/PhotographerContext';

const EventLikes = ({ imageLikes, children }: {
  imageLikes: number,
  children: ReactNode
}) => {
  const [statusUserLike, setStatusUserLike] = useState(false);
  const { likes, updateLikes } = usePhotographerContext();

  /**
   * Function to handle user likes for a media item.
   */
  const handleLikes = () => {
    // Check if the user has not liked the media
    if (!statusUserLike) {
      // Increment the likes count and update the user like status to true
      updateLikes(likes + 1);
      setStatusUserLike(true);
    } else {
      // Decrement the likes count and update the user like status to false
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
