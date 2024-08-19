// "use client";

// import { useEffect, useState, useRef } from "react";
// import { useCart } from "../CartContext";
// import ProductCard from "../components/ProductCard";

// export default function CartPage() {
//   const { cart } = useCart();
//   const cartIconRef = useRef<HTMLAnchorElement>(null); // Define cartIconRef
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     setVisible(true);
//   }, []);

//   return (
//     <div
//       className={`fixed top-0 left-0 p-5 w-full h-full bg-white transform transition-transform duration-700 ${
//         visible ? "translate-x-0" : "translate-x-full"
//       } overflow-y-auto`}
//     >
//       <div className="p-4">
//         <h1 className="text-2xl font-bold mb-4">Cart</h1>
//         {cart.length === 0 ? (
//           <p>Your cart is empty.</p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {cart.map((product, index) => (
//               <ProductCard key={index} product={product} cartIconRef={cartIconRef} />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState, useRef } from "react";
import { useCart } from "../CartContext";
import ProductCard from "../components/ProductCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

export default function CartPage({ onClose }: { onClose: () => void }) {
  const { cart } = useCart();
  const cartIconRef = useRef<HTMLAnchorElement>(null);
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 p-5 w-full h-full bg-white transform transition-transform duration-700 ${
        visible ? "translate-x-0" : "translate-x-full"
      } overflow-y-auto`}
    >
      <button
        className="absolute top-4 right-4 text-2xl"
        onClick={() => {
          setVisible(false);
          setTimeout(() => router.back(), 700);
        }}
        aria-label="Close Cart"
        title="Close Cart"
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>

      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cart.map((product, index) => (
                <ProductCard key={index} product={product} cartIconRef={cartIconRef} />
              ))}
            </div>
            <button
              className="bg-green-500 text-white w-full py-4 mt-8 rounded hover:bg-green-700 text-xl"
              onClick={() => alert('Proceeding to checkout...')}
            >
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
}

