import React from 'react';
import { ProvaDaOmissaoSection } from '../types';
import SectionWrapper from './SectionWrapper';

interface ProvaDaOmissaoProps {
  data?: ProvaDaOmissaoSection;
}

const ProvaDaOmissao: React.FC<ProvaDaOmissaoProps> = ({ data }) => {
  if (!data) return null;

  return (
    <SectionWrapper id={data.id} heading={data.heading}>
      <div className="space-y-12 max-w-4xl mx-auto">
        {data.chapters.map((chapter, index) => (
          <div key={index} className="bg-slate-100 text-slate-800 p-8 sm:p-10 rounded-lg shadow-2xl border border-slate-200 ring-1 ring-black/5">
            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-6 uppercase tracking-wider border-b-2 border-slate-200 pb-4">{chapter.title}</h3>
            
            {chapter.description && <p className="text-lg text-slate-600 my-4 leading-relaxed">{chapter.description}</p>}

            {chapter.quote && (
              <blockquote className="bg-rose-100/80 p-6 my-6 rounded-md shadow-inner">
                <p className="text-xl font-medium text-slate-900 leading-relaxed">"{chapter.quote.text}"</p>
                <cite className="block mt-4 text-right text-slate-500 font-bold tracking-wide">{chapter.quote.source}</cite>
              </blockquote>
            )}

            {chapter.consequences && (
              <ul className="mt-6 space-y-4">
                {chapter.consequences.map((consequence, i) => (
                  <li key={i} className={`p-4 rounded-lg ${consequence.type === 'critical' ? 'bg-rose-100' : 'bg-slate-100'}`}>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-slate-700">{consequence.label}</span>
                      {consequence.value && <span className="text-2xl font-black text-rose-600">{consequence.value}</span>}
                    </div>
                    {consequence.detail && <p className="text-sm text-slate-500 mt-1">{consequence.detail}</p>}
                  </li>
                ))}
              </ul>
            )}

            {chapter.analysis && <p className="mt-6 text-lg font-semibold text-rose-900 bg-rose-50 p-4 rounded-lg">{chapter.analysis}</p>}
            {chapter.conclusion && <p className="mt-4 text-lg text-slate-700 leading-relaxed">{chapter.conclusion}</p>}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProvaDaOmissao;