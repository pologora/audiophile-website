const BestGearCard = () => {
  return (
    <article className='text-center lg:flex flex-row-reverse justify-between lg:items-center my-36'>
      <picture className='lg:basis-1/2 block'>
        <source
          media='(min-width:1024px)'
          srcSet={'/assets/shared/desktop/image-best-gear.jpg'}
        />
        <source
          media='(min-width:640px)'
          srcSet={'/assets/shared/tablet/image-best-gear.jpg'}
        />
        <img
          src='/assets/shared/mobile/image-best-gear.jpg'
          alt=' A men wearing headphones'
          className='rounded-lg '
        />
      </picture>
      <div className='lg:basis-1/2 lg:text-left lg:pr-20'>
        <h2 className='h3 my-8 lg:mt-0'>
          Bringing you the
          <span className='text-bg-accent'> best</span> audio gear
        </h2>
        <p className='opacity-75'>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </article>
  );
};
export default BestGearCard;
