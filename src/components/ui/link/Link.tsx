import { ReactNode } from 'react';
import './Link.scss';

const Link = ({ href, children, ariaLabel }: {
  href: string,
  children: ReactNode,
  ariaLabel: string
}) => {
  return <a href={href} className={'Link'} tabIndex={0} aria-label={ariaLabel}>{children}</a>;
};

export default Link;
