
import React from 'react';
import { LegalIncoherenceSectionData } from '../types';

interface LegalIncoherenceSectionProps {
  data: LegalIncoherenceSectionData;
}

const LegalIncoherenceSection: React.FC<LegalIncoherenceSectionProps> = ({ data }) => {
  return (
    <section id={data.id} className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-300">{data.title}</h2>
          <p className="text-lg text-gray-300 mt-4">{data.description}</p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 text-center">
            {data.legal_points.map((point) => (
                <div key={point.number} className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
                    <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-amber-400 text-gray-900 font-extrabold text-3xl mb-4">
                        {point.number}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{point.title}</h3>
                    <p className="text-gray-400">{point.text}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default LegalIncoherenceSection;
