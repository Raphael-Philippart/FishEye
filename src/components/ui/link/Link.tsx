import { ReactNode } from 'react';

const Link = ({ href, children }: { href: string, children: ReactNode }) => {
  return <a href={href} className={'Link'}>{children}</a>;
};

export default Link;
