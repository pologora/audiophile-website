'use client';
import Link from 'next/link';
import ShopCategoryCardsList from '../shop-links/ShopCategoryCardsList';

type NavigationProps = {
  isMenuOpen: boolean;
};

const Navigation = ({ isMenuOpen }: NavigationProps) => {
  return (
    <nav
      className={`absolute top-24 left-0  z-50 w-screen h-screen bg-opacity-50 bg-black transition-all duration-300 ${
        !isMenuOpen ? '-translate-x-full' : ''
      }`}
    >
      <ShopCategoryCardsList />
    </nav>
  );
};
export default Navigation;
