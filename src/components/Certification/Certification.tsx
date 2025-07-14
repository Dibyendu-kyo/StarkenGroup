'use client';
import { Home } from 'lucide-react';
import Image from 'next/image';

const certifications = [
  {
    title: "RERA Registration",
    image: "/images/certifications/rera.png",
    issuedBy: "Government of Maharashtra",
    date: "Issued: Jan 2021",
  },
  {
    title: "ISO 9001:2015",
    image: "/images/certifications/iso.png",
    issuedBy: "ISO Organization",
    date: "Issued: June 2022",
  },
  {
    title: "Green Building Certified",
    image: "/images/certifications/green.png",
    issuedBy: "IGBC",
    date: "Issued: Aug 2023",
  },
];

export default function CertificationSection() {
  return (
    <section className="px-4 sm:px-6 md:px-10 py-16 max-w-7xl mx-auto mt-20">
      {/* Heading */}
      <div className="flex items-center gap-2 text-gray-700 text-sm font-medium mb-2">
        <Home className="text-gray-700" />
        <span>Our Certifications</span>
      </div>
      <h2 className="text-4xl font-semibold mb-10">Verified Credentials & Trust</h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="border border-gray-200 p-6 text-center bg-white shadow-sm hover:shadow-md transition"
          >
            <div className="w-full h-40 mb-4 flex items-center justify-center relative">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{cert.title}</h3>
            <p className="text-sm text-gray-600">{cert.issuedBy}</p>
            <p className="text-xs text-gray-400 mt-1">{cert.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
