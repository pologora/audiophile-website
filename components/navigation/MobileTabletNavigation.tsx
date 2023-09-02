'use client';
import ShopCategoryCardsList from '../shop-links/ShopCategoryCardsList';

type NavigationProps = {
  isMenuOpen: boolean;
};

const menuCardsPadding = 8;

const MobileTabletNavigation = ({ isMenuOpen }: NavigationProps) => {
  return (
    <nav
      className={`absolute top-24 left-0 z-50 w-full h-screen bg-opacity-50 bg-black transition-all duration-300 lg:hidden  ${
        !isMenuOpen ? '-translate-x-full ' : ''
      }`}
    >
      <ShopCategoryCardsList padding={menuCardsPadding} />
    </nav>
  );
};
export default MobileTabletNavigation;
