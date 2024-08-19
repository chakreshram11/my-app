"use client";

import { useRef } from 'react';
import Footer from '../app/components/Footer';
import ProductCard from '../app/components/ProductCard';

export default function HomePage() {
  const cartIconRef = useRef(null);

  const products = [
    { name: 'Product 1', description: 'This is a great product.', image: '/header.png' },
    { name: 'Product 2', description: 'This is another great product.', image: '/header.png' },
    { name: 'Product 3', description: 'This is yet another great product.', image: '/header.png' },
  ];

  return (
    <>
      <div className="p-10 pb-10">
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} cartIconRef={cartIconRef} />
          ))}
        </div>
      </div>
      <Footer cartIconRef={cartIconRef} />
    </>
  );
}
