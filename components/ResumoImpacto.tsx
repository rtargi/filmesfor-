import React from 'react';
import { ResumoImpactoSection } from '../types';
import SectionWrapper from './SectionWrapper';

interface ResumoImpactoProps {
  data?: ResumoImpactoSection;
}

const ResumoImpacto: React.FC<ResumoImpactoProps> = ({ data }) => {
  if (!data) return null;
  
  const ToyBoxIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-rose-500">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l-2.25-1.313M12 21.75V15m0 6.75l2.25-1.313M12 21.75V15m2.25-1.313l-2.25 1.313m0 0l-2.25-1.313m2.25 1.313l2.25 1.313M9 15.188l1.313-2.273L12 15.188l1.687-2.273L15 15.188m-3 0l-1.688-2.273M12 3.75l-2.25 1.313M12 3.75l2.25 1.313M12 3.75v2.25M15 15.188l-1.313-2.273L12 15.188l-1.687-2.273L9 15.188m3 0l1.688-2.273" />
    </svg>
  );

  return (
    <SectionWrapper id={data.id} heading={data.heading}>
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-slate-200 mb-2">{data.subheading}</h3>
        <p className="text-lg text-slate-400 mb-12">{data.intro}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {data.stats.map((stat, index) => (
            <div key={index} className="bg-slate-900/40 backdrop-blur-sm border border-slate-700 p-6 rounded-xl shadow-lg transition-all duration-300 hover:border-rose-500/40">
              <p className="text-sm uppercase tracking-wider text-slate-400">{stat.label}</p>
              <p className="text-5xl font-black bg-gradient-to-r from-rose-400 to-rose-600 text-transparent bg-clip-text my-2">{stat.value}</p>
              <p className="text-sm text-slate-400">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-700 p-8 rounded-xl shadow-lg mb-16">
            <h4 className="text-xl font-bold text-rose-500 mb-4">{data.concentration.title}</h4>
            <p className="text-2xl font-bold text-slate-200">{data.concentration.text}</p>
        </div>

        <div className="text-left bg-slate-900/40 backdrop-blur-sm border border-slate-700 p-8 rounded-xl">
          <h4 className="text-2xl font-bold text-slate-100 mb-6 flex items-center justify-center gap-x-3"><ToyBoxIcon />{data.arquitetura.title.replace('🧸', '').trim()}</h4>
          <ul className="space-y-4 max-w-2xl mx-auto">
            {data.arquitetura.points.map((point, i) => (
              <li key={i} className="flex items-start">
                <span className="text-rose-500 font-black text-2xl mr-3 mt-[-4px]">›</span>
                <span className="text-slate-300 text-lg">{point}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-xl italic text-rose-400/90 font-semibold">{data.arquitetura.conclusion}</p>
        </div>
        
        <p className="mt-16 text-center text-sm tracking-wide font-medium text-slate-500">{data.outro}</p>
      </div>
    </SectionWrapper>
  );
};

export default ResumoImpacto;