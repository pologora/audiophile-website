const YX1Earphones = () => {
  return (
    <section className='mt-10 mb-20 sm:flex sm:justify-between gap-4'>
      <div className='h-52 sm:w-1/2 sm:h-64 md:h-80'>
        <picture>
          <source
            media='(min-width:1024px)'
            srcSet='/assets/home/desktop/image-earphones-yx1.jpg'
          />
          <source
            media='(min-width:640px)'
            srcSet='/assets/home/tablet/image-earphones-yx1.jpg'
          />
          <img
            src='/assets/home/mobile/image-earphones-yx1.jpg'
            alt='YX1 earphones'
            className='rounded-lg object-cover block h-full w-full'
          />
        </picture>
      </div>
      <div className='bg-bg-light-secondary rounded-lg mt-10 yx1-home-card px-6 py-10 sm:w-1/2 sm:mt-0'>
        <h2 className='h3 mb-10'>YX1 Earphones</h2>
        <button
          className='button border-2 border-black
        focus:bg-bg-dark focus:text-text-light hover:bg-bg-dark hover:text-text-light'
        >
          See product{' '}
        </button>
      </div>
    </section>
  );
};
export default YX1Earphones;
