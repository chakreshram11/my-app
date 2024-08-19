// Footer Component
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../CartContext';

export default function Footer({ cartIconRef }: { cartIconRef: React.RefObject<HTMLAnchorElement> }) {
  const { cart } = useCart();

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-2">
        <Link href="/" className="flex flex-col items-center">
          <FontAwesomeIcon icon={faHome} className="h-7 w-7 text-green-900" />
        </Link>

        <Link href="/cart" className="flex flex-col items-center" ref={cartIconRef}>
          <FontAwesomeIcon icon={faShoppingCart} className="h-7 w-7 text-green-900" />
          {cart.length > 0 && (
            <span className="text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </footer>
  );
}
