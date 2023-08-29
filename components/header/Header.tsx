'use client';
import Logo from '../shared/Logo';
import Navigation from '../navigation/Navigation';
import CartButton from '../shared/CartButton';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className='bg-bg-dark flex justify-between items-center p-4 py-8 w-full relative'>
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
      <Navigation isMenuOpen={isMenuOpen} />
      <Logo />
      <CartButton />
    </header>
  );
};
export default Header;
