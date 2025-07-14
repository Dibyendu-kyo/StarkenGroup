"use client";
import Image from "next/image";
import properties from "@/data/properties";
import Link from "next/link";

export default function LatestProperties() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-base font-semibold text-indigo-600">
          New Arrivals
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
          Explore the Latest Listings
        </p>

        {/* Property Cards Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {properties.map((property) => (
            <div key={property.id} className="bg-white overflow-hidden">
              {/* Image with tag */}
              <div className="relative w-full h-120 overflow-hidden group">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute top-3 left-3 bg-white/60 text-gray-800 text-xs font-semibold px-3 py-1 rounded">
                  {property.tag}
                </span>
              </div>

              {/* Info row: Title + Price (left), Specs (right) */}
              <div className="py-2 flex justify-between items-start">
                {/* Left side: name and price */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {property.title}
                  </h3>
                  <p className="text-gray-600">{property.price}</p>
                </div>

                {/* Right side: Beds, Baths, Area */}
                <div className="text-sm text-gray-500 text-right space-y-1 flex gap-3">
                  <p>{property.beds} Beds</p>
                  <p>{property.baths} Baths</p>
                  <p>{property.area}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Properties Button */}
        <div className="mt-6 flex justify-end">
          <Link href="/properties">
            <button className="bg-[#0d1536] text-white font-semibold px-6 py-2 rounded-3xl">
              View All Properties →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
