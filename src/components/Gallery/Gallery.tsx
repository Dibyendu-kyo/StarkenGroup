'use client';
import { Home } from 'lucide-react';
import Image from 'next/image';

const galleryImages = [
  "/gallery/gallery_1.png",
  "/gallery/gallery_2.png",
  "/gallery/gallery_3.png",
  "/gallery/gallery_4.png",
  "/gallery/gallery_5.png",
  "/gallery/gallery_6.png",
  "/gallery/gallery_7.png",
  "/gallery/gallery_3.png",
];

export default function GallerySection() {
  const handleImageClick = (imageUrl: string) => {
    window.open(imageUrl, '_blank');
  };

  return (
    <section className="px-4 sm:px-6 md:px-10 py-16 max-w-7xl mx-auto mt-15">
      {/* Heading */}
      <div className="flex items-center gap-2 text-gray-700 text-sm font-medium mb-2">
        <Home className="text-gray-700" />
        <span>Our Gallery</span>
      </div>
      <h2 className="text-4xl font-semibold mb-10">Captured Spaces & Moments</h2>

      {/* Masonry-style Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {galleryImages.map((img, index) => (
          <div 
            key={index} 
            className="break-inside-avoid overflow-hidden rounded-lg relative w-full h-auto aspect-[3/2] cursor-pointer"
            onClick={() => handleImageClick(img)}
          >
            <Image
              src={img}
              alt={`Gallery Image ${index + 1}`}
              fill
              className="object-cover rounded-lg transition duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
