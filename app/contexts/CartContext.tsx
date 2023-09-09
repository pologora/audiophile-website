'use client';
import { createContext, useState, useContext } from 'react';
import CartProduct from '@/interfaces/CartProductInterface';

export const CartContext = createContext<{
  cart: CartProduct[];
  setCart: React.Dispatch<React.SetStateAction<CartProduct[]>>;
} | null>(null);

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartProduct[]>([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be withing a CartContextProvider');
  }
  return context;
};
