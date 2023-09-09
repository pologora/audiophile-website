type ProductCardGallaryProps = {
  gallery: {
    first: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    second: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    third: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };
  name: string;
};

const ProductCardGallary = ({ gallery, name }: ProductCardGallaryProps) => {
  const renderedGallaryItems = Object.values(gallery).map((item, index) => (
    <picture
      key={index}
      className={`
        rounded-lg
        ${index === 0 ? 'col-start-1 col-end-3 row-start-1 row-end-2' : ''}
        ${index === 1 ? 'col-start-1 col-end-3 row-start-2 row-end-3' : ''}
        ${index === 2 ? 'col-start-3 col-end-6 row-start-1 row-end-3' : ''}
      `}
    >
      <source media='(min-width:1024px)' srcSet={item.desktop} />
      <source media='(min-width:640px)' srcSet={item.tablet} />
      <img
        src={item.mobile}
        alt={name}
        className={`rounded-lg my-6 sm:my-0 sm:h-full`}
      />
    </picture>
  ));
  return (
    <div className='sm:grid grid-cols-5 grid-rows-2 gap-4'>
      {renderedGallaryItems}
    </div>
  );
};
export default ProductCardGallary;
