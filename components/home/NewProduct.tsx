import Link from 'next/link';

const NewProduct = () => {
  return (
    <article
      className={`text-center text-text-light  mb-10 bg-bg-dark lg:text-left`}
    >
      <div className='custom-container relative'>
        <picture className='w-full block '>
          <source
            media='(min-width:1024px)'
            srcSet={'/assets/home/desktop/image-hero.jpg'}
          />
          <source
            media='(min-width:640px)'
            srcSet={'/assets/home/tablet/image-header.jpg'}
          />
          <img
            src='/assets/home/mobile/image-header.jpg'
            alt='XX99 Mark 2 Headphones'
          />
        </picture>
        <div className='bg-opacity-0 absolute top-48 left-1/2 -translate-x-1/2  lg:translate-x-0 lg:left-12 lg:top-40 lg:w-2/5'>
          <h3 className='overline-text opacity-75'>new product</h3>
          <h1 className='h2 my-10 lg:h1'>xx99 mark II headphones</h1>
          <p className=' opacity-75'>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <div className='my-10'>
            <Link
              href={'/products/xx99-mark-two-headphones'}
              className='bg-bg-accent button mb-20 hover:bg-bg-accent-hover '
            >
              See product
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
export default NewProduct;
