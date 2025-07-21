
import React from 'react';
import { AcoesEmAndamentoSection } from '../types';
import SectionWrapper from './SectionWrapper';

interface AcoesEmAndamentoProps {
  data?: AcoesEmAndamentoSection;
}

const AcoesEmAndamento: React.FC<AcoesEmAndamentoProps> = ({ data }) => {
  if (!data) return null;

  return (
    <SectionWrapper id={data.id} heading={data.heading}>
        <p className="text-lg text-center text-slate-300 max-w-3xl mx-auto mb-12">{data.intro}</p>
        <div className="space-y-8 max-w-4xl mx-auto">
            {data.actions.map((action, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 shadow-lg">
                    <header className="border-b border-rose-500/50 pb-4 mb-4">
                        <h3 className="text-2xl font-bold text-slate-100">{action.title}</h3>
                        <div className="flex justify-between text-sm text-slate-400 mt-1">
                            <span>Documento: <code className="bg-slate-700 px-2 py-1 rounded">{action.document}</code></span>
                            <span>Data: {action.date}</span>
                        </div>
                    </header>
                    <p className="italic text-slate-300 mb-6"><strong className="text-rose-400 not-italic">Objetivo:</strong> {action.objective}</p>
                    <div className="space-y-4">
                        {action.mainPoints.map((points, p_idx) => (
                            <div key={p_idx}>
                                <h4 className="font-bold text-rose-400 mb-2">{points.title}</h4>
                                <ul className="list-disc list-inside space-y-2 text-slate-300 pl-2">
                                    {points.items.map((item, i_idx) => (
                                        <li key={i_idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </SectionWrapper>
  );
};

export default AcoesEmAndamento;
