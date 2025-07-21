
import React from 'react';
import { ArquiteturaExclusaoSection } from '../types';
import SectionWrapper from './SectionWrapper';
import Table from './Table';

interface ArquiteturaExclusaoProps {
  data?: ArquiteturaExclusaoSection;
}

const ArquiteturaExclusao: React.FC<ArquiteturaExclusaoProps> = ({ data }) => {
  if (!data) return null;

  return (
    <SectionWrapper id={data.id} heading={data.heading} className="bg-transparent">
      {data.content.map((item, index) => {
        if (item.type === 'paragraph') {
          return (
            <p key={index} className="text-lg text-center text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              {item.text}
            </p>
          );
        }
        if (item.type === 'exclusionPillars') {
          return (
            <div key={index} className="space-y-12 max-w-4xl mx-auto">
              {item.items.map((pillar, i) => (
                <div key={i} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-xl shadow-lg">
                  <h4 className="font-serif text-2xl font-bold text-rose-400 mb-4">{pillar.pillar}</h4>
                  <div className="space-y-4 text-slate-300 leading-relaxed">
                    {pillar.description.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                  {pillar.table && (
                    <div className="mt-8">
                      <Table tableData={pillar.table} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          );
        }
        return null;
      })}
    </SectionWrapper>
  );
};

export default ArquiteturaExclusao;