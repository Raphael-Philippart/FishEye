const Image = ({ src, alt, id, ariaLabel }: { src: string, alt: string, id?: string, ariaLabel: string }) => {
  return <img src={src} alt={alt} id={`${id}`} aria-label={ariaLabel} />;
};

export default Image;
