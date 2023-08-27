import Logo from '../shared/Logo';
import Navigation from '../navigation/Navigation';
import CartButton from '../shared/CartButton';

const Header = () => {
  return (
    <header className='bg-bg-dark flex justify-between items-center p-4 py-8 fixed w-full'>
      <Navigation />
      <Logo />
      <CartButton />
    </header>
  );
};
export default Header;
