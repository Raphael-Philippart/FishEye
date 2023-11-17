import { ReactNode } from 'react';
import './Link.scss';

const Link = ({ href, children, tabIndex = 1 }: { href: string, children: ReactNode, tabIndex?: number }) => {
  return <a href={href} className={'Link'} tabIndex={tabIndex}>{children}</a>;
};

export default Link;
