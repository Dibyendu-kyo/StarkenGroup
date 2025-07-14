// components/ExpertGuidance.tsx
import Image from "next/image";

const agents = [
  {
    name: "Cameron William",
    role: "President & CEO",
    image: "/images/expert_1.jpg",
  },
  {
    name: "Leslie Alexander",
    role: "Property Manager",
    image: "/images/expert_2.jpg",
  },
];

export default function ExpertGuidance() {
  return (
    <section className="py-16 px-4 flex justify-center">
      <div className="bg-[#f1f5f9] max-w-7xl w-full  px-6 py-12 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-6 leading-tight">
            Start your property journey with expert guidance
          </h2>
          <p className="text-gray-600 mb-6">
            Our expert agents are here to help you navigate your real estate journey.
          </p>
          <button className="bg-[#0f172a] text-white px-6 py-3 rounded-full hover:bg-[#1e293b] transition">
            Contact Agent →
          </button>
        </div>

        {/* Right: Agent Cards */}
        <div className="flex-1 grid sm:grid-cols-2 gap-6">
          {agents.map((agent, index) => (
            <div key={index} className="text-center">
              <div className="relative w-full h-72 mb-4  overflow-hidden">
                <Image
                  src={agent.image}
                  alt={agent.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <p className="font-semibold text-lg">{agent.name}</p>
              <p className="text-sm text-gray-500">{agent.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
