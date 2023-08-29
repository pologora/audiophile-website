import earphoneImg from '@/public/assets/menu-no-bg/earphone.png';
import headphoneImg from '@/public/assets/menu-no-bg/headphone.png';
import speakerImg from '@/public/assets/menu-no-bg/speaker.png';
import ShopCategoryCard from './ShopCategoryCard';
import { StaticImageData } from 'next/image';

export type ShopLink = {
  src: StaticImageData;
  category: string;
  about: string;
  link: string;
};

const shopLinks: ShopLink[] = [
  {
    src: headphoneImg,
    category: 'headphones',
    about: 'Headphone xx59',
    link: '/headphones',
  },
  {
    src: speakerImg,
    category: 'speakers',
    about: 'Speaker zx7',
    link: '/speakers',
  },
  {
    src: earphoneImg,
    category: 'earphones',
    about: 'Earphone yx1',
    link: '/earphones',
  },
];

const ShopCategoryCardsList = () => {
  const renderedShopLinks = shopLinks.map((link) => (
    <ShopCategoryCard key={link.category} {...link} />
  ));
  return (
    <section className='bg-white w-full px-8 pt-2 pb-2 rounded-b-lg'>
      {renderedShopLinks}
    </section>
  );
};
export default ShopCategoryCardsList;
