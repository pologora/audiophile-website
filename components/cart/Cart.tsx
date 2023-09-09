import Link from 'next/link';
import CartElement from './CartElement';
import { useContext } from 'react';
import { CartContext } from '@/app/contexts/CartContext';

type CartProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Cart = ({ isOpen, onClose }: CartProps) => {
  const context = useContext(CartContext);
  const cart = context?.cart;
  const setCart = context?.setCart;

  const handleClearCart = () => {
    if (setCart) {
      setCart([]);
    }
  };

  const total = cart?.reduce((acc, item) => {
    return acc + item.price * item.productQuantity;
  }, 0);

  const renderedCartElements = cart?.map((product, i: number) => (
    <CartElement product={product} key={i} />
  ));

  const isCartVisible = isOpen ? 'block' : 'hidden';
  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <section
      className={`w-screen h-screen bg-bg-dark bg-opacity-50 fixed top-0 left-0 z-10 ${isCartVisible}`}
      onClick={onClose}
    >
      <div
        className='bg-bg-light-primary flex flex-col absolute left-6 right-6 top-24 rounded-lg p-6 z-20 gap-8
        sm:w-2/3 sm:left-auto md:w-1/2 lg:w-1/2 lg:right-[10%] xl:right-[15%] xl:w-1/3 2xl:right-[20%]'
        onClick={handleContentClick}
      >
        <div className='flex justify-between'>
          <h3 className='h6 font-bold'>
            cart <span>(3)</span>
          </h3>
          <button className='text-text-secondary' onClick={handleClearCart}>
            Remove all
          </button>
        </div>
        <div className='flex gap-6 flex-col'>{renderedCartElements}</div>
        <div className='flex justify-between'>
          <p className='uppercase text-text-secondary'>total</p>
          <span className='font-bold'>${total}</span>
        </div>
        <Link
          href={'/checkout '}
          className='button bg-bg-accent text-text-light text-center'
          onClick={onClose}
        >
          checkout
        </Link>
      </div>
    </section>
  );
};
export default Cart;
