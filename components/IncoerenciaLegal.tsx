
import React from 'react';
import { IncoerenciaLegalSection } from '../types';
import SectionWrapper from './SectionWrapper';

interface IncoerenciaLegalProps {
  data?: IncoerenciaLegalSection;
}

const IncoerenciaLegal: React.FC<IncoerenciaLegalProps> = ({ data }) => {
  if (!data) return null;

  return (
    <SectionWrapper id={data.id} heading={data.heading} className="bg-slate-800">
      <div className="max-w-3xl mx-auto space-y-8">
        {data.content.map((item, index) => {
          if (item.type === 'paragraph') {
            return (
              <p key={index} className="text-lg text-slate-300 text-center leading-relaxed">
                {item.text}
              </p>
            );
          }
          if (item.type === 'list') {
            return (
              <ul key={index} className="space-y-6">
                {item.items.map((listItem, i) => (
                  <li key={i} className="flex items-start bg-slate-700 p-6 rounded-xl">
                    {listItem.icon && <span className="text-2xl mr-4 mt-1">{listItem.icon}</span>}
                    <div className={!listItem.icon ? 'ml-10' : ''}>
                      <h4 className="font-bold text-slate-100">{listItem.law}</h4>
                      <p className="text-slate-400">{listItem.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            );
          }
          return null;
        })}
      </div>
    </SectionWrapper>
  );
};

export default IncoerenciaLegal;
