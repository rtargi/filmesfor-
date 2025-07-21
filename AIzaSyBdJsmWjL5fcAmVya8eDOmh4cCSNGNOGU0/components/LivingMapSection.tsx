
import React from 'react';
import { LivingMapSectionData } from '../types';

interface LivingMapSectionProps {
  data: LivingMapSectionData;
}

const LivingMapSection: React.FC<LivingMapSectionProps> = ({ data }) => {
  return (
    <section id={data.id} className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="text-center mb-16">
          <h2 className="text-4xl font-bold text-center text-amber-300">{data.title}</h2>
          <p className="text-xl text-gray-300 mt-2 max-w-3xl mx-auto">{data.subtitle}</p>
        </header>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.organizations.map((org) => (
            <div key={org.name} className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col border border-gray-700 hover:border-amber-300 hover:shadow-xl hover:shadow-amber-400/10 hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <h3 className="text-xl font-bold text-white">{org.name}</h3>
              <p className="text-amber-300 text-sm mb-2">{org.focus}</p>
              <div className="text-sm space-y-1 text-gray-400 flex-grow">
                <p><span className="font-semibold text-gray-300">Produção:</span> {org.production}</p>
                <p><span className="font-semibold text-gray-300">Territórios:</span> {org.territories}</p>
              </div>
               <p className="mt-4 text-sm font-semibold text-gray-300 bg-gray-700 px-3 py-1 rounded-full self-start">{org.fsa_status}</p>
              <blockquote className="mt-4 border-l-4 border-gray-600 pl-4 italic text-gray-300">
                {org.quote}
              </blockquote>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-800/50 p-8 rounded-lg border border-gray-700">
            <h4 className="text-2xl font-bold text-white text-center mb-6">E Milhares de Outros...</h4>
            <div className="flex flex-wrap justify-center gap-2">
                {data.excluded_organizations_list.map((name, index) => (
                    <span key={index} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-md text-sm hover:bg-gray-600 transition-colors">
                        {name}
                    </span>
                ))}
            </div>
            <p className="mt-8 text-center text-lg text-amber-200 bg-gray-800 p-4 rounded-md max-w-4xl mx-auto">{data.exclusion_conclusion}</p>
        </div>
      </div>
    </section>
  );
};

export default LivingMapSection;
