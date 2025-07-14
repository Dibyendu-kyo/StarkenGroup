"use client";
import groups from "@/data/groups";
import Image from "next/image";
import Link from "next/link";

export default function CompaniesSection() {
  // Flatten all companies from all groups and take the first 3
  const allCompanies = groups.flatMap(group => group.companies);
  const featuredCompanies = allCompanies.slice(0, 3);

  return (
    <section className="bg-[#f2f5f9] py-20">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <h2 className="text-3xl font-semibold text-gray-900 max-w-3xl mb-12">
          Our Companies
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-t border-gray-300 pt-10">
          {featuredCompanies.map((company, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-md flex flex-col items-center h-90 justify-between bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="w-full h-40 mb-2 flex items-center justify-center relative bg-white p-4">
                <Image
                  src={company.logo}
                  alt={company.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={90}
                />
              </div>
              <div className="p-3">
                <p className="text-2xl font-semibold text-center">
                  {company.name}
                </p>
                <p className="text-xs text-gray-500 text-center">
                  {company.tagline}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-10">
          <Link href="/companies">
            <span className="text-base text-blue-900 underline underline-offset-4 hover:text-blue-600 cursor-pointer font-medium transition-colors">
              View More
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
