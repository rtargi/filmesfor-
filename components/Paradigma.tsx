
import React from 'react';
import { ParadigmaSection } from '../types';
import SectionWrapper from './SectionWrapper';

interface ParadigmaProps {
  data?: ParadigmaSection;
}

const Paradigma: React.FC<ParadigmaProps> = ({ data }) => {
  if (!data) return null;

  return (
    <SectionWrapper id={data.id} heading={data.heading}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {data.paradigms.map((paradigm, index) => (
          <div key={index} className="bg-slate-800 p-8 rounded-xl shadow-xl flex flex-col">
            <div className="text-center mb-6">
              <span className="text-6xl">{paradigm.icon}</span>
              <h3 className="text-2xl font-bold text-rose-500 mt-4">{paradigm.title}</h3>
            </div>
            <ul className="space-y-4 flex-grow">
              {paradigm.points.map((point, i) => (
                 <li key={i} className="flex items-start">
                    <span className={`text-2xl mr-3 mt-[-2px] ${index === 0 ? 'text-slate-500' : 'text-green-500'}`}>{index === 0 ? '🚫' : '✅'}</span>
                    <span className="text-slate-300 text-lg">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Paradigma;
