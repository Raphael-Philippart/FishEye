import { ReactNode } from 'react';
import './Link.scss';

const Link = ({ href, children, tabIndex = 1, ariaLabel }: {
  href: string,
  children: ReactNode,
  tabIndex?: number,
  ariaLabel: string
}) => {
  return <a href={href} className={'Link'} tabIndex={tabIndex} aria-label={ariaLabel}>{children}</a>;
};

export default Link;
