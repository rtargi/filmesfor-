
import React from 'react';
import { UrgentCallSectionData } from '../types';
import { ArrowRightIcon } from './icons';

interface UrgentCallSectionProps {
  data: UrgentCallSectionData;
}

const UrgentCallSection: React.FC<UrgentCallSectionProps> = ({ data }) => {
  const { title, description, call_to_action } = data;
  const mailtoLink = `mailto:?subject=${encodeURIComponent("Apoio à Frente de Batalha pela Narrativa Climática")}&body=${encodeURIComponent("Eu apoio a causa e quero me juntar à frente de batalha.")}`;

  return (
    <section id={data.id} className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-amber-300 tracking-wide">
          {title}
        </h2>
        <p className="mt-6 text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          {description}
        </p>
        <div className="mt-12 bg-gray-900/50 p-8 rounded-lg border-2 border-amber-400 shadow-2xl">
          <p className="text-3xl font-bold text-white">
            {call_to_action.main_text}
          </p>
          <p className="mt-2 text-lg text-gray-400">
            {call_to_action.secondary_text}
          </p>
          <a
            href={mailtoLink}
            className="mt-8 inline-block px-10 py-4 bg-amber-400 text-gray-900 font-bold text-lg uppercase rounded-lg shadow-lg hover:bg-amber-300 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-amber-500/50"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <span className="flex items-center justify-center gap-2">
              {call_to_action.button_text}
              <ArrowRightIcon className="w-5 h-5" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default UrgentCallSection;
