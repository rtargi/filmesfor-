
import React from 'react';
import { DiagnosticoSection } from '../types';
import SectionWrapper from './SectionWrapper';

interface DiagnosticoProps {
  data?: DiagnosticoSection;
}

const Diagnostico: React.FC<DiagnosticoProps> = ({ data }) => {
  if (!data) return null;

  return (
    <SectionWrapper id={data.id} heading={data.heading} className="bg-transparent">
      <div className="space-y-6 max-w-3xl mx-auto text-center text-lg text-slate-300 leading-relaxed">
        {data.content.map((p, index) => (
          <p key={index}>{p.text}</p>
        ))}
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.keyFigures.map((figure, index) => (
          <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-xl shadow-lg text-center transition-all duration-300 hover:border-rose-500/40 hover:-translate-y-1">
            <p className="text-5xl font-bold bg-gradient-to-r from-rose-400 to-rose-600 text-transparent bg-clip-text">{figure.value}</p>
            <p className="mt-4 text-lg font-semibold text-slate-200">{figure.label}</p>
            {figure.unit && <p className="mt-1 text-sm text-slate-500">{figure.unit}</p>}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Diagnostico;