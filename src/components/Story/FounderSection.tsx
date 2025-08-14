import Image from "next/image";

export default function FounderSection() {
  return (
    <section className="bg-[#0d1536] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Content */}
        <div className="w-full lg:w-[60%] space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
            Industry <span className="text-[#EB7C19]">Leadership</span>
          </h2>
          <p className="text-gray-300 mb-6">
            Our founder&apos;s vision and leadership have been the driving force behind
            Starken Constroworld&apos;s success. As a group of self-motivated brothers, we
            bring unparalleled dedication and commitment to quality in construction
            materials supply.
          </p>
          <p className="text-gray-300 mb-6">
            From starting with least sources to building a larger team network, our
            journey has been guided by principles of honesty, hard work, and customer
            satisfaction. We continue to serve our clients with loyalty and trust.
          </p>
          <p className="text-gray-300 mb-8">
            Today, under strong leadership, we serve 200+ happy clients across
            India with quality materials, ensuring every project receives the reliability
            and trust it deserves.
          </p>

          {/* Statistics */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="bg-white/10 p-6 rounded-lg text-center">
              <div className="text-[#EB7C19] text-2xl mb-2">👥</div>
              <div className="text-2xl font-bold">200+</div>
              <div className="text-sm text-gray-300">Happy Clients</div>
            </div>
            <div className="bg-white/10 p-6 rounded-lg text-center">
              <div className="text-[#EB7C19] text-2xl mb-2">🏆</div>
              <div className="text-2xl font-bold">10+</div>
              <div className="text-sm text-gray-300">Years Trust</div>
            </div>
          </div>
        </div>

        {/* Right: Founder Image */}
        <div className="w-full lg:w-[40%] flex justify-center">
          <div className="relative">
            <div className="bg-[#EB7C19]/20 rounded-2xl p-8">
              <div className="relative w-80 h-96 rounded-xl overflow-hidden">
                <Image
                  src="/about/WhatsApp Image 2025-07-10 at 11.08.30 AM.jpeg"
                  alt="Founder & Managing Director"
                  fill
                  className="object-cover"
                  quality={90}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#EB7C19] rounded-full p-4">
                <div className="text-white text-2xl">🏗️</div>
              </div>
            </div>
            <div className="text-center mt-6">
              <h3 className="text-xl font-bold text-[#EB7C19]">Industry Leadership</h3>
              <p className="text-sm text-gray-300">10+ Years in Materials Supply | 200+ Clients</p>
              <p className="text-xs text-[#EB7C19] mt-2">Founder & Managing Director</p>
              <div className="flex justify-center gap-4 mt-4">
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-[#EB7C19]">👥</span>
                  <span>100+ Customers</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-[#EB7C19]">✅</span>
                  <span>Trusted Quality</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}