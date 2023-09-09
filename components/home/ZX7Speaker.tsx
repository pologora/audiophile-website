import Link from 'next/link';

const ZX7Speaker = () => {
  return (
    <section className='rounded-lg relative'>
      <picture>
        <source
          media='(min-width:1024px)'
          srcSet='/assets/home/desktop/image-speaker-zx7.jpg'
        />
        <source
          media='(min-width:640px)'
          srcSet='/assets/home/tablet/image-speaker-zx7.jpg'
        />
        <img
          src='/assets/home/mobile/image-speaker-zx7.jpg'
          alt='ZX7 speaker'
          className='rounded-lg w-full'
        />
      </picture>
      <div className='absolute top-1/4 left-6 sm:left-12 lg:left-20'>
        <h2 className='h3 top-0'>zx7 speaker</h2>
        <Link
          href={'/products/zx7-speaker'}
          className='button border-2 border-black mt-10
        focus:bg-bg-dark focus:text-text-light hover:bg-bg-dark hover:text-text-light'
        >
          see product
        </Link>
      </div>
    </section>
  );
};
export default ZX7Speaker;
