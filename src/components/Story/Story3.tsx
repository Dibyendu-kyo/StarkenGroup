import Image from "next/image";
import { UsersRound } from "lucide-react";

const teamMembers = [
  {
    name: "Cameron William",
    role: "Precedent & CEO",
    image: "/images/expert_1.jpg",
  },
  {
    name: "Leslie Alexander",
    role: "Property Manager",
    image: "/images/expert_2.jpg",
  },
  {
    name: "Savannah Nguyen",
    role: "Marketing Head",
    image: "/images/expert_3.jpg",
  },
  {
    name: "Ronald Richards",
    role: "Financial Advisor",
    image: "/images/expert_4.jpg",
  },
  // ➕ Add more members here
];

export default function TeamSection() {
  return (
    <section className="px-6 py-20 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="flex items-center text-sm text-gray-500 mb-2">
            <UsersRound size={16} className="mr-2" />
            Members
          </p>
          <h2 className="text-4xl font-semibold">Meet Our Team</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative w-full h-80 mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                //   className="rounded"
                />
              </div>
              <p className="font-semibold text-lg">{member.name}</p>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
