'use client';
import CartProduct from '@/interfaces/CartProductInterface';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type OrderConfirmModalProps = {
  cart: CartProduct[];
  grandTotal: number;
  isOpen: boolean;
  closeConfirmModal: () => void;
};

const OrderConfirmModal = ({
  cart,
  grandTotal,
  isOpen,
  closeConfirmModal,
}: OrderConfirmModalProps) => {
  const [showAllItems, setShowAllItems] = useState(false);
  const cartItemsQuantity = cart.reduce(
    (acc, item) => acc + item.productQuantity,
    -1
  );

  const togleItemsShow = () => setShowAllItems((prev) => !prev);

  const renderedCartItems = (cart: CartProduct[]) => {
    return cart.map((item) => {
      const { abbr, price, productQuantity, slug } = item;
      return (
        <div
          className='flex justify-between bg-bg-light-secondary border-b py-2 '
          key={abbr}
        >
          <Image
            width={50}
            height={50}
            alt='first cart item'
            src={`/assets/cart/image-${slug}.jpg`}
          />
          <div className='text-left w-full ml-2'>
            <p className='font-bold'>{abbr}</p>
            <p className='text-text-secondary'>
              <span>$</span>
              <span>{price}</span>
            </p>
          </div>
          <div>
            <p className='text-text-secondary'>
              <span>x</span>
              <span>{productQuantity}</span>
            </p>
          </div>
        </div>
      );
    });
  };
  if (!isOpen) {
    return;
  }
  return (
    <div>
      <div className='w-screen h-screen bg-bg-dark fixed top-0 left-0 opacity-50'></div>
      <div
        className='fixed top-1/2 left-1/2 transform 
      -translate-x-1/2 -translate-y-1/2 bg-bg-light-primary rounded-lg w-5/6 sm:w-4/6 lg:w-3/6 2xl:w-2/6 h-auto
      p-6 flex flex-col gap-8 sm:p-10 sm:gap-6 z-10'
      >
        <Image
          src={'/assets/checkout/icon-order-confirmation.svg'}
          alt='confirmation icon'
          width={50}
          height={50}
        />
        <h2 className='h6 font-bold'>thank you for your order</h2>
        <p className='text-text-secondary'>
          You will receive an email confirmation shortly.
        </p>

        <div className='bg-bg-light-secondary rounded-lg sm:flex justify-between'>
          <div className='p-4 sm:w-2/3'>
            {showAllItems
              ? renderedCartItems(cart)
              : renderedCartItems([cart[0]])}
            <button
              onClick={togleItemsShow}
              className='text-text-secondary text-center text-sm mt-2 w-full'
            >
              {showAllItems
                ? 'View less'
                : `and ${cartItemsQuantity} other item(s)`}
            </button>
          </div>
          <div
            className={`bg-bg-dark p-4 rounded-b-lg sm:rounded-b-none sm:rounded-r-lg sm:w-1/3 flex flex-col
          ${showAllItems ? 'justify-end' : 'justify-center'} gap-1`}
          >
            <h3 className='uppercase text-text-secondary text-sm'>
              grand total
            </h3>
            <p className='text-text-light'>
              <span className='mr-1'>$</span>
              <span>{grandTotal}</span>
            </p>
          </div>
        </div>

        <Link
          href={'/'}
          onClick={closeConfirmModal}
          className='button bg-bg-accent text-text-light w-full text-center'
        >
          back to home
        </Link>
      </div>
    </div>
  );
};
export default OrderConfirmModal;
