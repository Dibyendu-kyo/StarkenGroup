"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const IntroWithImage = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row px-6 lg:px-16 py-16 gap-10 bg-white">
      {/* Left Section */}
      <div className="lg:w-1/2 flex flex-col">
        {/* Heading */}
        <h2 className="text-3xl lg:text-4xl font-semibold leading-snug mb-4 text-black">
          About Starken Group
        </h2>

        {/* Paragraph */}
        <p className="text-gray-700 mb-6 leading-relaxed">
          As STARKEN family aiming at expanding its service quality throughout the Nation, we
          have look opportunity to work in many cities under the administration of executives
          experienced in the sector, STARKEN aims at being an important brand value expanding
          from India to the world with its dynamic employees and constantly developing and
          growing machine park in parallel with technological and innovative developments.
          As STARKEN we attach great importance to quality and corporate identity and we have
          numerous certificates in our field. You can follow our innovative solution for PT works in
          construcon. 
        </p>

        {/* About Button */}
        <Link href="/story" className="bg-[#0d1536] text-white px-6 py-3 rounded-full hover:bg-gray-800 transition mb-6 w-fit">
          About us →
        </Link>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 flex flex-col relative h-80 lg:h-auto">
        <Image
          src="/main logo/Screenshot_2025-07-12_210534-removebg-preview.png"
          alt="Starken Groups Logo"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default IntroWithImage;
