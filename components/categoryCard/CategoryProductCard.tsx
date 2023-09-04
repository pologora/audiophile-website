import Link from 'next/link';

interface CategoryProductCardProps {
  cardData: {
    name: string;
    new_product: string;
    about: string;
    link: string;
    category: string;
    image: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };
  index: number;
}

const CategoryProductCard: React.FC<CategoryProductCardProps> = ({
  cardData,
  index,
}) => {
  const { name, new_product, link, image, about, category } = cardData;
  const { mobile, tablet, desktop } = image;

  return (
    <article
      className={`mb-36 lg:flex lg:justify-center gap-20 lg:mt-36 items-center ${
        index % 2 ? 'lg:flex-row-reverse' : 'lg:flex-row'
      }`}
    >
      <div>
        <picture>
          <source media='(min-width: 1024px)' srcSet={desktop} />
          <source media='(min-width: 640px)' srcSet={tablet} />
          <img src={mobile} alt={name} className='rounded-lg' />
        </picture>
      </div>
      <div className='text-center lg:text-left w-full'>
        <h5
          className={`${
            new_product === 'true' ? 'block' : 'hidden'
          } text-bg-accent overline-text mt-8`}
        >
          new product
        </h5>
        <h2 className='h3 font-semibold my-8'>
          {name} <p>{category}</p>
        </h2>
        <p className='opacity-80 md:w-2/3 md:mx-auto lg:w-full'>{about}</p>
        <Link
          href={link}
          className='button bg-bg-accent hover:bg-bg-accent-hover text-text-light mt-8'
        >
          see product
        </Link>
      </div>
    </article>
  );
};
export default CategoryProductCard;
