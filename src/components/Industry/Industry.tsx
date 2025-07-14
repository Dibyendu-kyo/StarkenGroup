"use client";
import industries from "@/data/industries";
import Link from "next/link";
import { Home } from "lucide-react";
import Image from "next/image";

export default function IndustriesPage() {
  return (
    <section className="px-4 md:px-16 py-20 max-w-7xl mx-auto mt-10">
      <div className="flex gap-2 items-center mb-3 text-gray-500">
        <Home />
        <span>Our Industry</span>
      </div>
      <h2 className="text-4xl font-bold mb-12">Explore Our Industries</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {industries.map((industry) => (
          <Link key={industry.id} href={`/industries/${industry.id}`}>
            <div className="border p-6 rounded-xl text-center hover:shadow-lg transition bg-white">
              <div className="relative w-full h-40 mb-4">
                <Image
                  src={industry.icon}
                  alt={industry.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <h3 className="text-lg font-semibold">{industry.title}</h3>
              <p className="text-sm text-gray-600 mt-2">
                {industry.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
