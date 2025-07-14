'use client'
import {motion} from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const bgImages = [
  "/home/heroImage.webp",
  "/home/featured_1.png",
  "/home/featured_2.png",
  "/home/featured_3.png"
];

const HeroSection = () => {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url('${bgImages[bgIndex]}')` }}
    >
      <div className="absolute inset-0 z-0"></div>
      <div className="relative z-10 flex flex-col justify-end h-full px-6 md:px-20 pb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-10">
          <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-6xl font-light leading-tight mb-4">
              Starken Groups
            </h1>
            <div className="text-lg mb-6">
              As STARKEN , we have vast knowledge of domestic as well as international experience
              in the fields of engineering and applicaons as of 2014. 
            </div>
            <Link href="/companies" className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
              Explore Our Companies →
            </Link>
          </motion.div>
          <div className="hidden md:block backdrop-blur-md p-6 rounded-xl w-full max-w-xl text-white shadow-lg">
            <div className="flex items-center gap-4 bg-white/10 p-3 rounded-md mb-4">
              <input
                type="text"
                placeholder="Search house, apartments, villa..."
                className="bg-transparent outline-none flex-1 text-white "
              />
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                />
              </svg>
            </div>
            <div className="flex justify-between items-center gap-4 mt-4">
              <div className="flex items-center gap-3">
                <div className="bg-white/30 p-2 rounded-full text-lg">🏢</div>
                <div>
                  <p className="font-bold text-lg">585+ Residential</p>
                  <p className="text-sm">Properties Available</p>
                </div>
              </div>
              <div className="h-10 w-px bg-white/40"></div>
              <div className="flex items-center gap-3">
                <div className="bg-white/30 p-2 rounded-full text-lg">🏠</div>
                <div>
                  <p className="font-bold text-lg">35+ Years</p>
                  <p className="text-sm">Industry Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
