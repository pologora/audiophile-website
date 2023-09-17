'use client';
import { createContext, useState, useContext, useEffect } from 'react';
import CartProduct from '@/interfaces/CartProductInterface';

const CART_LOCAL_STORAGE = 'cart';

export const CartContext = createContext<{
  cart: CartProduct[];
  setCart: React.Dispatch<React.SetStateAction<CartProduct[]>>;
} | null>(null);

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartProduct[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem(CART_LOCAL_STORAGE);
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(CART_LOCAL_STORAGE, JSON.stringify(cart));
  }, [cart]);

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
