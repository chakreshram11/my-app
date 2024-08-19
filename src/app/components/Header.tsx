import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 h-18">
      <div className="flex items-center justify-between p-4">
        <div>
          <Link href="/">
            <Image 
              src="/logo.png" 
              alt="Logo"
              width={50}
              height={50}
              className="rounded-lg"
              priority={true}
            />
          </Link>
        </div>
        
        <div className="flex-1 ml-4 mr-4 flex items-center">
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full p-2 border-2 border-gray-300 rounded-l-md"
          />
          <button 
            type="button" 
            className="bg-green-900 text-white p-2 rounded-r-md transition duration-200 ease-in-out hover:bg-green-700 h-[43px]"
            aria-label="Search"
            title="Search"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z" 
                clipRule="evenodd" 
              />
            </svg>
          </button>
        </div>
        
        <div>
          <Link href="/account">
            <FontAwesomeIcon icon={faUserCircle} className="h-10 w-10 text-green-900" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
