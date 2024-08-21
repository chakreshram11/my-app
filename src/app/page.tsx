"use client"; // Add this at the very top

import { useRef } from 'react';
import Footer from '../app/components/Footer';
import ProductCard from '../app/components/ProductCard';
import CategoryCard from '../app/components/CategoryCard';


export default function HomePage() {
  const cartIconRef = useRef(null);


  const products = [
    { name: 'Product 1', description: 'This is a great product.', image: '/header.png' },
    { name: 'Product 2', description: 'This is another great product.', image: '/header.png' },
    { name: 'Product 3', description: 'This is yet another great product.', image: '/header.png' },
    { name: 'Product 4', description: 'This is a great product.', image: '/header.png' },
    { name: 'Product 5', description: 'This is another great product.', image: '/header.png' },
    { name: 'Product 6', description: 'This is yet another great product.', image: '/header.png' },
    { name: 'Product 7', description: 'This is a great product.', image: '/header.png' },
    { name: 'Product 8', description: 'This is another great product.', image: '/header.png' },
    { name: 'Product 9', description: 'This is yet another great product.', image: '/header.png' },
    { name: 'Product 10', description: 'This is a great product.', image: '/header.png' },
    { name: 'Product 11', description: 'This is another great product.', image: '/header.png' },
    { name: 'Product 12', description: 'This is yet another great product.', image: '/header.png' },
  ];

  const categories = [
    { name: 'NIKE AM90id', image: '/header.png' },
    { name: 'Puma Suede', image: '/logo.png' },
    { name: 'Puma Suede', image: '/logo.png' },
    { name: 'NIKE AM90id', image: '/header.png' },
    { name: 'Puma Suede', image: '/logo.png' },
    { name: 'Puma Suede', image: '/logo.png' },
    { name: 'NIKE AM90id', image: '/header.png' },
    { name: 'Puma Suede', image: '/logo.png' },
    { name: 'Puma Suede', image: '/logo.png' },
    { name: 'NIKE AM90id', image: '/header.png' },
    { name: 'Puma Suede', image: '/logo.png' },
  ];


  return (
    <>
     
        <div className="p-5 pt-20 pb-20">
          <h1 className="text-2xl font-bold mb-4">Categories</h1>
          <div className="flex p-10 space-x-4 overflow-x-auto overflow-y-hidden whitespace-nowrap scrollbar-hide">
          {categories.map((category, index) => (
              <CategoryCard
                key={index} 
                name={category.name}
                image={category.image}
                className={`${index === 0 ? 'ml-0 mr-5' : 'mx-5'}`}
              />
            ))}
        </div>
            <h1 className="text-2xl font-bold mb-4">Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {products.map((product, index) => (
                <ProductCard key={index} product={product} cartIconRef={cartIconRef} />
              ))}
            </div> 
          </div>

      <Footer cartIconRef={cartIconRef} />
        
    </>
  );
}
