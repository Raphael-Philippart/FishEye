const Image = ({ src, alt, id, tabIndex = 0 }: { src: string, alt: string, id?: string, tabIndex?: number }) => {
  return <img src={src} alt={alt} id={`${id}`} tabIndex={tabIndex} />;
};

export default Image;
