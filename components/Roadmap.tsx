
import React from 'react';
import { RoadmapSection } from '../types';
import SectionWrapper from './SectionWrapper';

interface RoadmapProps {
  data?: RoadmapSection;
}

const Roadmap: React.FC<RoadmapProps> = ({ data }) => {
  if (!data) return null;

  return (
    <SectionWrapper id={data.id} heading={data.heading}>
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-6 md:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-rose-500/40 via-rose-500/20 to-slate-800 -translate-x-1/2" aria-hidden="true"></div>
        <div className="space-y-16">
          {data.steps.map((step) => (
            <div key={step.step} className="relative flex items-start">
              <div className="relative flex-shrink-0 flex items-center justify-center w-12 h-12 md:mx-auto">
                  <div className="absolute inset-0 bg-rose-500 rounded-full animate-pulse-slow opacity-50"></div>
                  <div className="relative w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center text-white font-black text-2xl z-10 shadow-lg border-4 border-slate-800">
                    {step.step}
                  </div>
              </div>
              <div className="ml-8 md:ml-0 md:w-[calc(50%-3rem)] md:pl-12 md:pr-0 md:text-left even:md:order-first even:md:pr-12 even:md:pl-0 even:md:text-right bg-slate-900/40 backdrop-blur-sm border border-slate-700 p-6 rounded-xl w-full transition-all duration-300 hover:border-rose-500/40 hover:-translate-y-1">
                <h3 className="text-xl font-bold text-slate-100 mb-3">{step.title}</h3>
                <ul className="space-y-2 text-slate-300">
                  {step.content.map((point, i) => (
                    <li key={i} className="flex items-start md:even:justify-end">
                      <span className="text-rose-400 mr-2 mt-1 md:even:order-last md:even:mr-0 md:even:ml-2">▪</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
          @keyframes pulse-slow {
              0%, 100% {
                  transform: scale(1.2);
                  box-shadow: 0 0 0 0 rgba(225, 29, 72, 0.4);
              }
              50% {
                  transform: scale(1.4);
                  box-shadow: 0 0 10px 10px rgba(225, 29, 72, 0);
              }
          }
          .animate-pulse-slow {
              animation: pulse-slow 4s infinite;
          }
      `}</style>
    </SectionWrapper>
  );
};

export default Roadmap;