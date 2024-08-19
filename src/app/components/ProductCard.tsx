import { useRef, useState } from 'react';
import Image from 'next/image';
import { Product } from '../../types';
import { useCart } from '../CartContext';

interface ProductCardProps {
  product: Product;
  cartIconRef: React.RefObject<HTMLAnchorElement>;
}

export default function ProductCard({ product, cartIconRef }: ProductCardProps) {
  const [animate, setAnimate] = useState(false);
  const productImageRef = useRef<HTMLImageElement>(null);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (productImageRef.current && cartIconRef.current) {
      const productImagePos = productImageRef.current.getBoundingClientRect();
      const cartIconPos = cartIconRef.current.getBoundingClientRect();
  
      const translateX = cartIconPos.left - productImagePos.left;
      const translateY = cartIconPos.top - productImagePos.top;
  
      // Create a clone of the image for animation
      const cloneImage = productImageRef.current.cloneNode(true) as HTMLImageElement;
      document.body.appendChild(cloneImage);
  
      // Set initial position and styles for the cloned image
      cloneImage.style.position = 'fixed';
      cloneImage.style.left = `${productImagePos.left}px`;
      cloneImage.style.top = `${productImagePos.top}px`;
      cloneImage.style.width = `${productImagePos.width}px`;
      cloneImage.style.height = `${productImagePos.height}px`;
      cloneImage.style.transition = 'transform 0.8s ease-in-out, opacity 0.8s ease-in-out';
      cloneImage.style.zIndex = '1000';
      cloneImage.style.borderRadius = '50%'; // Circle shape for the animation
  
      // Trigger the animation after the clone has been added to the DOM
      setTimeout(() => {
        cloneImage.style.transform = `translate(${translateX}px, ${translateY}px) scale(0.2)`;
        cloneImage.style.opacity = '0.5';
      }, 10); // Small delay to ensure the transition applies correctly
  
      // Clean up after the animation ends
      cloneImage.addEventListener('transitionend', () => {
        cloneImage.remove();
      });
  
      // Update the cart
      addToCart(product);
    }
  };
    
  
  return (
    <div className="bg-white border rounded-lg shadow-lg p-4 relative">
      <div className="mb-4">
        <Image
          ref={productImageRef}
          src={product.image}
          alt={product.name}
          width={300}
          height={192}
          className={`w-full h-48 object-cover rounded-lg`}
        />
      </div>
      <h2 className="font-bold text-xl mb-2">{product.name}</h2>
      <p className="text-gray-600">{product.description}</p>
      <button
        className="bg-green-500 text-white w-full py-2 mt-4 rounded hover:bg-green-700"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}
