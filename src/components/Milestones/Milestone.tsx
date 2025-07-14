'use client';
import { useEffect, useRef, useState } from 'react';
import timelineData from '@/data/timeline';

export default function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);
  const [lineTop, setLineTop] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [maxLineHeight, setMaxLineHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled) setHasScrolled(true);

      const container = containerRef.current;
      if (!container) return;

      const centerY = window.innerHeight / 2;
      const scrollY = window.scrollY;
      const containerTop = container.getBoundingClientRect().top + scrollY;

      // Calculate the position of the last timeline dot
      const dots = container.querySelectorAll<HTMLElement>('.timeline-dot');
      const lastDot = dots[dots.length - 1];
      if (lastDot) {
        const lastDotTop = lastDot.getBoundingClientRect().top + scrollY;
        const maxHeight = lastDotTop - containerTop + 20; // Add 20px buffer
        setMaxLineHeight(maxHeight);
      }

      const newHeight = Math.max(0, Math.min(scrollY + centerY - containerTop, maxLineHeight));
      setLineTop(newHeight);

      const newActiveIndexes: number[] = [];
      dots.forEach((dot, i) => {
        const dotY = dot.getBoundingClientRect().top;
        if (dotY < centerY) newActiveIndexes.push(i);
      });

      setActiveIndexes(newActiveIndexes);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial run

    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled, maxLineHeight]);

  return (
    <section className="px-4 md:px-16 py-20 max-w-7xl mx-auto">
      <div className="text-sm text-gray-600 mb-2">Our Journey</div>
      <h2 className="text-4xl font-bold text-gray-800 mb-12">Company Timeline</h2>

      <div ref={containerRef} className="relative ml-[28px]">
        {/* Vertical animated line */}
        <div
          className="absolute left-[9px] top-0 w-1 bg-blue-900 z-0 transition-all duration-300"
          style={{ height: hasScrolled ? `${lineTop}px` : '0px' }}
        />

        {timelineData.map((event, index) => (
          <div key={index} className="relative pl-10 mb-14 left-[12px]">
            {/* Dot */}
            <div
              className={`timeline-dot absolute -left-[9px] top-1 w-4 h-4 rounded-full border-4 z-10 transition-all duration-300 ${
                hasScrolled && activeIndexes.includes(index)
                  ? 'bg-blue-900 border-blue-900 scale-110'
                  : 'bg-white border-gray-300'
              }`}
            />
            <div>
              <p className="text-sm text-gray-500">{event.year}</p>
              <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
              <p className="text-gray-600 mt-1">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
