import { notFound } from "next/navigation";
import industryDetails from "@/data/industryDetails";
import industries from "@/data/industries";
import {Home} from "lucide-react";

export default function IndustryDetailPage({ params }) {
  const industryId = params.id;
  const sector = industries.find((ind) => ind.id === industryId);
  const companies = industryDetails[industryId];

  if (!sector) return notFound();

  return (
    <section className="px-4 md:px-16 py-20 max-w-7xl mx-auto mt-10">
        <div className="flex gap-2 items-center mb-3 text-gray-500">
            < Home />
            <span>Our Industry</span>
        </div>
      <h2 className="text-4xl font-bold mb-10">{sector.title}</h2>
      {companies?.length > 0 ? (
        companies.map((company, index) => (
          <div
            key={company.id}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center gap-10 mb-16`}
          >
            <div className="md:w-1/3 w-full">
              <img
                src={company.image}
                alt={company.name}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="md:w-2/3 w-full">
              <h3 className="text-2xl font-semibold">{company.name}</h3>
              <p className="text-gray-600 mt-3">{company.description}</p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-lg">No companies available under this sector yet.</p>
      )}
    </section>
  );
}
