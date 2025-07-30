'use client';
import timelineData from '@/data/timeline';

export default function TimelineSection() {
  return (
    <section className="px-4 md:px-16 py-20 max-w-7xl mx-auto bg-white">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Our <span className="text-[#4A90E2]">Milestones</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Key moments that have shaped our journey and defined our growth in the construction materials industry.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200"></div>

        {timelineData.map((event, index) => (
          <div key={index} className={`flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
            {/* Content Card */}
            <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`text-[#4A90E2] font-bold text-lg mb-2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  {event.year}
                </div>
                <h3 className={`text-xl font-bold text-gray-800 mb-3 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  {event.title}
                </h3>
                <p className={`text-gray-600 leading-relaxed ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  {event.description}
                </p>
              </div>
            </div>

            {/* Center dot */}
            <div className="w-2/12 flex justify-center">
              <div className="w-6 h-6 bg-[#4A90E2] rounded-full border-4 border-white shadow-lg z-10 relative">
                <div className="absolute inset-0 bg-[#4A90E2] rounded-full animate-ping opacity-20"></div>
              </div>
            </div>

            {/* Empty space for alternating layout */}
            <div className="w-5/12"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
