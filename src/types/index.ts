// src/types/index.ts
import { RefObject } from 'react';

export interface Product {
    name: string;
    description: string;
    image: string;
  }
  
  
  export interface ProductCardProps {
    product: Product;
    cartIconRef: RefObject<HTMLAnchorElement>;
  }
  