import { Home } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12 mt-20">
      {/* Left: Image with "Who we are" */}
      <div className="w-full lg:w-[45%]">
        <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
          <Home size={16} />
          <span>Who we are</span>
        </div>
        <h1 className="text-5xl mb-10">About us</h1>
        <div className="relative w-full h-[500px]">
          <Image
            src="/about/WhatsApp Image 2025-07-10 at 11.08.30 AM.jpeg"
            alt="About section"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 45vw"
            quality={90}
          />
        </div>
      </div>

      {/* Right: Content */}
      <div className="w-full lg:w-[55%] space-y-6">
        <div>
          <span className="inline-block bg-white border px-3 py-1 text-sm text-gray-700 mb-4">
            Our Story
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
            Built for Excellence
          </h2>
          <p className="text-gray-600">
            As STARKEN , we have vast knowledge of domestic as well as international experience
            in the fields of engineering and applications as of 2014. We have carried out important
            domestic and international projects including on-site applications in many developing
            fields with regard to manufacturing Reinforcement Couplers, Anchorage, Rock Bolts,
            Tie Rods, Innovative soluons for pre and post- tensioning systems, industrial metal
            components, customized fabricated product. 
          </p>
          <p className="text-gray-600">
            As STARKEN family aiming at expanding its service quality throughout the Nation, we
            have look opportunity to work in many cities under the administration of executives
            experienced in the sector, STARKEN aims at being an important brand value expanding
            from India to the world with its dynamic employees and constantly developing and
            growing machine park in parallel with technological and innovative developments.
            As STARKEN we attach great importance to quality and corporate identity and we have
            numerous cerficates in our field. You can follow our innovative solution for PT works in
            construction. 
          </p>
          <p className="text-gray-600">
            Thanks to a clear vision, a commitment to living its values and above all, outstanding
            people, the reputation associated with STARKEN name is that of integrity, innovation,
            quality and service excellence.
          </p>
        </div>
      </div>
    </section>
  );
}
