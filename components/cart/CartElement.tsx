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
  add: (name: string) => void;
  substract: (name: string) => void;
};

const CartElement = ({ product, add, substract }: CartElementProps) => {
  const { slug, productQuantity, name, price } = product;

  return (
    <div className='flex justify-between items-center gap-2'>
      <Image
        src={`/assets/cart/image-${slug}.jpg`}
        alt={'product'}
        width={70}
        height={70}
        className='rounded-md'
      />
      <div className='text-left w-1/3'>
        <p className='font-bold'>{name.slice(0, name.lastIndexOf(' '))}</p>
        <p className='text-text-secondary'>
          <span className='mr-1'>$</span>
          <span>{price}</span>
        </p>
      </div>
      <div className='flex'>
        <button
          className='change-quantity-cart-btn hover:text-bg-accent focus:text-bg-accent'
          onClick={() => substract(name)}
        >
          -
        </button>
        <span className='change-quantity-cart-btn'>{productQuantity}</span>
        <button
          className='change-quantity-cart-btn hover:text-bg-accent focus:text-bg-accent'
          onClick={() => add(name)}
        >
          +
        </button>
      </div>
    </div>
  );
};
export default CartElement;
