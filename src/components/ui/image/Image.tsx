const Image = ({ src, alt, id }: { src: string, alt: string, id?: string }) => {
  return <img src={src} alt={alt} id={`${id}`} />;
};

export default Image;
