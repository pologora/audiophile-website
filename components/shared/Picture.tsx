type PictureProps = {
  lg?: string;
  sm?: string;
  src: string;
  alt: string;
};

const Picture = ({ lg, sm, src, alt }: PictureProps) => {
  return (
    <picture>
      <source media='(min-width:1024px)' srcSet={lg} />
      <source media='(min-width:640px)' srcSet={sm} />
      <img src={src} alt={alt} />
    </picture>
  );
};
export default Picture;
