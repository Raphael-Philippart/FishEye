import { ReactNode } from 'react';
import './Video.scss';

const Video = ({ src, type = 'video/mp4', controls = false, tabIndex = 1 }: {
  src: string,
  type?: string,
  controls?: boolean,
  tabIndex?: number
}) => {
  return <video className={'Video'} controls={controls} tabIndex={tabIndex}>
    <source src={src} type={type} />
  </video>;
};

export default Video;
