import Image from 'next/image';

interface BannerProps {
  imageUrl: string;
}

export default function Banner({ imageUrl }: BannerProps) {
  return (
    <div className="w-full h-64 relative">
      <Image
        src={imageUrl}
        alt="Banner"
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
    </div>
  );
}
