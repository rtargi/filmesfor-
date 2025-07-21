
import React from 'react';
import { ChamadoAcaoSection } from '../types';
import SectionWrapper from './SectionWrapper';

interface ChamadoAcaoProps {
  data?: ChamadoAcaoSection;
}

const ChamadoAcao: React.FC<ChamadoAcaoProps> = ({ data }) => {
  if (!data) return null;
  let actionGroup: any = null;

  return (
    <SectionWrapper id={data.id} heading={data.heading} className="bg-slate-800">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        {data.content.map((item, index) => {
          if (item.type === 'paragraph') {
            return (
              <p key={index} className="text-lg text-slate-300 leading-relaxed">
                {item.text}
              </p>
            );
          }
          if (item.type === 'demand') {
            return (
              <div key={index} className="bg-slate-700/50 p-8 rounded-xl border border-rose-500 text-left">
                <p className="font-bold text-xl text-slate-100 mb-6">{item.text}</p>
                <ul className="space-y-4">
                  {item.actions.map((action, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-rose-500 font-black text-2xl mr-3 mt-[-4px]">›</span>
                      <span className="text-slate-300">{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          }
          if (item.type === 'callToActionGroup') {
            actionGroup = item;
            return null; // Render this group later
          }
          return null;
        })}
        {actionGroup && (
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={actionGroup.primary.link}
              className="w-full sm:w-auto inline-block bg-rose-500 hover:bg-rose-600 text-white font-bold uppercase tracking-wider py-4 px-10 rounded-lg shadow-lg shadow-rose-500/20 transition-all duration-300 transform hover:scale-105"
            >
              {actionGroup.primary.text}
            </a>
            <a
              href={actionGroup.secondary.link}
              className="w-full sm:w-auto inline-block bg-slate-600 hover:bg-slate-500 text-white font-bold uppercase tracking-wider py-4 px-10 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              {actionGroup.secondary.text}
            </a>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
};

export default ChamadoAcao;
