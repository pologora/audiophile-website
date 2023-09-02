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

const ShopCategoryCardsList = ({ padding }: { padding?: number }) => {
  const renderedShopLinks = shopLinks.map((link) => (
    <ShopCategoryCard key={link.category} {...link} />
  ));
  return (
    <section
      className={`bg-white  py-2 rounded-b-lg sm:grid sm:grid-cols-3 sm:gap-4 px-${padding}`}
    >
      {renderedShopLinks}
    </section>
  );
};
export default ShopCategoryCardsList;
