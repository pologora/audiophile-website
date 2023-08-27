'use client';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from '../shared/Logo';

const navigationData = [
  { href: '/', title: 'Home' },
  { href: '/headphones', title: 'Headphones' },
  { href: '/speakers', title: 'Speakers' },
  { href: '/earphones', title: 'Earphones' },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const renderedNavigationLinks = navigationData.map((link) => (
    <li key={link.href}>
      <Link href={link.href} className='text-text-light'>
        {link.title}
      </Link>
    </li>
  ));
  return (
    <nav
      className={`bg-bg-dark flex justify-between ${
        isMenuOpen ? 'absolute top-0 left-0 ' : ''
      }`}
    >
      <button
        type='button'
        onClick={toggleMenu}
        className={`${isMenuOpen ? 'hidden' : ''}`}
      >
        <AiOutlineMenu size={28} color='white' />
      </button>
      <ul
        className={`flex items-center w-screen flex-col h-screen h3 gap-10 ${
          !isMenuOpen ? 'hidden' : ''
        }`}
      >
        <button
          type='button'
          onClick={toggleMenu}
          className='self-start block m-4'
        >
          <AiOutlineClose size={28} color='white' />
        </button>
        {renderedNavigationLinks}
      </ul>
    </nav>
  );
};
export default Navigation;
