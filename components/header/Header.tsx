'use client';
import Logo from '../shared/Logo';
import MobileTabletNavigation from '../navigation/MobileTabletNavigation';
import CartButton from '../shared/CartButton';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';
import DesktopNavigation from '../navigation/DesktopNavigation';
import Cart from '../cart/Cart';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setCartIsOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleCart = () => setCartIsOpen((prev) => !prev);

  return (
    <header className='bg-bg-dark p-4 py-8 w-full relative'>
      <div className='flex justify-between items-center custom-container lg:px-12'>
        <div className='lg:hidden'>
          <button
            type='button'
            onClick={toggleMenu}
            className={`${isMenuOpen ? 'hidden' : ''}`}
          >
            <AiOutlineMenu size={28} color='white' />
          </button>
          <button
            type='button'
            onClick={toggleMenu}
            className={`${!isMenuOpen ? 'hidden' : ''}`}
          >
            <AiOutlineClose size={28} color='white' />
          </button>
          <MobileTabletNavigation
            isMenuOpen={isMenuOpen}
            toggleMenu={toggleMenu}
          />
        </div>
        <Logo />
        <div className='hidden lg:block'>
          <DesktopNavigation />
        </div>
        <CartButton onClick={toggleCart} />
        <Cart isOpen={isCartOpen} onClose={toggleCart} />
      </div>
    </header>
  );
};
export default Header;
