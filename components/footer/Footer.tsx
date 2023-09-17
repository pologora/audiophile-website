import DesktopNavigation from '../navigation/DesktopNavigation';
import Logo from '../shared/Logo';
import { FaFacebook, FaTwitter, FaMedium } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=' bg-bg-dark text-text-light'>
      <div
        className='custom-container mx-auto flex flex-col items-center sm:items-start
     justify-between gap-10 pb-10 px-12 relative'
      >
        <div className='w-24 h-1 bg-bg-accent'></div>
        <Logo />
        <div className='lg:absolute top-12 right-12'>
          <DesktopNavigation />
        </div>
        <p className='opacity-70 text-center sm:text-start lg:w-1/2'>
          Audiophile is an all in one stop to fulfill your audio needs.
          We&#39;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we&#39;re open 7 days a week.
        </p>
        <div className='flex justify-between flex-col items-center gap-6 sm:w-full sm:flex-row'>
          <p className='opacity-70'>Copyright 2021. All Rights Reserved</p>
          <div className='flex items-center gap-5 sm:place-content-end lg:absolute right-12 top-1/2'>
            <FaFacebook
              className='hover:text-bg-accent cursor-pointer'
              size={28}
            />
            <FaTwitter
              className='hover:text-bg-accent cursor-pointer'
              size={28}
            />
            <FaMedium
              className='hover:text-bg-accent cursor-pointer'
              size={28}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
