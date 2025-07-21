
import React from 'react';
import { LinhaDoTempoSection } from '../types';
import SectionWrapper from './SectionWrapper';

interface LinhaDoTempoProps {
  data?: LinhaDoTempoSection;
}

const LinhaDoTempo: React.FC<LinhaDoTempoProps> = ({ data }) => {
  if (!data) return null;

  return (
    <SectionWrapper id={data.id} heading={data.heading}>
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-1/2 w-0.5 h-full bg-slate-700 transform -translate-x-1/2"></div>
        {data.events.map((event, index) => (
          <div key={index} className="relative mb-8 flex items-center w-full">
            <div className="w-1/2 pr-8 text-right">
              {index % 2 === 0 && (
                <div className="bg-slate-800 p-6 rounded-xl shadow-lg">
                  <p className="font-bold text-rose-500">{event.date}</p>
                  <h3 className="text-xl font-bold mt-1 text-slate-100">{event.title}</h3>
                  <p className="mt-2 text-slate-300">{event.description}</p>
                </div>
              )}
            </div>
            <div className="absolute left-1/2 w-4 h-4 bg-rose-500 rounded-full transform -translate-x-1/2 border-4 border-slate-900"></div>
            <div className="w-1/2 pl-8">
              {index % 2 !== 0 && (
                 <div className="bg-slate-800 p-6 rounded-xl shadow-lg">
                  <p className="font-bold text-rose-500">{event.date}</p>
                  <h3 className="text-xl font-bold mt-1 text-slate-100">{event.title}</h3>
                  <p className="mt-2 text-slate-300">{event.description}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default LinhaDoTempo;
