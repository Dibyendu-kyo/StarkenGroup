// sections/FeaturedProperties.tsx
import PropertyCard from "@/sections/PropertyCard";
import industries from "@/data/industries";
import Link from "next/link";

export default function FeaturedIndustries() {
  // Show only the first 4 industries
  const featuredIndustries = industries.slice(0, 4);

  return (
    <section className="py-16 px-4 md:px-10 lg:px-20">
      <p className="text-sm text-gray-500 mb-2">🏭 Featured Industries</p>
      <h2 className="text-3xl font-semibold mb-10">Our Industries</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {featuredIndustries.map((industry) => (
          <PropertyCard
            key={industry.id}
            image={industry.icon}
            title={industry.title}
          />
        ))}
      </div>

      <div className="flex justify-end mt-10">
        <Link href="/industries">
          <span className="text-base text-blue-900 underline underline-offset-4 hover:text-blue-600 cursor-pointer font-medium transition-colors">
            View More
          </span>
        </Link>
      </div>
    </section>
  );
}
