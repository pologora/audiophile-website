'use client';
import Image from 'next/image';
import { useState } from 'react';

type CartElementProps = {
  product: {
    slug: string;
    productQuantity: number;
    name: string;
    price: number;
  };
};

const CartElement = ({ product }: CartElementProps) => {
  const { slug, productQuantity, name, price } = product;

  return (
    <div className='flex justify-between items-center'>
      <Image
        src={`/assets/cart/image-${slug}.jpg`}
        alt={'product'}
        width={70}
        height={70}
        className='rounded-md'
      />
      <div>
        <p className='font-bold'>{name.slice(0, name.lastIndexOf(' '))}</p>
        <p className='text-text-secondary'>
          <span className='mr-1'>$</span>
          <span>{price}</span>
        </p>
      </div>
      <div>
        <button className='change-quantity-btn hover:text-bg-accent focus:text-bg-accent'>
          -
        </button>
        <span className='change-quantity-btn'>{productQuantity}</span>
        <button className='change-quantity-btn hover:text-bg-accent focus:text-bg-accent'>
          +
        </button>
      </div>
    </div>
  );
};
export default CartElement;
