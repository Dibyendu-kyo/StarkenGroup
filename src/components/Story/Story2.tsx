import Image from "next/image";

export default function AboutStatsSection() {
  return (
    <section className="px-6 py-20 bg-white flex justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-10 flex flex-col justify-center">
          <p className="text-lg text-gray-800">
            We take pride in transforming the real estate experience with data-driven insights, & a customer-first approach.
          </p>

          <div className="space-y-10">
            {/* Stat 1 */}
            <div>
              <h3 className="text-xl font-semibold">
                <span className="text-3xl font-bold text-gray-900">10+</span>{" "}
                Industry Awards & Recognition
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Awards for excellence in customer service, innovation, & real estate expertise.
              </p>
            </div>

            <hr />

            {/* Stat 2 */}
            <div>
              <h3 className="text-xl font-semibold">
                <span className="text-3xl font-bold text-gray-900">10,000+</span>{" "}
                Happy Investors
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Facilitating investments, helping clients grow their portfolios with confidence.
              </p>
            </div>

            <hr />

            {/* Stat 3 */}
            <div>
              <h3 className="text-xl font-semibold">
                <span className="text-3xl font-bold text-gray-900">500+</span>{" "}
                Happy Homeowners
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Helping thousands of homeowners providing service throughout the journey.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full h-full overflow-hidden">
          <Image
            src="/about/Screenshot_2025-07-12_200244-removebg-preview.png"
            alt="Team working"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
