import Link from 'next/link';

const links = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'headphones',
    link: '/headphones',
  },
  {
    title: 'speakers',
    link: '/speakers',
  },
  {
    title: 'earphones',
    link: '/earphones',
  },
];

const DesktopNavigation = () => {
  const renderedMenuLinks = links.map((link) => (
    <Link
      key={link.title}
      href={link.link}
      className='uppercase inline-block text-text-light opacity-90 hover:text-bg-accent 
      hover:opacity-100 focus:text-bg-accent focus:opacity-100'
    >
      {link.title}
    </Link>
  ));
  return (
    <nav>
      <ul className='flex flex-col gap-6 items-center sm:flex-row'>
        {renderedMenuLinks}
      </ul>
    </nav>
  );
};
export default DesktopNavigation;
