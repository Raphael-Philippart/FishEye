import { ReactNode } from 'react';
import './Video.scss';

const Video = ({ src, id, type = 'video/mp4', controls = false, tabIndex = 0 }: {
  src: string,
  id?: string,
  type?: string,
  controls?: boolean,
  tabIndex?: number
}) => {
  return <video className={'Video'} controls={controls} id={id} tabIndex={tabIndex}>
    <source src={src} type={type} />
  </video>;
};

export default Video;
