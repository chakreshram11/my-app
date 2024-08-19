"use client";

import { createContext, useContext, useState } from 'react';
import { Product } from '../types';

interface CartContextProps {
  cart: Product[];
  addToCart: (product: Product) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    console.log('Adding to cart:', product);
    setCart([...cart, product]);
  };
  
  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
