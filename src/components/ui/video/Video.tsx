import './Video.scss';

const Video = ({ src, id, type = 'video/mp4', controls = false }: {
  src: string,
  id?: string,
  type?: string,
  controls?: boolean,
}) => {
  return <video className={'Video'} controls={controls} id={id}>
    <source src={src} type={type} />
  </video>;
};

export default Video;
