import Image from 'next/image';
import Link from 'next/link';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { ShopLink } from './ShopCategoryCardsList';

const ShopCategoryCard = ({
  category,
  src,
  link,
  about,
  toggleMenu,
}: ShopLink & { toggleMenu?: () => void }) => {
  return (
    <Link href={link} className='hoverable' scroll={true} onClick={toggleMenu}>
      <figure className='bg-bg-light-secondary rounded-lg text-center relative h-40 mt-20 mb-10 '>
        <Image
          src={src}
          alt={about}
          className='absolute -top-16 left-1/2 -translate-x-1/2  block'
        />
        <div className='shadow-box'></div>
        <div className='absolute left-1/2 -translate-x-1/2 bottom-6'>
          <figcaption className='h6 mb-4'>{category}</figcaption>
          <div className='flex justify-center items-center '>
            <p className='sub-title opacity-60 inline-block ml-2 linkToChange'>
              shop
            </p>
            <MdKeyboardArrowRight className='ml-2 text-2xl text-bg-accent' />
          </div>
        </div>
      </figure>
    </Link>
  );
};
export default ShopCategoryCard;
