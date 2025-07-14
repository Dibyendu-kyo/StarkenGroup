import Image from "next/image";

interface PropertyCardProps {
  image: string;
  title: string;
}

export default function PropertyCard({ image, title }: PropertyCardProps) {
  return (
    <div className="flex flex-col items-start hover:bg-[#0d1536] hover:text-white">
      <div className="w-full h-72 relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="mt-4 px-4 font-semibold text-lg">{title}</h3>
      <a
        href="#"
        className="mt-2 p-4 text-sm underline underline-offset-4 hover:text-blue-600"
      >
        View More
      </a>
    </div>
  );
}
