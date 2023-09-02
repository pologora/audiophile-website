import Link from 'next/link';

const Logo = () => {
  return (
    <Link
      scroll={true}
      href={'/'}
      className='text-text-light font-extrabold text-2xl leading-none'
    >
      audiophile
    </Link>
  );
};
export default Logo;
