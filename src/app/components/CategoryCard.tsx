import Image from 'next/image';

interface CategoryCardProps {
    name: string;
    image: string;
    className?: string; // Add this line if you want to pass a custom class
  }
  
export default function CategoryCard({ name, image }: CategoryCardProps) {
  return (
    <div className="relative bg-green-300 rounded-full shadow-lg text-center w-36  h-36 transform transition-transform duration-700 hover:scale-110 mx-auto group">
      <div className="w-36 h-36 rounded-full overflow-hidden mx-auto transform transition-transform duration-700">
        <Image
          src={image}
          alt={name}
          width={256}
          height={256}
          className="object-cover"
        />
      </div>
      <header className="absolute top-full left-0 w-full p-1 rounded-2xl transform transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-[-3rem] text-center">
        <h1 className="text-xl font-bold text-black">{name}</h1>
      </header>
    </div>
  );
}
