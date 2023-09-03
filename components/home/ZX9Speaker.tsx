const ZX9Speaker = () => {
  return (
    <section
      className='bg-bg-accent rounded-lg text-text-light flex items-center flex-col justify-center gap-10 py-10 my-10
    text-center lg:text-left overflow-hidden relative lg:items-end'
    >
      <div className='bigCircle imageOutCircle absolute -top-36 sm:-top-60 lg:-top-20 lg:-left-28'>
        <div className='mediumCircle imageOutCircle'>
          <div className='smallCircle imageOutCircle'>
            <picture>
              <source
                media='(min-width: 1024px)'
                srcSet={
                  '/assets/product-zx9-speaker/desktop/zx9-nobg-desktop.png'
                }
              />
              <img
                src='/assets/product-zx9-speaker/mobile/zx9-nobg-mobile.png'
                alt='ZX9 speaker'
              />
            </picture>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center lg:items-start mt-60 gap-6 z-10 lg:mt-24 lg:w-2/5 lg:mb-28'>
        <h2 className='h3 '>
          <p>ZX9</p> Speaker
        </h2>
        <p className='opacity-80 w-2/3 sm:w-1/2 lg:w-full z-10'>
          Upgrade to premium speakers that are phenomenally build to deliver
          truly remarkable sound.
        </p>
        <button className='button bg-bg-dark hover:bg-gray-700 z-10'>
          See product
        </button>
      </div>
    </section>
  );
};
export default ZX9Speaker;
