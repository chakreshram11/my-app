"use client";

import { useRef, useState } from 'react';
import { Inter } from "next/font/google";
import "./globals.css";
import Header from './components/Header';
import Footer from "./components/Footer";
import { CartProvider } from '../app/CartContext';
import { usePathname } from 'next/navigation';
import CartPage from './cart/page';


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cartIconRef = useRef<HTMLAnchorElement>(null);
  const pathname = usePathname();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <CartProvider>
          {pathname !== '/cart' && <Header />}  
          <main className="flex-grow">
            {children}
            {isCartOpen && <CartPage onClose={() => setIsCartOpen(false)} />}
          </main>
          {pathname !== '/cart' && <Footer cartIconRef={cartIconRef} />}
        </CartProvider>
      </body>
    </html>
  );
}

