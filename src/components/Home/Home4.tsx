"use client";
import { ArrowUp, ArrowDown, Home } from "lucide-react";

const Home4 = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="flex items-center gap-2 mb-8 text-gray-700 text-sm font-medium">
          <Home />
          <span>Our Achievements</span>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-300 overflow-hidden bg-gray-100">
          {/* Box 1 */}
          <div className="p-8 border-r border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <ArrowUp className="text-black" />
              <span className="text-3xl font-semibold text-black">50%</span>
            </div>
            <h3 className="text-lg font-medium text-black mb-15">
              Growth in International Listings
            </h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>→ More International Property Options</li>
              <li>→ Broader Listing Opportunities Worldwide</li>
            </ul>
          </div>

          {/* Box 2 */}
          <div className="p-8 border-r border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <ArrowDown className="text-black" />
              <span className="text-3xl font-semibold text-black">10%</span>
            </div>
            <h3 className="text-lg font-medium text-black mb-15">
              Lower Closing Costs
            </h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>→ Affordable Property Closing Solutions</li>
              <li>→ Lower Expenses for Greater Savings</li>
            </ul>
          </div>

          {/* Box 3 */}
          <div className="p-8">
            <div className="flex items-center gap-2 mb-2">
              <ArrowUp className="text-black" />
              <span className="text-3xl font-semibold text-black">20%</span>
            </div>
            <h3 className="text-lg font-medium text-black mb-15">
              Increase in Virtual Tours
            </h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>→ More Properties Accessible Virtually</li>
              <li>→ Convenient Home Tours Anytime</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home4;
