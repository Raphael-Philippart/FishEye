import './Likes.scss';
import Heart from '../../ui/svg/heart/Heart';

const Likes = ({ likes, price }: { likes: number, price: number }) => {
  return <div className='Likes'>
    <div>
      <div>{likes}</div>
      <div><Heart /></div>
    </div>
    <div>{price}€/jour</div>
  </div>;
};

export default Likes;
