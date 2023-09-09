import Link from 'next/link';

type OtherProductsProps = {
  others: {
    slug: string;
    name: string;
    image: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }[];
};

const OtherProducts = ({ others }: OtherProductsProps) => {
  const renderedElements = others.map((el, i) => {
    const {
      slug,
      name,
      image: { mobile, tablet, desktop },
    } = el;
    return (
      <li key={slug} className='text-center my-8'>
        <picture>
          <source media='(min-width:1024px)' srcSet={desktop} />
          <source media='(min-width:640px)' srcSet={tablet} />
          <img src={mobile} alt={name} className='rounded-lg' />
        </picture>
        <h2 className='h5 font-bold my-8'>{name}</h2>
        <Link
          href={`/products/${slug}`}
          className='button bg-bg-accent hover:bg-bg-accent-hover text-text-light'
        >
          See product
        </Link>
      </li>
    );
  });

  return (
    <>
      <h2 className='h5 font-bold text-center mt-20 sm:flex'>
        You may also like
      </h2>
      <ul className='sm:flex gap-2 md:gap-4'>{renderedElements}</ul>
    </>
  );
};
export default OtherProducts;
