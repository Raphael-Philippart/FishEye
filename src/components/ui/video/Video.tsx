import './Video.scss';

const Video = ({ src, id, type = 'video/mp4', controls = false, tabIndex = 0, ariaLabel }: {
  src: string,
  id?: string,
  type?: string,
  controls?: boolean,
  tabIndex?: number,
  ariaLabel: string,
}) => {
  return <video className={'Video'} controls={controls} id={id} tabIndex={tabIndex} aria-label={ariaLabel}>
    <source src={src} type={type} />
  </video>;
};

export default Video;
