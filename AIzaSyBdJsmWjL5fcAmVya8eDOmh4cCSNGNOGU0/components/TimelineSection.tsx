
import React, { useEffect, useRef } from 'react';
import { TimelineSectionData } from '../types';

interface TimelineSectionProps {
  data: TimelineSectionData;
}

const TimelineSection: React.FC<TimelineSectionProps> = ({ data }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('timeline-item-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const items = containerRef.current?.querySelectorAll('.timeline-item-hidden');
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, [data]);

  return (
    <section id={data.id} className="py-20 sm:py-28 bg-gray-800 overflow-x-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-amber-300">
          {data.title}
        </h2>
        <div ref={containerRef} className="relative wrap overflow-hidden p-10 h-full">
          <div className="absolute h-full border border-dashed border-opacity-20 border-white" style={{ left: '50%' }}></div>
          {data.timeline_items.map((item, index) => {
             const isRight = index % 2 !== 0;
             return (
                <div key={item.step} className={`timeline-item-hidden ${isRight ? 'timeline-item-right' : 'timeline-item-left'} mb-8 flex justify-between items-center w-full ${!isRight ? 'flex-row-reverse' : ''}`}>
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-amber-400 shadow-xl w-14 h-14 rounded-full">
                      <h1 className="mx-auto font-black text-3xl text-gray-900">{item.step}</h1>
                    </div>
                    <div className="order-1 bg-gray-700 rounded-lg shadow-xl w-5/12 px-6 py-4">
                      <p className="text-sm font-semibold text-amber-300">{item.date}</p>
                      <h3 className="mb-3 font-bold text-white text-xl">{item.title}</h3>
                      <p className="text-sm leading-snug tracking-wide text-gray-300 text-opacity-100">
                        {item.description}
                      </p>
                    </div>
                </div>
             );
          })}
        </div>
      </div>
      <style>{`
        .timeline-item-hidden {
          opacity: 0;
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .timeline-item-hidden.timeline-item-left {
          transform: translateX(-40px) scale(0.95);
        }
        .timeline-item-hidden.timeline-item-right {
          transform: translateX(40px) scale(0.95);
        }
        .timeline-item-visible {
          opacity: 1;
          transform: translateX(0) scale(1);
        }
      `}</style>
    </section>
  );
};

export default TimelineSection;
