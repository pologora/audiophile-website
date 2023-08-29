import Link from 'next/link';

const NewProduct = () => {
  return (
    <article
      className={`text-center text-text-light bg-newproduct-img px-10 relative mb-10`}
    >
      <div className='pt-48'>
        <h3 className='overline-text opacity-75'>new product</h3>
        <h1 className='h2 my-10'>xx99 mark II headphones</h1>
        <p className=' opacity-75'>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <div className='my-10'>
          <Link href={'/'} className='bg-bg-accent button mb-20'>
            See product
          </Link>
        </div>
      </div>
    </article>
  );
};
export default NewProduct;
